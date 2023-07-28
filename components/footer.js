import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-doi-tac">
          <h1 className="footer-title">{props.heading}</h1>
        </div>
        <div className="footer-lien-he-ngay">
          <h1 className="footer-title1">{props.heading1}</h1>
          <div className="footer-thong-tin">
            <div className="footer-dia-chi">
              <h1 className="footer-title2">{props.heading2}</h1>
              <a
                href="https://goo.gl/maps/FMtZApB5fH1tb7D27"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <div className="footer-info">
                  <i
                    style={{
                      marginTop: 10,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-blue)",
                    }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="footer-text">{props.text}</span>
                </div>
              </a>
              <a
                href="https://goo.gl/maps/FMtZApB5fH1tb7D27"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <div className="footer-info1"></div>
              </a>
            </div>
            <div className="footer-thong-tin1">
              <h1 className="footer-title3">{props.heading21}</h1>
              <a href="tel:0976 48 35 36" className="footer-link2">
                <div className="footer-info2">
                  <i
                    style={{
                      marginTop: 10,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-blue)",
                    }}
                    className="fa-solid fa-phone"
                  ></i>
                  <span className="footer-text1">{props.text1}</span>
                </div>
              </a>
              <a
                href="mailto: boisinhton@gmail.com?subject=A"
                className="footer-link3"
              >
                <div className="footer-info3">
                  <i
                    style={{
                      marginTop: 10,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-blue)",
                    }}
                    class="fa-solid fa-envelope"
                  ></i>
                  <span className="footer-text2">{props.text12}</span>
                </div>
              </a>
              <Link href="/">
                <a className="footer-link4">
                  <div className="footer-info4">
                    <i
                      style={{
                        marginTop: 10,
                        marginRight: 5,
                        color: "var(--dl-color-hbst-blue)",
                      }}
                      className="fa-solid fa-globe"
                    ></i>
                    <span className="footer-text3">{props.text11}</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31361.81900048047!2d106.702138!3d10.716938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5b24b8840d%3A0x2ccda70ea19cc259!2zQ8OidSBs4bqhYyBi4buZIELGoWkgc2luaCB04buTbg!5e0!3m2!1svi!2sus!4v1690431505594!5m2!1svi!2sus"
          className="footer-ban-do"
        ></iframe>
        <span className="footer-copyright">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-yellow);
          }
          .footer-doi-tac {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-title {
            text-align: center;
            text-transform: uppercase;
          }
          .footer-lien-he-ngay {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-title1 {
            color: var(--dl-color-hbst-blue);
            font-size: 40px;
            text-align: center;
            text-transform: uppercase;
          }
          .footer-thong-tin {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            margin-bottom: 30px;
            justify-content: center;
          }
          .footer-dia-chi {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            margin-right: 100px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title2 {
            color: var(--dl-color-hbst-blue);
            text-align: center;
            text-transform: uppercase;
          }
          .footer-link {
            display: contents;
          }
          .footer-info {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-text {
            cursor: pointer;
            margin-top: 10px;
            line-height: 1.3;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-info1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-thong-tin1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title3 {
            color: var(--dl-color-hbst-blue);
            text-align: center;
            text-transform: uppercase;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-info2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-text1 {
            cursor: pointer;
            margin-top: 10px;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-info3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-text2 {
            cursor: pointer;
            margin-top: 10px;
          }
          .footer-link4 {
            display: contents;
          }
          .footer-info4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-text3 {
            cursor: pointer;
            margin-top: 10px;
          }
          .footer-ban-do {
            width: 80vw;
            height: 400px;
          }
          .footer-copyright {
            font-style: normal;
            margin-top: 40px;
            font-weight: 300;
            margin-bottom: 40px;
          }

          @media (max-width: 767px) {
            .footer-title1 {
              font-size: 35px;
            }
            .footer-thong-tin {
              align-items: center;
              flex-direction: column;
            }
            .footer-dia-chi {
              width: 90vw;
              max-width: 90vw;
              margin-right: 0px;
            }
            .footer-thong-tin1 {
              width: 90vw;
              max-width: 90vw;
              margin-top: 20px;
            }
            .footer-ban-do {
              height: 300px;
            }
          }
          @media (max-width: 479px) {
            .footer-title {
              font-size: 20px;
            }
            .footer-title1 {
              font-size: 25px;
            }
            .footer-title2 {
              font-size: 18px;
            }
            .footer-title3 {
              font-size: 18px;
            }
            .footer-ban-do {
              height: 250px;
            }
          }
        `}
      </style>
    </>
  );
};

Footer.defaultProps = {
  text3:
    "CÔNG TY TNHH SURVIVAL GROUP 156A Nguyễn Hữu Thọ, Phước Kiển, Nhà Bè, TP,HCM",
  rootClassName: "",
  text12: "boisinhton@gmail.com",
  heading: "Đối Tác",
  text: "CÔNG TY TNHH SURVIVAL GROUP 156A Nguyễn Hữu Thọ, Phước Kiển, Nhà Bè, TP,HCM",
  text2: "© 2035 by Hocboisinhton.com",
  heading1: "Liên Hệ Ngay",
  heading21: "THÔNG TIN",
  heading2: "ĐỊA CHỈ",
  text11: "hocboisinhton.com",
  text1: "0976 48 35 36",
};

Footer.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text12: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  heading21: PropTypes.string,
  heading2: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
};

export default Footer;
