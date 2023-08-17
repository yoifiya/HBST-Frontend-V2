import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Contact = (props) => {
  const debounce = useRef(false);
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Liên Hệ | Boisinhton.com</title>
          <meta property="og:title" content="Liên Hệ | Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://cdn.hocboisinhton.com/image/63ed9445-5eb7-4a3e-ac48-8769a7d76b6d"
          />
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
              </a>
            </div>
          </div>
          <form
            className="contact-container4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (debounce.current) {
                return;
              }
              debounce.current = true;
              const Email = e.target.Email.value;
              const FullName = e.target.FullName.value;
              const Phone = e.target.Phone.value;
              const Message = e.target.Message.value;

              const res = await fetch(
                process.env.NEXT_PUBLIC_apiUrl + "/form/contact",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    Email: Email,
                    FullName: FullName,
                    Phone: Phone,
                    Message: Message,
                  }),
                }
              )
                .then((res) => res.json())
                .catch((err) => {
                  return { success: false, data: err.message };
                });

              debounce.current = false;

              if (res["success"]) {
                document.getElementById("Thanks").style.display = "block";
                setTimeout(() => {
                  document.getElementById("Thanks").style.display = "none";
                }, 2000);
              } else {
                alert(res["data"]);
              }
            }}
          >
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
              <textarea id="Message" className="contact-textarea"></textarea>
            </div>
            <button type="submit" className="contact-button">
              <span>
                <span>Đăng ký</span>
                <br></br>
              </span>
            </button>
            <span id="Thanks" className="faq-text15">
              Cảm ơn bạn đã đăng ký!
            </span>
          </form>
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
                  <i
                    style={{
                      marginTop: 11,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-yellow)",
                    }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="contact-text17">
                    CÔNG TY TNHH SURVIVAL GROUP 156A Nguyễn Hữu Thọ, Phước Kiển,
                    Nhà Bè, TP,HCM
                  </span>
                </div>
              </a>

              <div className="contact-info4">
                <a
                  href="https://www.facebook.com/BoiSinhTon"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link5"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/BoiSinhTon"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link5"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@hocboisinhton"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link5"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="contact-thong-tin1">
              <h1 className="contact-title2">THÔNG TIN</h1>
              <a href="tel:0976 48 35 36" className="contact-link6">
                <div className="contact-info5">
                  <i
                    style={{
                      marginTop: 11,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-yellow)",
                    }}
                    className="fa-solid fa-phone"
                  ></i>
                  <span className="contact-text18">0976 48 35 36</span>
                </div>
              </a>
              <a
                href="mailto: boisinhton@gmail.com?subject=A"
                className="contact-link7"
              >
                <div className="contact-info6">
                  <i
                    style={{
                      marginTop: 11,
                      marginRight: 5,
                      color: "var(--dl-color-hbst-yellow)",
                    }}
                    className="fa-solid fa-envelope"
                  ></i>
                  <span className="contact-text19">boisinhton@gmail.com</span>
                </div>
              </a>
              <Link href="/">
                <a className="contact-link8">
                  <div className="contact-info7">
                    <i
                      style={{
                        marginTop: 11,
                        marginRight: 5,
                        color: "var(--dl-color-hbst-yellow)",
                      }}
                      className="fa-solid fa-globe"
                    ></i>
                    <span className="contact-text20">Boisinhton.com</span>
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
          .faq-text15 {
            color: var(--dl-color-hbst-white);
            margin-top: 15px;
            display: none;
          }
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
            flex-direction: row;
            justify-content: center;
          }
          .contact-link3 {
            color: var(--dl-color-hbst-white);
            fill: var(--dl-color-hbst-white);
            cursor: pointer;
            transition: 0.2s;
            padding-top: 10px;
            padding-left: 20px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 20px;
            padding-bottom: 10px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-blue);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-link3:hover {
            color: var(--dl-color-hbst-black);
            fill: var(--dl-color-hbst-black);
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
            padding-left: 20px;
            margin-top: 10px;
            color: var(--dl-color-hbst-yellow);
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
