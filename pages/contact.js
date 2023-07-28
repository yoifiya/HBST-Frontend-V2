import React from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Liên Hệ | Hocboisinhton.com</title>
          <meta property="og:title" content="Liên Hệ | Hocboisinhton.com" />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="contact-container1">
          <div className="contact-container2">
            <h1 className="contact-text">ĐĂNG KÝ HỌC THỬ</h1>
            <a
              href="https://goo.gl/maps/FMtZApB5fH1tb7D27"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link"
            >
              <div className="contact-info">
                <i
                  style={{
                    marginTop: 11,
                    marginRight: 5,
                    color: "var(--dl-color-hbst-blue)",
                  }}
                  className="fa-solid fa-location-dot"
                ></i>
                <span className="contact-text01">
                  CÔNG TY TNHH SURVIVAL GROUP 156A Nguyễn Hữu Thọ, Phước Kiển,
                  Nhà Bè, TP,HCM
                </span>
              </div>
            </a>
            <a href="tel:0976 48 35 36" className="contact-link1">
              <div className="contact-info1">
                <i
                  style={{
                    marginTop: 14,
                    marginRight: 5,
                    color: "var(--dl-color-hbst-blue)",
                  }}
                  className="fa-solid fa-phone"
                ></i>
                <span className="contact-text02">0976 48 35 36</span>
              </div>
            </a>
            <a
              href="mailto: boisinhton@gmail.com?subject=A"
              className="contact-link2"
            >
              <div className="contact-info2">
                <i
                  style={{
                    marginTop: 15,
                    marginRight: 5,
                    color: "var(--dl-color-hbst-blue)",
                  }}
                  className="fa-solid fa-envelope"
                ></i>
                <span className="contact-text03">boisinhton@gmail.com</span>
              </div>
            </a>
            <div className="contact-container3">
              <a
                href="https://forms.gle/1AcPCPUuZncXxoBD8"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link3"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
          <div className="contact-container4">
            <div className="contact-container5">
              <div className="contact-container6">
                <span className="contact-text04">
                  <span>Họ và Tên *</span>
                  <br></br>
                </span>
                <input
                  type="text"
                  id="FullName"
                  required
                  className="contact-textinput"
                />
                <span className="contact-text07">
                  <span>Số điện thoại</span>
                  <br></br>
                </span>
                <input type="tel" id="Phone" className="contact-textinput1" />
              </div>
              <div className="contact-container7">
                <span className="contact-text10">
                  <span>Email *</span>
                  <br></br>
                </span>
                <input
                  type="email"
                  id="Email"
                  required
                  className="contact-textinput2"
                />
              </div>
            </div>
            <div className="contact-container8">
              <span className="contact-text13">Message</span>
              <textarea className="contact-textarea"></textarea>
            </div>
            <button type="button" className="contact-button">
              <span>
                <span>Đăng ký</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="contact-lien-he-ngay">
          <h1 className="contact-title">Liên Hệ Ngay</h1>
          <div className="contact-thong-tin">
            <div className="contact-dia-chi">
              <h1 className="contact-title1">ĐỊA CHỈ</h1>
              <a
                href="https://goo.gl/maps/FMtZApB5fH1tb7D27"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link4"
              >
                <div className="contact-info3">
                  <span className="contact-text17">
                    CÔNG TY TNHH SURVIVAL GROUP 156A Nguyễn Hữu Thọ, Phước Kiển,
                    Nhà Bè, TP,HCM
                  </span>
                </div>
              </a>
              <a
                href="https://goo.gl/maps/FMtZApB5fH1tb7D27"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link5"
              >
                <div className="contact-info4"></div>
              </a>
            </div>
            <div className="contact-thong-tin1">
              <h1 className="contact-title2">THÔNG TIN</h1>
              <a href="tel:0976 48 35 36" className="contact-link6">
                <div className="contact-info5">
                  <span className="contact-text18">0976 48 35 36</span>
                </div>
              </a>
              <a
                href="mailto: boisinhton@gmail.com?subject=A"
                className="contact-link7"
              >
                <div className="contact-info6">
                  <span className="contact-text19">boisinhton@gmail.com</span>
                </div>
              </a>
              <Link href="/">
                <a className="contact-link8">
                  <div className="contact-info7">
                    <span className="contact-text20">hocboisinhton.com</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31361.81900048047!2d106.702138!3d10.716938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5b24b8840d%3A0x2ccda70ea19cc259!2zQ8OidSBs4bqhYyBi4buZIELGoWkgc2luaCB04buTbg!5e0!3m2!1svi!2sus!4v1690431505594!5m2!1svi!2sus"
          className="contact-ban-do"
        ></iframe>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
          .contact-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
          .contact-container2 {
            flex: 0 0 auto;
            width: 30vw;
            height: auto;
            display: flex;
            padding: 60px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-hbst-yellow);
          }
          .contact-text {
            color: var(--dl-color-hbst-blue);
            width: 100%;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
          }
          .contact-link {
            display: contents;
          }
          .contact-info {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text01 {
            cursor: pointer;
            margin-top: 10px;
            line-height: 1.3;
          }
          .contact-link1 {
            display: contents;
          }
          .contact-info1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text02 {
            cursor: pointer;
            margin-top: 15px;
          }
          .contact-link2 {
            display: contents;
          }
          .contact-info2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text03 {
            cursor: pointer;
            margin-top: 15px;
          }
          .contact-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-link3 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            transition: 0.2s;
            padding-top: 10px;
            padding-left: 20px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 20px;
            padding-bottom: 10px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-blue);
          }
          .contact-link3:hover {
            color: var(--dl-color-hbst-black);
            font-size: 20px;
            background-color: var(--dl-color-hbst-white);
          }
          .contact-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 60px;
            max-width: 70vw;
            align-items: center;
            flex-direction: column;
            padding-bottom: 60px;
            justify-content: center;
          }
          .contact-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
          }
          .contact-container6 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text04 {
            color: var(--dl-color-hbst-white);
          }
          .contact-textinput {
            color: var(--dl-color-hbst-white);
            width: 95%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.2s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .contact-textinput:focus {
            outline: none;
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-textinput:hover {
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-text07 {
            color: var(--dl-color-hbst-white);
            margin-top: 15px;
          }
          .contact-textinput1 {
            color: var(--dl-color-hbst-white);
            width: 95%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.2s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .contact-textinput1:focus {
            outline: none;
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-textinput1:hover {
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-container7 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text10 {
            color: var(--dl-color-hbst-white);
          }
          .contact-textinput2 {
            color: var(--dl-color-hbst-white);
            width: 95%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.2s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .contact-textinput2:focus {
            outline: none;
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-textinput2:hover {
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            max-width: 500px;
            margin-top: 15px;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text13 {
            color: var(--dl-color-hbst-white);
          }
          .contact-textarea {
            color: var(--dl-color-hbst-white);
            width: 100%;
            height: 100px;
            resize: none;
            margin-top: 5px;
            transition: 0.3s;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            background-color: rgba(0, 0, 0, 0);
            border-bottom-width: 1px;
          }
          .contact-textarea:focus {
            outline: none;
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-textarea:hover {
            background-color: rgba(0, 0, 0, 0.48);
          }
          .contact-button {
            width: 100%;
            cursor: pointer;
            font-size: 15px;
            max-width: 500px;
            margin-top: 15px;
            transition: 0.25s ease-in-out;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: var(--dl-color-hbst-white);
          }
          .contact-button:hover {
            color: var(--dl-color-hbst-white);
            background-color: var(--dl-color-hbst-black);
          }
          .contact-lien-he-ngay {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-title {
            color: var(--dl-color-hbst-yellow);
            font-size: 40px;
            text-align: center;
            text-transform: uppercase;
          }
          .contact-thong-tin {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            margin-bottom: 30px;
            justify-content: center;
          }
          .contact-dia-chi {
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
          .contact-title1 {
            color: var(--dl-color-hbst-yellow);
            text-align: center;
            text-transform: uppercase;
          }
          .contact-link4 {
            display: contents;
          }
          .contact-info3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text17 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            margin-top: 10px;
            line-height: 1.3;
          }
          .contact-link5 {
            display: contents;
          }
          .contact-info4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-thong-tin1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-title2 {
            color: var(--dl-color-hbst-yellow);
            text-align: center;
            text-transform: uppercase;
          }
          .contact-link6 {
            display: contents;
          }
          .contact-info5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text18 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            margin-top: 10px;
          }
          .contact-link7 {
            display: contents;
          }
          .contact-info6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text19 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            margin-top: 10px;
          }
          .contact-link8 {
            display: contents;
          }
          .contact-info7 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .contact-text20 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            margin-top: 10px;
          }
          .contact-ban-do {
            width: 80vw;
            height: 400px;
            margin-bottom: 60px;
          }
          @media (max-width: 991px) {
            .contact-container1 {
              flex-direction: column;
            }
            .contact-container2 {
              width: 100%;
            }
            .contact-container4 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-container {
              padding-top: 138px;
            }
            .contact-container2 {
              padding: 30px;
            }
            .contact-container4 {
              padding: 30px;
              margin-bottom: 30px;
            }
            .contact-container5 {
              flex-direction: column;
            }
            .contact-container6 {
              width: 100%;
            }
            .contact-container7 {
              width: 100%;
              margin-top: 15px;
            }
            .contact-title {
              font-size: 35px;
            }
            .contact-thong-tin {
              align-items: center;
              flex-direction: column;
            }
            .contact-dia-chi {
              width: 90vw;
              max-width: 90vw;
              margin-right: 0px;
            }
            .contact-thong-tin1 {
              width: 90vw;
              max-width: 90vw;
              margin-top: 20px;
            }
            .contact-ban-do {
              height: 300px;
            }
          }
          @media (max-width: 479px) {
            .contact-title {
              font-size: 25px;
            }
            .contact-title1 {
              font-size: 18px;
            }
            .contact-title2 {
              font-size: 18px;
            }
            .contact-ban-do {
              height: 250px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;
