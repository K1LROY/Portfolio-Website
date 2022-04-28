import React from "react";
import { Link } from "react-router-dom";
import "../styles/contents.css";

export default function Contents() {
  return (
    <div>
      <div id="contents">
        <div id="about-us">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h3 className="wow fadeInDown">New Features</h3>
                <p className="lead wow fadeInUp">
                  THE STUNNING POSSIBILITIES OF THE THEME
                </p>
                <br />
                <br />
                <div id="one" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md px-md-5">
                          <div className="text-dark pb-3">
                            <i className="fa fa-shield fa-5x"></i>
                          </div>
                          <h4 className="text-dark">
                            WPML MULTI-LANGUAGE SUPPORT
                          </h4>
                          <br />
                          <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div className="col-md px-md-5">
                          <div className="text-dark pb-3">
                            <i className="fa fa-cog fa-5x"></i>
                          </div>
                          <h4 className="text-dark">
                            FULLY CUSTOMIZABLE THEME
                          </h4>
                          <br />
                          <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div className="col-md px-md-5">
                          <div className="text-dark pb-3">
                            <i className="fa fa-bolt fa-5x"></i>
                          </div>
                          <h4 className="text-dark">
                            STUNNING UPDATE VERSION 7.0
                          </h4>
                          <br />
                          <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div class="container space-section">
          <h2 class="section-title wow fadeInUp">Recently Added Projects</h2>

          <div class="spacer" data-height="60"></div>

          <div class="row mt-5">
            <div class="col-md-4">
              <div class="service-box rounded  padding-30 text-center  shadow-blue">
                <img src="images/service-1.svg" alt="" />
                <h3>UI/UX design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="service-box rounded padding-30 text-center shadow-yellow">
                <img src="images/service-2.svg" alt="" />
                <h3>Web Dev+</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="service-box rounded  padding-30 text-center  shadow-pink">
                <img src="images/service-3.svg" alt="UI/UX design" />
                <h3>Photography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
