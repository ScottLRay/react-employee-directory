import React from "react";
import "../styles/navbar.css";

function Navbar( {props, sortEmployees}) {
  return (
    <div className="searchbar">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Name"
            aria-label="Search"
            onChange={props.handleInputChange}
            name="search"
          />
            <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Gender"
            aria-label="Search"
            onChange={sortEmployees}
            name="sort"
          />
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
