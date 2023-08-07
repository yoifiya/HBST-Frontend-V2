import React from "react";
import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

const Video = (props) => {
  return (
    <>
      <div className="video-container">
        <Head>
          <title>Video | Boisinhton.com</title>
          <meta property="og:title" content="Video | Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc-blDE6wZT4MbxV9oj__ERtuvqdOPVJsox9Nx_Gg5IXGcqnr6iezUq2nP9e1BaSxh36Ejo0cyoELIwhmUvIj-0CALdhvaAjofyQW8-Z6T3TKobbVig66i1dxo-2eOdZWmBUvynZxXpxAdnAV3emdMmQ2bu_wM91t8N2HRkwA4KhScuFuhmv3Wef9DflJln-KBx2vFN1yg1dCc16ApvwsJ-YAktMzFZlsLNgU4VKFiA1dakmCNCtgu_5e5GxpPnryLo-e1GI3gjCRu5s_kZ3z2PaJHn7ER4lnHfpyGHH8g7bet0UdvlZwB06jjtR5bxfhij00wF9pdYjsXKBroauCNfZAeQFta368CWqLz15x8FVDT_St99G8CgZOqpLJvWsfcaPmhv2CED64qedqRoEAbo1-fTRRpMdIRnNpFgV2Y-iO8D-AJfxIHD3GnRtXWCUcWBKEWfXtVQoPqgdSNwjtaRKVoGoOpqfPga7ZU6a07p1dwAvojEV2IvrN6t4_FTTgdtpFgGTS99HCOpO6CZSsOFrMt7XlbOUvk6v2UaF5coQMxtZIQg-kyN7AFiprzdfrAD3Oqp7UhOtnt0tAIUltsWEI3FWWoL84Nz_-J3u2TwbOXo568meumfiyJNnQWHK4h-3yfpCOc366seqaqKbff1ky5hur_1pVAF3Hsv43q36OTee0KM6Y3kOOyWa8Pgo65-D2IoBlEP3CXh_cYLR8I9Fhc6f4P0pYwYC_HrcspevgzoN9Rmn43ObWz3dte196_98TpoZ005Ywn8t4jLavZov5r7Y_IO4TMXAA3lpUrQINV1DQMXJMFTBpDNe6E0sCA3qLOOkpxYNQug_rpYYd5dB033n2EZGDgQexa1mo82ZtDMJNOTZUwKz16212YgHHV5IENKP0ZGoWjFtgjr3F7HklFAFJYa7zlg9ukyfOHBAcpaViRF4pEodgR_ldPM=w1000-no-tmp.jpg"
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
              và tài năng tại Boisinhton.com để hiểu thêm lộ trình tại trường
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
