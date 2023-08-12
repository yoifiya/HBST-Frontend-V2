import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PropTypes from "prop-types";

const Header = (props) => {
  const router = useRouter();

  const handleBar = () => {
    const Navigate = document.getElementById("NavigateMobile").classList;
    const bar1 = document.getElementById("Bar").classList;
    const bar2 = document.getElementById("Bar2").classList;

    if (Navigate.contains("navigate-active")) {
      Navigate.remove("navigate-active");
      bar1.remove("bar1-active");
      bar2.remove("bar2-active");
      enableScroll();
    } else {
      Navigate.add("navigate-active");
      bar1.add("bar1-active");
      bar2.add("bar2-active");
      disableScroll();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        const Navigate = document.getElementById("NavigateMobile").classList;
        const bar1 = document.getElementById("Bar").classList;
        const bar2 = document.getElementById("Bar2").classList;

        if (Navigate.contains("navigate-active")) {
          Navigate.remove("navigate-active");
          bar1.remove("bar1-active");
          bar2.remove("bar2-active");
          enableScroll();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    enableScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function disableScroll() {
    var scrollPosition = [
      self.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      self.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
    ];
    document.body.dataset.scroll = JSON.stringify(scrollPosition);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }

  function enableScroll() {
    if (document.body.dataset.scroll) {
      var scrollPosition = JSON.parse(document.body.dataset.scroll);
      document.body.removeAttribute("data-scroll");
      document.body.style.overflow = "auto";
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <svg
          onClick={handleBar}
          id="Bar"
          viewBox="0 0 877.7142857142857 1024"
          className="header-bar"
        >
          <path d="M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"></path>
        </svg>
        <svg
          onClick={handleBar}
          id="Bar2"
          viewBox="0 0 1024 1024"
          className="header-bar2"
        >
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
        <Link href="/">
          <a className="header-link">
            <div className="header-logo">
              <img
                alt={props.image_alt}
                src="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
                loading="eager"
                className="header-icon2"
              />
              <h1 className="header-title">{props.heading}</h1>
            </div>
          </a>
        </Link>
        <div className="header-navigate">
          <Link href="/">
            <a
              className={
                "header-link01" + (router.pathname === "/" ? " nav-active" : "")
              }
            >
              {props.button}
            </a>
          </Link>
          <Link href="/gioi-thieu">
            <a
              className={
                "header-link02" +
                (router.pathname === "/gioi-thieu" ? " nav-active" : "")
              }
            >
              {props.button1}
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                "header-link03" +
                (router.pathname === "/blog"
                  ? " nav-active"
                  : router.pathname.split("/")[1] === "post"
                  ? " nav-active"
                  : "")
              }
            >
              {props.button2}
            </a>
          </Link>
          <Link href="/video">
            <a
              className={
                "header-link04" +
                (router.pathname === "/video" ? " nav-active" : "")
              }
            >
              {props.button3}
            </a>
          </Link>
          <Link href="/faq">
            <a
              className={
                "header-link05" +
                (router.pathname === "/faq" ? " nav-active" : "")
              }
            >
              {props.button4}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                "header-link06" +
                (router.pathname === "/contact" ? " nav-active" : "")
              }
            >
              {props.button5}
            </a>
          </Link>
        </div>
        <div className="header-reg">
          <a
            href="https://forms.gle/1AcPCPUuZncXxoBD8"
            target="_blank"
            rel="noreferrer noopener"
            className="header-title1"
          >
            {props.text}
          </a>
          <svg
            style={{
              marginLeft: 8,
            }}
            data-bbox="30.501 29.5 139.002 141.001"
            viewBox="0 0 200 200"
            height="26"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
          >
            <g>
              <path d="M166.124 83.089a17.198 17.198 0 0 0-11.34-6.844 17.39 17.39 0 0 0-2.749-.195h-33.669v-22.6c0-13.206-10.752-23.95-23.966-23.95-1.58 0-3.013.93-3.654 2.374L65.179 89.35H47.811c-9.545 0-17.31 7.761-17.31 17.3v46.55c0 9.539 7.766 17.3 17.31 17.3h94.995l.195.001c8.499 0 15.839-6.29 17.115-14.699l9.185-59.856a17.177 17.177 0 0 0-3.177-12.857zm-102.346 79.41H47.811c-5.134 0-9.31-4.172-9.31-9.3v-46.55c0-5.128 4.177-9.3 9.31-9.3h15.967v65.15zm97.615-67.761-9.185 59.856c-.687 4.524-4.634 7.906-9.25 7.906h-71.18V94.2L96.91 37.697c7.616 1.206 13.456 7.811 13.456 15.753v26.6a4 4 0 0 0 4 4h37.715a8.958 8.958 0 0 1 1.503.105 9.249 9.249 0 0 1 6.1 3.681 9.226 9.226 0 0 1 1.709 6.902z"></path>
            </g>
          </svg>
        </div>
        <div id="NavigateMobile" className="header-navigate-mb">
          <Link href="/">
            <a
              className={
                "header-link07" + (router.pathname === "/" ? " nav-active" : "")
              }
            >
              {props.button6}
            </a>
          </Link>
          <Link href="/gioi-thieu">
            <a
              className={
                "header-link08" +
                (router.pathname === "/gioi-thieu" ? " nav-active" : "")
              }
            >
              {props.button11}
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                "header-link09" +
                (router.pathname === "/blog"
                  ? " nav-active"
                  : router.pathname.split("/")[1] === "post"
                  ? " nav-active"
                  : "")
              }
            >
              {props.button21}
            </a>
          </Link>
          <Link href="/video">
            <a
              className={
                "header-link10" +
                (router.pathname === "/video" ? " nav-active" : "")
              }
            >
              {props.button31}
            </a>
          </Link>
          <Link href="/faq">
            <a
              className={
                "header-link11" +
                (router.pathname === "/faq" ? " nav-active" : "")
              }
            >
              {props.button41}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                "header-link12" +
                (router.pathname === "/contact" ? " nav-active" : "")
              }
            >
              {props.button51}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .navigate-mb-active {
            color: var(--dl-color-hbst-yellow);
          }
          .header-container {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 99;
            position: relative;
            min-height: 103px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-hbst-white);
          }
          .header-bar {
            top: 0px;
            left: 10px;
            width: 30px;
            bottom: 0px;
            cursor: pointer;
            height: 30px;
            margin: auto;
            display: none;
            z-index: 101;
            position: absolute;
            transform: 0.2s;
          }
          .header-bar2 {
            top: 0px;
            left: 10px;
            width: 50px;
            bottom: 0px;
            cursor: default;
            height: 50px;
            margin: auto;
            opacity: 0;
            position: absolute;
            transition: 0.2s;
            z-index: 101;
            fill: var(--dl-color-hbst-yellow);
          }
          .header-link {
            display: contents;
          }
          .header-logo {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            height: auto;
            display: flex;
            align-items: center;
            user-select: none;
            justify-content: center;
            text-decoration: none;
          }
          .header-icon2 {
            width: 81px;
            height: 81px;
            object-fit: cover;
            margin-right: 10px;
          }
          .header-title {
            font-size: 32px;
            font-family: HBST;
            color: var(--dl-color-hbst-blue);
          }
          .header-navigate {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: auto;
            align-items: center;
            padding-left: 15%;
            padding-right: 40px;
            justify-content: flex-start;
          }
          .header-link01 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            padding: 5px;
            font-size: 15px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link01:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link02 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 15px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link02:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link03 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 15px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link03:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link04 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 15px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link04:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link05 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 15px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link05:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link06 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 15px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link06:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-reg {
            flex: 0 0 auto;
            color: var(--dl-color-hbst-white);
            fill: var(--dl-color-hbst-white);
            width: auto;
            cursor: pointer;
            height: auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 10px;
            padding-left: 20px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 20px;
            padding-bottom: 10px;
            background-color: var(--dl-color-hbst-blue);
          }
          .header-reg:hover {
            fill: var(--dl-color-hbst-black);
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          .header-title1 {
            text-decoration: none;
          }
          .header-navigate-mb {
            top: 0;
            flex: 0 0 auto;
            left: 0;
            right: 0;
            width: 100vw;
            bottom: 0;
            height: 100vh;
            display: flex;
            opacity: 0;
            z-index: 100;
            position: fixed;
            overflow-y: auto !important;
            transition: opacity 0.2s;
            align-items: center;
            flex-direction: column;
            pointer-events: none;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .header-link07 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            padding: 5px;
            font-size: 16px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link07:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link08 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link08:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link09 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link09:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link10 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link10:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link11 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link11:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link12 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link12:hover {
            color: var(--dl-color-hbst-yellow);
          }

          @media (max-width: 1200px) {
            .header-navigate {
              flex-wrap: wrap;
              max-width: 50%;
              padding-left: 5%;
            }
          }
          @media (max-width: 991px) {
            .header-bar {
              display: flex;
            }
            .header-bar2 {
              cursor: pointer;
            }
            .header-logo {
              margin-right: 20px;
            }
            .header-navigate {
              display: none;
            }
            .header-navigate-mb {
              padding-top: 100px;
              justify-content: flex-start;
            }
            .header-link07 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .header-link08 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .header-link09 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .header-link10 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .header-link11 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .header-link12 {
              color: var(--dl-color-hbst-white);
              padding: 20px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }
          @media (max-width: 767px) {
            .header-container {
              top: 0;
              position: fixed;
              flex-direction: column;
            }
            .header-logo {
              margin-top: 10px;
              margin-right: 0px;
            }
            .header-icon2 {
              width: 60px;
              height: 60px;
            }
            .header-title {
              font-size: 30px;
            }
            .header-reg {
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }
          @media (max-width: 479px) {
            .header-icon2 {
              width: 40px;
              height: 40px;
            }
            .header-title {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  );
};

Header.defaultProps = {
  heading: "Boisinhton.com",
  button21: "Kiến Thức",
  button41: "FAQ",
  button4: "FAQ",
  button31: "Video",
  button2: "Kiến Thức",
  button1: "Giới Thiệu",
  button3: "Video",
  button: "Home",
  rootClassName: "",
  text: "Đăng ký ngay",
  button6: "Home",
  button11: "Giới Thiệu",
  button51: "Liên Hệ",
  image_alt: "image",
  button5: "Liên Hệ",
};

Header.propTypes = {
  heading: PropTypes.string,
  button21: PropTypes.string,
  button41: PropTypes.string,
  button4: PropTypes.string,
  button31: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  button6: PropTypes.string,
  button11: PropTypes.string,
  button51: PropTypes.string,
  image_alt: PropTypes.string,
  button5: PropTypes.string,
};

export default Header;
