import React from "react";
import Head from "next/head";

import Header from "../components/header";
import CauHoi from "../components/cau-hoi";
import Footer from "../components/footer";

const FAQ = (props) => {
  return (
    <>
      <div className="faq-container">
        <Head>
          <title>FAQ | Hocboisinhton.com</title>
          <meta property="og:title" content="FAQ | Hocboisinhton.com" />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="faq-cau-hoi">
          <h1 className="faq-title">
            <span>Các câu hỏi thường gặp?</span>
            <br></br>
          </h1>
          <CauHoi></CauHoi>
        </div>
        <div className="faq-container1">
          <form className="faq-form">
            <h2 className="faq-text02">
              <span>ĐĂNG KÝ ĐỂ ĐƯỢC CHIA SẺ</span>
              <br></br>
              <span>THÊM KIẾN THỨC</span>
            </h2>
            <span className="faq-text06">
              <span>
                Để lại email của bạn để được chia sẻ thêm nhiều kiến thức và
                kinh nghiệm mỗi tuần. 
              </span>
              <span>Cảm ơn ba/ mẹ!</span>
            </span>
            <div className="faq-container2">
              <div className="faq-container3">
                <span className="faq-text09">Họ Tên</span>
                <input type="text" id="FullName" className="faq-input" />
                <span className="faq-text10">Email *</span>
                <input
                  type="email"
                  id="Email"
                  required
                  className="faq-input1"
                />
              </div>
              <div className="faq-container4">
                <span className="faq-text11">Số điện thoại</span>
                <input type="tel" id="Phone" className="faq-input2" />
                <div className="faq-container5">
                  <button type="submit" className="faq-button">
                    <span className="faq-text12">
                      <span>Đăng ký</span>
                      <br></br>
                    </span>
                  </button>
                  <span className="faq-text15">Cảm ơn bạn đã đăng ký!</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .faq-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .faq-cau-hoi {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            text-align: center;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .faq-title {
            color: var(--dl-color-hbst-yellow);
            font-size: 50px;
          }
          .faq-container1 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 80px;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc9A3WsMtwVnlF7ZbS2IrYYolIug8GUnpjZov3Z6fIPYl2FNsX2trzQTM9W6oS4bzt-CiZHn3FN8DjnOb95-AlDIzZYf_04ZHZTGDrdljdNN5RaCuHY=d");
            background-position: center;
          }
          .faq-form {
            width: auto;
            height: auto;
            display: flex;
            padding: 40px;
            align-items: center;
            padding-right: 40px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .faq-text02 {
            color: var(--dl-color-hbst-white);
            width: auto;
            text-align: center;
            text-transform: uppercase;
          }
          .faq-text06 {
            color: var(--dl-color-hbst-white);
            max-width: 600px;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 20px;
          }
          .faq-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .faq-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-right: 10px;
            flex-direction: column;
          }
          .faq-text09 {
            color: var(--dl-color-hbst-white);
          }
          .faq-input {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.3s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .faq-input:focus {
            outline: none;
          }
          .faq-text10 {
            color: var(--dl-color-hbst-white);
            margin-top: 10px;
          }
          .faq-input1 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.3s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .faq-input1:focus {
            outline: none;
          }
          .faq-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-left: 10px;
            flex-direction: column;
          }
          .faq-text11 {
            color: var(--dl-color-hbst-white);
          }
          .faq-input2 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            margin-top: 5px;
            transition: 0.3s;
            padding-top: 10px;
            border-color: var(--dl-color-hbst-white);
            border-width: 0px;
            padding-bottom: 10px;
            background-color: rgba(217, 217, 217, 0);
            border-bottom-width: 1px;
          }
          .faq-input2:focus {
            outline: none;
          }
          .faq-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-button {
            cursor: pointer;
            margin-top: 15px;
            text-align: center;
            transition: 0.3s;
            padding-top: 12px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 12px;
            background-color: var(--dl-color-hbst-white);
          }
          .faq-button:hover {
            background-color: var(--dl-color-hbst-yellow);
          }
          .faq-text12 {
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
          }
          .faq-text15 {
            color: var(--dl-color-hbst-white);
            margin-top: 15px;
          }
          @media (max-width: 1200px) {
            .faq-text06 {
              margin-bottom: 40px;
            }
          }
          @media (max-width: 991px) {
            .faq-title {
              font-size: 40px;
            }
          }
          @media (max-width: 767px) {
            .faq-container {
              padding-top: 138px;
            }
            .faq-title {
              font-size: 30px;
            }
            .faq-container1 {
              padding: 40px;
            }
            .faq-container2 {
              align-items: center;
              flex-direction: column;
            }
            .faq-container3 {
              width: 100%;
            }
            .faq-container4 {
              width: 100%;
              margin-top: 10px;
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .faq-title {
              font-size: 20px;
            }
            .faq-container1 {
              padding: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default FAQ;
