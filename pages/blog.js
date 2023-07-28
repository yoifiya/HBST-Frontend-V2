import React from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/header";
import Tags from "../components/tags";
import Footer from "../components/footer";

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Kiến Thức | Hocboisinhton.com</title>
          <meta property="og:title" content="Kiến Thức | Hocboisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <Tags rootClassName="tags-root-class-name"></Tags>
        <div className="blog-posts">
          <Link href="/blog">
            <a className="blog-link">
              <div className="blog-post">
                <img
                  alt="image"
                  src="https://lh3.googleusercontent.com/pw/AIL4fc8vRK4pub_25manXbWRFgkx6keM-cAYnsRcv5k1ryToToIUSJfbJSi64-frVAh7kjZGmjRXtNeLArNP3l9ZzuwnBvSosz2Rp-utmKoUgedsyke6enQ=d"
                  className="blog-avatar"
                />
                <div className="blog-info">
                  <span className="blog-date">
                    <span>Jun 22 • 1 mins</span>
                    <br></br>
                  </span>
                  <span className="blog-date1">
                    <span>Tag</span>
                    <br></br>
                  </span>
                  <h1 className="blog-title">
                    Bài 10 – Hướng dẫn cách thở nước cho người mới bắt đầu
                  </h1>
                  <span className="blog-description">
                    Thở nước là một kĩ năng bơi quan trọng của quá trình học
                    bơi. Nếu bạn thở tốt, bạn sẽ bơi dễ dàng và ngược lại. Thở
                    nước đối với người mới sẽ hơi khó một tí và sẽ càng khó hơn
                    cho những bạn sợ nước. Tuy nhiên bạn đừng quá lo lắng.
                  </span>
                  <div className="blog-heart"></div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="blog-container1">
          <svg viewBox="0 0 1024 1024" className="blog-icon">
            <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
          </svg>
          <span className="blog-text4">
            <span>1</span>
            <br></br>
          </span>
          <svg viewBox="0 0 1024 1024" className="blog-icon2">
            <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
          </svg>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .blog-link {
            display: contents;
          }
          .blog-post {
            flex: 0 0 auto;
            width: 90vw;
            cursor: pointer;
            height: 340px;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            margin-bottom: 20px;
            text-decoration: none;
          }
          .blog-avatar {
            width: 50%;
            height: 100%;
            max-height: 350px;
            object-fit: cover;
          }
          .blog-info {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-date {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            margin-bottom: 10px;
          }
          .blog-date1 {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            margin-bottom: 10px;
          }
          .blog-title {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            font-size: 28px;
            margin-bottom: 10px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .blog-description {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            line-height: 1.5;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .blog-heart {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 90%;
            bottom: 0px;
            height: 100px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.41);
            border-width: 1px;
            padding-bottom: 20px;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .blog-icon {
            fill: var(--dl-color-hbst-white);
            width: auto;
            cursor: pointer;
            height: 24px;
            opacity: 0.5;
            box-sizing: content-box;
            transition: 0.3s;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .blog-icon:hover {
            opacity: 1;
          }
          .blog-text4 {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            opacity: 0.5;
            font-size: 20px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 400;
            padding-top: 10px;
            margin-right: 5px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
          }
          .blog-text4:hover {
            opacity: 1;
          }
          .blog-icon2 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            cursor: pointer;
            height: 24px;
            opacity: 0.5;
            box-sizing: content-box;
            transition: 0.3s;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .blog-icon2:hover {
            opacity: 1;
          }
          @media (max-width: 991px) {
            .blog-post {
              height: auto;
              flex-direction: column;
            }
            .blog-avatar {
              width: 100%;
              height: 30vw;
            }
            .blog-info {
              width: 100%;
              padding-bottom: 120px;
            }
          }
          @media (max-width: 767px) {
            .blog-container {
              padding-top: 138px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Blog;
