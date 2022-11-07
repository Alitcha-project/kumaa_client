import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <h1>Kumaa</h1>
        </div>
        <div className="">
          <ul>
            <a href="/">
              <li className="li1">Home</li>
            </a>
            <a href="/">
              <li className="li2">Discussion</li>
            </a>
            <a href="/">
              <li className="li3">Ebook</li>
            </a>
          </ul>
        </div>
        <div className="">
          <input
            type="search"
            name=""
            id=""
            placeholder="search content"
            className="searchbar"
          />
        </div>
        <div className="avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user-circle"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
          </svg>
        </div>
        <div className="notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bell"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
