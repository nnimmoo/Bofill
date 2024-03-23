import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import menuLogo from "../assets/images/noun-hamburger-menu-896392.png"
function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Hide when scrolling down
      } else {
        setShow(true); // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${show ? 'show' : 'hide'}`}>
      <Link to={"/"}>
        <h1>Bofill</h1>
      </Link>
      <Link to={"/menu"}>
        <img src={menuLogo} alt="Menu Symbol" />
      </Link>
    </div>
  );
}

export default Header;
