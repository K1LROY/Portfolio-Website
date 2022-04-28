import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

import $ from "jquery";

$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(".full-nav").addClass("open");
  });
  $(".nav-close").click(function () {
    $(".full-nav").removeClass("open");
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
});

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
          <NavLink className="nav-icon" to="#">
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
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

      <div className="full-nav">
        <div className="logo">
          <NavLink to="#">
            <img src="logo2.png" alt="" />
          </NavLink>
        </div>
        <nav className="nav2">
          <ul>
            <li>
              <NavLink to="#">
                <span>01. </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>02. </span>Features
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>03. </span>Team
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>04. </span>Work
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>05. </span>Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>06. </span>Client
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>07. </span>Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>08. </span>Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="corner-circle">
          <NavLink className="nav-close" to="#" style={{ cursor: "pointer" }}>
            <span></span>
            <span></span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
