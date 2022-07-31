import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Blogdetails from "../components/Blogdetails";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Porfolio from "../components/Porfolio";
import Portfoliodetails from "../components/Portfoliodetails";
import Service from "../components/Service";

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <div id="preloader-active">
            <div class="preloader d-flex align-items-center justify-content-center">
                <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                        <img src="assets/img/logo/loder.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div> */}
          <header>
            <div class="header-area">
              <div class="main-header  header-sticky">
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-2 col-md-1">
                      <div class="logo">
                        <Link to="/">
                          <img src="assets/img/logo/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                      <div class="menu-main d-flex align-items-center justify-content-end">
                        <div class="main-menu f-right d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/services">Services</Link>
                              </li>
                              <li>
                                <Link to="/porfolio">Porfolio</Link>
                              </li>
                              <li>
                                <a href="#">Page</a>
                                <ul class="submenu">
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/blog-details">Blog Details</Link>
                                  </li>
                                  <li>
                                    <Link to="/elem">Element</Link>
                                  </li>
                                  <li>
                                    <Link to="/portfolio-details">
                                      Portfolio Details
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div class="header-right-btn f-right d-none d-xl-block ml-20">
                          <a href="#" class="btn header-btn">
                            Get Free Consultent
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/porfolio" element={<Porfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<Blogdetails />} />
            <Route path="/portfolio-details" element={<Portfoliodetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
