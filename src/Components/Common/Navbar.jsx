import React, { useState } from "react";
import logo from "../../Assets/Logo/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnDisplay, setBtnDisplay] = useState(true);

  return (
    <div class="super-nav-class">
      <input type="checkbox" id="op"></input>
      <div class="lower p-4">
        <div>
          <Link to="/">
            <img src={logo} width={50}></img>
          </Link>
        </div>
        <div>
          <label for="op">
            <i
              class={btnDisplay ? "fa fa-2x fa-bars" : "d-none"}
              aria-hidden="true"
              onClick={() => {
                setBtnDisplay(false);
              }}
            ></i>
          </label>
        </div>
      </div>
      <div class="overlay overlay-hugeinc">
        <label
          for="op"
          onClick={() => {
            setBtnDisplay(true);
          }}
        ></label>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/">Clients</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="#">
    //     Navbar
    //   </a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div class="navbar-nav">
    //       <Link class="nav-item nav-link active" to="/">
    //         Home <span class="sr-only">(current)</span>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
