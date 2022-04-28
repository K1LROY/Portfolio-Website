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
    </div>
  );
}
