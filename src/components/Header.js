import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <nav class="nav">
          <ul>
            <li>
              <NavLink to="#vid">home</NavLink>
            </li>
            <li>
              <NavLink to="#contents">features</NavLink>
            </li>
            <li>
              <NavLink to="#services">Projects</NavLink>
            </li>
            <li>
              <NavLink to="#experience">Experiance</NavLink>
            </li>
            <li class="logo">
              <NavLink to="#">
                <img src="logo-white.png" class="white" alt="" />
                <img src="logo-white.png" class="black" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="#blog"> blog</NavLink>
            </li>
            <li>
              <NavLink to="#contact">contact</NavLink>
            </li>
          </ul>
        </nav>

        <div class="bg-video wow fadeInUp" data-wow-delay="1s" id="vid">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            id="heroVideo"
          >
            <source src="king-kong.mp4" type="video/mp4" class="" />
          </video>
        </div>
      </header>
    </div>
  );
}
