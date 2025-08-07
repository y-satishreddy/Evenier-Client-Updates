import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../../assets/images/logo-new.svg";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const navbar = $(".navigation-holder");
    const openBtn = $(".mobail-menu .open-btn");

    function toggleMobileNavigation() {
      openBtn.off("click").on("click", function (e) {
        e.stopImmediatePropagation();
        navbar.toggleClass("slideInn");
        openBtn.toggleClass("x-close");
        return false;
      });
    }

    function toggleClassForSmallNav() {
      const windowWidth = window.innerWidth;
      const mainNav = $("#navbar > ul");
      if (windowWidth <= 991) {
        mainNav.addClass("small-nav");
      } else {
        mainNav.removeClass("small-nav");
      }
    }

    function smallNavFunctionality() {
      const windowWidth = window.innerWidth;
      const smallNav = $(".navigation-holder > .small-nav");
      const subMenu = smallNav.find(".sub-menu");
      const megamenu = smallNav.find(".mega-menu");
      const menuItemWithSubMenu = smallNav.find(".menu-item-has-children > a");

      if (windowWidth <= 991) {
        subMenu.hide();
        megamenu.hide();
        menuItemWithSubMenu.off("click").on("click", function (e) {
          const $this = $(this);
          $this.siblings().slideToggle();
          e.preventDefault();
          e.stopImmediatePropagation();
          $this.toggleClass("rotate");
        });
      } else {
        $(".navigation-holder").find(".sub-menu, .mega-menu").show();
      }
    }

    function setupEventHandlers() {
      $("body").on("click", () => {
        $(".navigation-holder").removeClass("slideInn");
        $(".open-btn").removeClass("x-close");
      });

      $(".menu-close").on("click", () => {
        $(".navigation-holder").removeClass("slideInn");
        $(".open-btn").removeClass("x-close");
      });
    }

    let lastScrollTop = 0;
    const header = document.getElementById("header");
    const pageWrapper = document.querySelector(".page-wrapper");

    function handleStickyScroll() {
      const stickyPosition = header.offsetTop + header.offsetHeight;
      if (window.pageYOffset > stickyPosition) {
        header.classList.add("sticky");
        if (pageWrapper) {
          pageWrapper.style.marginTop = header.offsetHeight + "px";
        }
      } else {
        header.classList.remove("sticky");
        if (pageWrapper) {
          pageWrapper.style.marginTop = "0px";
        }
      }
    }

    function handleShowHideScroll() {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add("hide-header");
        header.classList.remove("show-header");
      } else {
        header.classList.remove("hide-header");
        header.classList.add("show-header");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    function onScroll() {
      handleStickyScroll();
      handleShowHideScroll();
    }

    toggleMobileNavigation();
    toggleClassForSmallNav();
    smallNavFunctionality();
    setupEventHandlers();
    window.addEventListener("scroll", onScroll);

    $(window).on("resize", () => {
      toggleClassForSmallNav();
      smallNavFunctionality();
      if (window.innerWidth > 991) {
        navbar.removeClass("slideInn");
        openBtn.removeClass("x-close");
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className="main-navbar fade-in">
        <div className="wpo-site-header wpo-header-style-1">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between w-100">
                {/* Hamburger */}
                <div className="col-3 d-lg-none">
                  <div className="mobail-menu">
                    <button type="button" className="navbar-toggler open-btn">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar first-angle"></span>
                      <span className="icon-bar middle-angle"></span>
                      <span className="icon-bar last-angle"></span>
                    </button>
                  </div>
                </div>

                {/* Logo - center aligned for mobile */}
                <div className="col-6 d-lg-none text-center">
                  <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                </div>

                {/* Call icon */}
                <div className="col-3 d-lg-none text-end">
                  <a href="tel:9199223442" className="social-info">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </a>
                </div>

                {/* Desktop social icons */}
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="social-info">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fi flaticon-facebook-app-symbol"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fi flaticon-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fi flaticon-instagram-1"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Navigation */}
                <div className="col-lg-8">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Events</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/wedding-events">Wedding</Link>
                          </li>
                          <li>
                            <Link to="/corporate-events">Corporate</Link>
                          </li>
                          <li>
                            <Link to="/school-events">School</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="brand-logo d-none d-lg-block">
                        <Link to="/" className="navbar-brand">
                          <img src={logo} alt="Logo" />
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Gallery</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/wedding-gallery">Wedding</Link>
                          </li>
                          <li>
                            <Link to="/corporate-gallery">Corporate</Link>
                          </li>
                          <li>
                            <Link to="/school-gallery">School</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/enquiry">Enquiry Now</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Desktop Call Icon */}
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="header-right">
                    <a href="tel:9199223442" className="social-info-call">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="header-back"></div>
    </>
  );
};

export default Header;
