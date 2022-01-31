import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function Menubar() {
    var x = document.querySelector("ul");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <nav>
        <Link to="/">
          <h1>CurdApp</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/page">About Us</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
        </ul>
        <div className="btn_box">
          <Link to="/add/worker">
            <button>Add User</button>
          </Link>
        </div>
        <div className="icon">
          <img
            src="/icons/menu.png"
            className="menu"
            onClick={Menubar}
            alt="menu"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
