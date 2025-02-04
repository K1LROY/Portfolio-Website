import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

import "../styles/contents.css";

export default function Contents() {
  return (
    <div>
      <Element id="contents">
        <div id="about-us">
          <div className="container ">
            <div className="row ">
              <div className="col text-center">
                <h3 className="wow fadeInDown">New Features</h3>
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide mt-5"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-shield fa-5x"></i>
                          </div>
                          <h4 class="text-dark">WPML MULTI-LANGUAGE SUPPORT</h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-cog fa-5x"></i>
                          </div>
                          <h4 class="text-dark"> FULLY CUSTOMIZABLE THEME </h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-bolt fa-5x"></i>
                          </div>
                          <h4 class="text-dark">STUNNING UPDATE VERSION 7.0</h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-shield fa-5x"></i>
                          </div>
                          <h4 class="text-dark">WPML MULTI-LANGUAGE SUPPORT</h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-cog fa-5x"></i>
                          </div>
                          <h4 class="text-dark"> FULLY CUSTOMIZABLE THEME </h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-bolt fa-5x"></i>
                          </div>
                          <h4 class="text-dark">STUNNING UPDATE VERSION 7.0</h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-shield fa-5x"></i>
                          </div>
                          <h4 class="text-dark">WPML MULTI-LANGUAGE SUPPORT</h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-cog fa-5x"></i>
                          </div>
                          <h4 class="text-dark"> FULLY CUSTOMIZABLE THEME </h4>

                          <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus dictum enim diam, at condimentum
                            purus facilisis in. Aenean convallis tempor nulla,
                            in elementum odio ornare vitae. In faucibus tempus
                            ante vitae pretium.
                          </p>
                        </div>
                        <div class="col-md px-md-5">
                          <div class="text-dark pb-3">
                            <i class="fa fa-bolt fa-5x"></i>
                          </div>
                          <h4 class="text-dark">STUNNING UPDATE VERSION 7.0</h4>

                          <p class="text-secondary">
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
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

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

      <div id="contact">
        <div class="container space-section space-end">
          <h2 class="section-title wow fadeInUp">Get In Touch</h2>

          <div class="spacer" data-height="60"></div>

          <div class="row mt-5 ">
            <div class="col-md-4">
              <div class="contact-info">
                <h3 class="wow fadeInUp">Let's talk about everything!</h3>
                <p class="wow fadeInUp text-white">
                  Don't like forms? Send me an
                  <a href="mailto:kwandee1992@gmail.com">email</a>. 👋
                </p>
              </div>
            </div>

            <div class="col-md-8">
              <form
                id="contact-form"
                class="contact-form mt-6"
                method="post"
                action="https://jthemes.net/themes/html/bolby/demo/form/contact.php"
              >
                <div class="messages"></div>

                <div class="row">
                  <div class="column col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="InputName"
                        id="InputName"
                        placeholder="Your name"
                        required="required"
                        data-error="Name is required."
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="column col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="InputEmail"
                        name="InputEmail"
                        placeholder="Email address"
                        required="required"
                        data-error="Email is required."
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="column col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="InputSubject"
                        name="InputSubject"
                        placeholder="Subject"
                        required="required"
                        data-error="Subject is required."
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="column col-md-12">
                    <div class="form-group">
                      <textarea
                        name="InputMessage"
                        id="InputMessage"
                        class="form-control"
                        rows="5"
                        placeholder="Message"
                        required="required"
                        data-error="Message is required."
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Submit"
                  class="btn btn-default"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
