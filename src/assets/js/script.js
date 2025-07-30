(function ($) {
  "use strict";

  /*------------------------------------------
        Nice Select
    -------------------------------------------*/

  $(".select").niceSelect();

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
  // Toggle mobile navigation
  // Ensure DOM is ready before executing
  $(document).ready(function () {
    /** Toggle Mobile Navigation **/
    function toggleMobileNavigation() {
      const navbar = $(".navigation-holder");
      const openBtn = $(".mobail-menu .open-btn");
      const xbutton = $(".mobail-menu .navbar-toggler");

      openBtn.off("click").on("click", function (e) {
        e.stopImmediatePropagation();

        navbar.toggleClass("slideInn");
        xbutton.toggleClass("x-close", navbar.hasClass("slideInn"));
        return false;
      });
    }

    /** Toggle Class for Small Navigation **/
    function toggleClassForSmallNav() {
      const windowWidth = window.innerWidth;
      const mainNav = $("#navbar > ul");

      if (windowWidth <= 991) {
        mainNav.addClass("small-nav");
      } else {
        mainNav.removeClass("small-nav");
      }
    }

    /** Small Navigation Functionality **/
    function smallNavFunctionality() {
      const windowWidth = window.innerWidth;
      const smallNav = $(".navigation-holder > .small-nav");
      const subMenu = smallNav.find(".sub-menu, .mega-menu");
      const menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

      if (windowWidth <= 991) {
        subMenu.hide();
        menuItemWidthSubMenu.off("click").on("click", function (e) {
          const $this = $(this);
          $this.siblings(".sub-menu, .mega-menu").slideToggle();
          $this.toggleClass("rotate");
          e.preventDefault();
          e.stopImmediatePropagation();
        });
      } else {
        subMenu.show();
      }
    }

    /** Active Menu Item on Scroll **/
    function activeMenuItem($links) {
      const top = $(window).scrollTop();
      const nav = $links;
      const nav_height = nav.outerHeight();
      const cur_pos = top + 2;
      const sections = $("section");

      sections.each(function () {
        const sectionTop = $(this).offset().top - nav_height;
        const sectionBottom = sectionTop + $(this).outerHeight();

        if (cur_pos >= sectionTop && cur_pos <= sectionBottom) {
          nav.find("li").removeClass("current-menu-item");
          nav
            .find("a[href='#" + $(this).attr("id") + "']")
            .parent()
            .addClass("current-menu-item");
        } else if (cur_pos === 2) {
          nav.find("li").removeClass("current-menu-item");
        }
      });
    }

    /** Smooth Scrolling **/
    function smoothScrolling($scrollLinks, $topOffset) {
      const links = $scrollLinks;
      const topGap = $topOffset;

      links.on("click", function () {
        const pathname = location.pathname.replace(/^\//, "");
        const thisPath = this.pathname.replace(/^\//, "");

        if (pathname === thisPath && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              { scrollTop: target.offset().top - topGap },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
        return false;
      });
    }

    /** Set Header Middle Logo **/
    function siteMiddleLogoSetting() {
      const isHeaderStyle =
        $(".wpo-header-style-1, .wpo-header-style-3").length > 0;
      const isDesktop = window.innerWidth > 991;
      const nav = $("#navbar > ul");
      const navLi = nav.find(">li");

      if (isHeaderStyle && isDesktop && nav.length && navLi.length > 1) {
        nav.find(".brand-logo").remove();
        const midLastLi = nav.find(
          ">li:nth-child(" + Math.ceil(navLi.length / 2) + ")"
        );
        const logo = $(".navbar-brand");

        if (logo.length) {
          $("<li class='brand-logo'></li>").insertAfter(midLastLi).append(logo);
        }
      } else if (isHeaderStyle && !isDesktop && nav.length) {
        const logo = $(
          ".wpo-header-style-1 .navbar-brand, .wpo-header-style-3 .navbar-brand"
        );
        const navOpenBtn = $(".navbar-header");
        if (logo.length && navOpenBtn.length) {
          navOpenBtn.after(logo);
        }
      }
    }

    // Initial setups
    toggleMobileNavigation();
    toggleClassForSmallNav();
    smallNavFunctionality();
    siteMiddleLogoSetting();

    /** On Resize **/
    $(window).on("resize", function () {
      toggleClassForSmallNav();
      smallNavFunctionality();
      siteMiddleLogoSetting();

      if (window.innerWidth > 991) {
        $(".navigation-holder").removeClass("slideInn");
        $(".mobail-menu .navbar-toggler").removeClass("x-close");
      }
    });

    /** Hide navigation on body click **/
    $("body").on("click", function () {
      $(".navigation-holder").removeClass("slideInn");
      $(".mobail-menu .navbar-toggler").removeClass("x-close");
    });

    /** Close Menu **/
    $(".menu-close").on("click", function () {
      $(".navigation-holder").removeClass("slideInn");
      $(".mobail-menu .navbar-toggler").removeClass("x-close");
    });
  });
  /*==================================
           LOAD MORE JQUERY
   ================================== */
  var list1 = $(".moreload");
  var numToShow1 = 8;
  var button1 = $(".loadmore-btn");
  var numInList1 = list1.length;

  list1.hide();
  if (numInList1 > numToShow1) {
    button1.show();
  }
  list1.slice(0, numToShow1).show();
  button1.on("click", function () {
    var showing1 = list1.filter(":visible").length;
    list1.slice(showing1 - 1, showing1 + numToShow1).fadeIn();
    var nowShowing1 = list1.filter(":visible").length;
    if (nowShowing1 >= numInList1) {
      button1.hide();
    }
  });

  // tooltips

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Parallax background
  function bgParallax() {
    if ($(".parallax").length) {
      $(".parallax").each(function () {
        var height = $(this).position().top;
        var resize = height - $(window).scrollTop();
        var doParallax = -(resize / 5);
        var positionValue = doParallax + "px";
        var img = $(this).data("bg-image");

        $(this).css({
          backgroundImage: "url(" + img + ")",
          backgroundPosition: "50%" + positionValue,
          backgroundSize: "cover",
        });
      });
    }
  }

  // HERO SLIDER
  var menu = [];
  jQuery(".swiper-slide").each(function (index) {
    menu.push(jQuery(this).find(".slide-inner").attr("data-text"));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },

      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      },
    },
  };

  var swiper = new Swiper(".swiper-container", swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($(".preloader").length) {
      $(".preloader")
        .delay(100)
        .fadeOut(500, function () {
          //active wow
          wow.init();
        });
    }
  }

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style",
    });
  }

  /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        aspectRatio: true,
        type: $(this).data("type"),
        title: this.title,
        helpers: {
          title: { type: "inside" },
          media: {},
        },

        beforeShow: function () {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        },
      });
      return false;
    });
  }

  /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
  if ($(".popup-gallery").length) {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",

      gallery: {
        enabled: true,
      },

      zoom: {
        enabled: true,

        duration: 300,
        easing: "ease-in-out",
        opener: function (openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  }

  /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
  function sortingGallery() {
    if ($(".sortable-gallery .gallery-filters").length) {
      var $container = $(".gallery-container");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });

      $(".gallery-filters li a").on("click", function () {
        $(".gallery-filters li .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  }

  sortingGallery();

  /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
  function masonryGridSetting() {
    if ($(".masonry-gallery").length) {
      var $grid = $(".masonry-gallery").masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-item",
        percentPosition: true,
      });

      $grid.imagesLoaded().progress(function () {
        $grid.masonry("layout");
      });
    }
  }

  // masonryGridSetting();

  /*------------------------------------------
      = FUNFACT
  -------------------------------------------*/
  if ($(".odometer").length) {
    $(".odometer").appear();
    $(document.body).on("appear", ".odometer", function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  // sticky-header

  if ($("#header").length) {
    var header = document.getElementById("sticky-header");
    var stickyPosition = header.offsetTop + header.offsetHeight;
    window.onscroll = function () {
      if (window.pageYOffset > stickyPosition) {
        header.classList.add("sticky");
        document.querySelectorAll(".page-wrapper")[0].style.marginTop =
          header.offsetHeight + "px";
      } else {
        header.classList.remove("sticky");
        document.querySelectorAll(".page-wrapper")[0].style.marginTop = "0px";
      }
    };
  }

  /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
  if ($(".header-search-form-wrapper").length) {
    var searchToggleBtn = $(".search-toggle-btn");
    var searchToggleBtnIcon = $(".search-toggle-btn i");
    var searchContent = $(".header-search-form");
    var body = $("body");

    searchToggleBtn.on("click", function (e) {
      searchContent.toggleClass("header-search-content-toggle");
      searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        searchContent.removeClass("header-search-content-toggle");
      })
      .find(searchContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
  if ($(".mini-cart").length) {
    var cartToggleBtn = $(".cart-toggle-btn");
    var cartContent = $(".mini-cart-content");
    var cartCloseBtn = $(".mini-cart-close");
    var body = $("body");

    cartToggleBtn.on("click", function (e) {
      cartContent.toggleClass("mini-cart-content-toggle");
      e.stopPropagation();
    });

    cartCloseBtn.on("click", function (e) {
      cartContent.removeClass("mini-cart-content-toggle");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        cartContent.removeClass("mini-cart-content-toggle");
      })
      .find(cartContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = RECENT CASE SECTION SHOW HIDE
    -------------------------------------------*/
  if ($(".service-thumbs").length) {
    $(".service-thumb").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-case"));
      $(".service-thumb").removeClass("active-thumb");
      $(this).addClass("active-thumb");
      $(".service-content .service-data").hide(0);
      $(".service-data").fadeOut(300).removeClass("active-service-data");
      $(target).fadeIn(300).addClass("active-service-data");
    });
  }

  /*------------------------------------------
     wpo-hero-items SLIDER
    -------------------------------------------*/
  if ($(".wpo-hero-items").length) {
    $(".wpo-hero-items").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 0.5,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      arrows: false,
      nav: true,
      center: true,
      items: 3,
      navText: [
        '<i class="ti-arrow-left"></i>',
        '<i class="ti-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
        },

        575: {
          items: 1,
        },
        767: {
          items: 1,
          dots: false,
        },

        992: {
          items: 3,
          dots: false,
        },

        1200: {
          items: 3,
        },
      },
    });
  }
  /*------------------------------------------
     service-slider SLIDER
    -------------------------------------------*/
  if ($(".service-slider").length) {
    $(".service-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      arrows: false,
      nav: true,
      center: true,
      items: 4,
      stagePadding: 60,
      navText: [
        '<i class="ti-arrow-left"></i>',
        '<i class="ti-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
          stagePadding: 5,
        },

        575: {
          items: 1,
          stagePadding: 5,
        },
        767: {
          items: 2,
          dots: false,
        },

        992: {
          items: 2,
          dots: false,
        },

        1200: {
          items: 4,
        },
      },
    });
  }

  /*------------------------------------------
        = Testimonial slider 1
    -------------------------------------------*/
  if ($(".wpo-testimonial-wrap").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: false,
          },
        },
      ],
    });
    $(".slider-nav").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      focusOnSelect: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
          },
        },
      ],
    });
  }

  /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
  if ($(".wpo-service-slider").length) {
    $(".wpo-service-slider").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },

        500: {
          items: 1,
          dots: true,
          nav: false,
        },

        768: {
          items: 2,
          dots: false,
        },

        1200: {
          items: 3,
        },

        1400: {
          items: 4,
        },
      },
    });
  }

  /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
  if ($(".partners-slider").length) {
    $(".partners-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 0,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },

        550: {
          items: 3,
        },

        992: {
          items: 4,
        },

        1200: {
          items: 5,
        },
      },
    });
  }
  /*------------------------------------------
    wpo-service-active SLIDER
    -------------------------------------------*/
  if ($(".wpo-service-active").length) {
    $(".wpo-service-active").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: [
        '<i class="fi flaticon-left-arrow"></i>',
        '<i class="fi flaticon-right-arrow-1"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
        },

        575: {
          items: 1,
        },
        767: {
          items: 2,
        },

        992: {
          items: 2,
        },

        1200: {
          items: 3,
        },
      },
    });
  }

  /*------------------------------------------
wpo-service-active SLIDER
-------------------------------------------*/
  if ($(".static-hero-slide-img").length) {
    $(".static-hero-slide-img").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 10,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: [
        '<i class="fi flaticon-left-arrow"></i>',
        '<i class="fi flaticon-right-arrow-1"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
        },

        575: {
          items: 1,
        },
        767: {
          items: 1,
        },

        992: {
          items: 2,
        },

        1200: {
          items: 3,
        },
      },
    });
  }

  /*------------------------------------------
    product-active
    -------------------------------------------*/
  if ($(".product-active").length) {
    $(".product-active").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: [
        '<i class="fi flaticon-left-arrow"></i>',
        '<i class="fi flaticon-right-arrow-1"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
        },

        575: {
          items: 1,
        },
        767: {
          items: 2,
        },

        992: {
          items: 3,
        },

        1200: {
          items: 5,
        },
      },
    });
  }

  /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
  if ($(".post-slider".length)) {
    $(".post-slider").owlCarousel({
      mouseDrag: false,
      smartSpeed: 500,
      margin: 30,
      loop: true,
      nav: true,
      navText: [
        '<i class="fi ti-arrow-left"></i>',
        '<i class="fi ti-arrow-right"></i>',
      ],
      dots: false,
      items: 1,
    });
  }

  /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
  if ($(".shop-single-slider").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 5,
          },
        },
      ],
    });
  }

  /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
  if ($("#clock").length) {
    $("#clock").countdown("2026/12/14 5:50:01", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' +
            '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' +
            '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' +
            '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'
        )
      );
    });
  }

  /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
  if ($("input[name='product-count']").length) {
    $("input[name='product-count']").TouchSpin({
      verticalbuttons: true,
    });
  }

  /*----------------------------
        = SHOP PRICE SLIDER
    ------------------------------ */
  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,
      min: 12,
      max: 200,
      values: [0, 100],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });

    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }

  /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
  $(".cart-plus-minus").append(
    '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
  );
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
  $("body").append(
    "<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>"
  );

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("slow");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  }

  $(".back-to-top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
  if ($("#contact-form-main").length) {
    $("#contact-form-main").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },

        email: "required",

        phone: "required",

        adress: "required",

        guest: "required",

        meal: "required",

        date: "required",

        what: "required",

        service: "required",
      },

      messages: {
        name: "Please enter your name",
        email: "Please enter your email address",
        phone: "Please enter your phone number",
        adress: "Please enter your adress",
        guest: "Please select your guest Number",
        meal: "Please select your Meal Name",
        date: "Please select your Date",
        what: "Please select your Reason",
        service: "Please select your Service",
      },

      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "mail-contact.php",
          data: $(form).serialize(),
          success: function () {
            $("#loader").hide();
            $("#success").slideDown("slow");
            setTimeout(function () {
              $("#success").slideUp("slow");
            }, 3000);
            form.reset();
          },
          error: function () {
            $("#loader").hide();
            $("#error").slideDown("slow");
            setTimeout(function () {
              $("#error").slideUp("slow");
            }, 3000);
          },
        });
        return false; // required to block normal submit since you used ajax
      },
    });
  }

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on("load", function () {
    preloader();

    sortingGallery();

    toggleMobileNavigation();

    smallNavFunctionality();

    smoothScrolling(
      $("#navbar > ul > li > a[href^='#']"),
      $(".wpo-site-header .navigation").innerHeight()
    );
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on("scroll", function () {
    toggleBackToTopBtn();

    activeMenuItem($(".navigation-holder"));
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on("resize", function () {
    toggleClassForSmallNav();
    //smallNavFunctionality();

    clearTimeout($.data(this, "resizeTimer"));
    $.data(
      this,
      "resizeTimer",
      setTimeout(function () {
        smallNavFunctionality();

        siteMiddleLogoSetting();
      }, 200)
    );
  });

  /*------------------------------------------
      color toggle
    -------------------------------------------*/
  if ($(".color-switcher-wrap").length) {
    var colorToggleBtn = $(".color-toggle-btn");
    var colorContent = $(".color-switcher-item");
    var body = $("body");

    colorToggleBtn.on("click", function (e) {
      colorContent.toggleClass("color-switcher-open");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        colorContent.removeClass("color-switcher-open");
      })
      .find(searchContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  // login

  $(".reveal6").on("click", function () {
    var $pwd = $(".pwd6");
    if ($pwd.attr("type") === "text") {
      $pwd.attr("type", "password");
    } else {
      $pwd.attr("type", "text");
    }
  });

  $(".reveal3").on("click", function () {
    var $pwd = $(".pwd2");
    if ($pwd.attr("type") === "text") {
      $pwd.attr("type", "password");
    } else {
      $pwd.attr("type", "text");
    }
  });

  $(".reveal2").on("click", function () {
    var $pwd = $(".pwd3");
    if ($pwd.attr("type") === "text") {
      $pwd.attr("type", "password");
    } else {
      $pwd.attr("type", "text");
    }
  });
})(window.jQuery);
