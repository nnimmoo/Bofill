import React, { useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../node_modules/react-horizontal-scrolling-menu/dist/styles.css";


import  DragDealer  from "../script/DragDealer.js";

function Card({ itemId, selected, onClick, title }) {
  const visibility = useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <div
      onClick={() => onClick()}
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "300px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: isVisible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(isVisible)}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? "green" : "bisque",
          height: "200px",
        }}
      />
    </div>
  );
}

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function ProjectsContainer() {
  const [items] = useState(getItems);

  // NOTE: for drag by mouse
  const dragState = useRef(new DragDealer());

  const handleDrag = (scrollContainer) => (ev) => {
    dragState.current.dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });
  };

  const [selected, setSelected] = useState("");
  const handleItemClick = (itemId) => () => {
    if (dragState.current.dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div onMouseLeave={dragState.current.dragStop}>
          <ScrollMenu
            onWheel={(apiObj, ev) => onWheel(apiObj, ev)}
            onMouseDown={() => dragState.current.dragStart}
            onMouseUp={() => dragState.current.dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selected}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default ProjectsContainer;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
