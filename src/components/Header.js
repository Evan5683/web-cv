import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Tab from "./Tab";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className='link'>
            <Link to='/Home'>Home</Link>
          </li>
          <li className='link'>
            <Link to='/Events'>Resume</Link>
          </li>
          <li className='link'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='link'>
            <Link to='/Blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
