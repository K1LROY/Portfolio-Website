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

      <div id="experience">
        <div className="container space-section">
          <h2 className="section-title wow fadeInUp">Experience</h2>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="timeline bg-dark rounded padding-30">
                <div className="timeline-container wow fadeInUp">
                  <div className="content">
                    <span className="time">2019 - Present</span>
                    <h3 className="title">
                      <i className="ion-aperture"></i>
                      Academic Degree
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>

                <div className="timeline-container">
                  <div className="content">
                    <span className="time">2017 - 2013</span>
                    <h3 className="title">
                      <i className="ion-grid"></i> Bachelor’s Degree
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>

                <div className="timeline-container">
                  <div className="content">
                    <span className="time">2013 - 2009</span>
                    <h3 className="title">
                      <i className="ion-clock"></i> Honours Degree
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="timeline bg-dark rounded shadow-dark padding-30">
                <div className="timeline-container">
                  <div className="content">
                    <span className="time">2019 - Present</span>
                    <h3 className="title">
                      <i className="ion-compass"></i> Web Designer
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>

                <div className="timeline-container">
                  <div className="content">
                    <span className="time">2017 - 2013</span>
                    <h3 className="title">
                      <i className="ion-bag"></i> Front-End Developer
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>

                <div className="timeline-container">
                  <div className="content">
                    <span className="time">2013 - 2009</span>
                    <h3 className="title">
                      <i className="ion-monitor"></i> Back-End Developer
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet quo ei simul congue exerci ad
                      nec admodum perfecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog">
        <div class="container space-section">
          <h2 class="section-title wow fadeInUp">Latest Posts</h2>

          <div class="spacer" data-height="60"></div>

          <div class="row blog-wrapper mt-5">
            <div class="col-md-4">
              <div class="blog-item rounded bg-dark shadow-dark wow fadeIn">
                <div class="thumb">
                  <Link to="#">
                    <span class="category">Reviews</span>
                  </Link>
                  <Link to="#">
                    <img src="images/1.svg" alt="blog-title" />
                  </Link>
                </div>
                <div class="details">
                  <h4 class="my-0 title">
                    <Link to="#">
                      5 Best App Development Tool for Your Project
                    </Link>
                  </h4>
                  <ul class="list-inline meta mb-0 mt-2">
                    <li class="list-inline-item">09 February, 2020</li>
                    <li class="list-inline-item">Dolby</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="blog-item rounded bg-dark shadow-dark wow fadeIn">
                <div class="thumb">
                  <Link to="#">
                    <span class="category">Tutorial</span>
                  </Link>
                  <Link to="#">
                    <img src="images/2.svg" alt="blog-title" />
                  </Link>
                </div>
                <div class="details">
                  <h4 class="my-0 title">
                    <Link to="#">Common Misconceptions About Payment</Link>
                  </h4>
                  <ul class="list-inline meta mb-0 mt-2">
                    <li class="list-inline-item">07 February, 2020</li>
                    <li class="list-inline-item">Dolby</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="blog-item rounded bg-dark shadow-dark wow fadeIn">
                <div class="thumb">
                  <Link to="#">
                    <span class="category">Business</span>
                  </Link>
                  <Link to="#">
                    <img src="images/3.svg" alt="blog-title" />
                  </Link>
                </div>
                <div class="details">
                  <h4 class="my-0 title">
                    <Link to="#">3 Things To Know About Startup Business</Link>
                  </h4>
                  <ul class="list-inline meta mb-0 mt-2">
                    <li class="list-inline-item">06 February, 2020</li>
                    <li class="list-inline-item">Dolby</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
