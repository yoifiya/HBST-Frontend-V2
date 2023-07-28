import React from "react";
import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

const Video = (props) => {
  return (
    <>
      <div className="video-container">
        <Head>
          <title>Video | Hocboisinhton.com</title>
          <meta property="og:title" content="Video | Hocboisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <Header rootClassName="header-root-class-name5"></Header>
        <div className="video-container1">
          <div className="video-container2">
            <h1 className="video-text">HÌNH ẢNH CỦA HỌC VIÊN</h1>
          </div>
          <div className="video-container3">
            <span className="video-text1">
              Ba mẹ có thể tham khảo các video và hình ảnh của các học viên nhỏ
              và tài năng tại Hocboisinhton.com để hiểu thêm lộ trình tại trường
              nhé!
            </span>
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/CDyk9wdTZb8"
          allowFullScreen
          className="video-iframe"
        ></iframe>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .video-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .video-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .video-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            justify-content: flex-end;
            background-color: var(--dl-color-hbst-yellow);
          }
          .video-text {
            color: var(--dl-color-hbst-blue);
            height: auto;
            font-size: 56px;
            max-width: 500px;
          }
          .video-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .video-text1 {
            color: var(--dl-color-hbst-white);
            width: 50%;
            font-size: 14px;
            line-height: 1.3;
          }
          .video-iframe {
            width: 90vw;
            height: 90vw;
            max-width: 900px;
            margin-top: 20px;
            max-height: 500px;
            margin-bottom: 20px;
            background-color: var(--dl-color-hbst-black);
          }
          @media (max-width: 991px) {
            .video-container1 {
              flex-direction: column;
            }
            .video-container2 {
              width: 100%;
              justify-content: center;
            }
            .video-text {
              width: 100%;
              max-width: 90vw;
            }
            .video-container3 {
              width: 100%;
              height: auto;
              padding-top: 20px;
              padding-bottom: 20px;
            }
            .video-text1 {
              color: var(--dl-color-hbst-white);
              width: 90vw;
              line-height: 1.3;
            }
          }
          @media (max-width: 767px) {
            .video-container {
              padding-top: 138px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Video;
