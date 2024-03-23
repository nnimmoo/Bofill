import React from 'react';
import '../styles/Menu.css'; // Adjust the path to your CSS file
import { Link } from 'react-router-dom';
// import any other required assets or scripts

class Menu extends React.Component {
    render() {
        return (
            <main>
                <nav className="menu">
                    <Link to="/">
                        <a className="menu__item">
                            <span className="menu__item-text"><span className="menu__item-textinner"> <i>Home</i></span></span>
                            <span className="menu__item-sub">Go to landing page</span>
                        </a>
                    </Link>
                    <Link to="/about">
                        <a className="menu__item" >
                            <span className="menu__item-text"><span className="menu__item-textinner"><i>About</i></span></span>
                            <span className="menu__item-sub">More about the mastermind</span>
                        </a>
                    </Link>
                    <Link to="/projects">
                        <a className="menu__item" >
                            <span className="menu__item-text"><span className="menu__item-textinner"><i>Projects</i></span></span>
                            <span className="menu__item-sub">Dive into projects</span>
                        </a>
                    </Link>
                    <Link to="/practice">
                        <a className="menu__item" >
                            <span className="menu__item-text"><span className="menu__item-textinner"><i>Practice</i></span></span>
                            <span className="menu__item-sub">Company</span>
                        </a>
                    </Link>
                    <Link to="/contact">
                        <a className="menu__item" >
                            <span className="menu__item-text"><span className="menu__item-textinner"><i>Contact</i></span></span>
                            <span className="menu__item-sub">Want to reach out?</span>
                        </a>
                    </Link>
                </nav>
            </main>
        );
    }
}

export default Menu;
