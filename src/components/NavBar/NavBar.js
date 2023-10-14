/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar d-flex justify-content-between align-items-center">
      <a href="">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </a>
      <div className="">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              New & Popular
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Browse by Languages
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <a
          className="avatar dropdown-toggle text-white"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpjAHN91zBiChGT0ii-FezRcABX1h3RpM9Bj50y1vVHydrClthM5b2YCLoxbER493BQgGChHwkTBiCg0zFSxwiu6vLOQtw.png?r=e31"
            alt="Avatar"
          />
          <ul className="bg-black dropdown-menu dropdown-menu-right">
            <li>
              <img
                src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcVwQYPmMxXjQNm44V_uHKBPrxZ3hnCbgZ_xaTT-7tQma42tQFQIY0tumcKwnxlRQYHJpCZVV_E--0Vvvhpca6W19qWqiUs.png?r=0a4"
                alt="Avatar"
              />
              MADY
            </li>
            <li>
              <img
                src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXiSx5gTw7PLPpjMyot50EzOt1tMNrDExYdWiAyiYjij4eDPnXAgs18yobZMrcQCf59msLjMmNya_vTc3qkJNDgyP0XnJ6M.png?r=b38"
                alt="Avatar"
              />
              SALVA
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
