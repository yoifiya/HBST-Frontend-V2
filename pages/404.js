import React from "react";
import Link from "next/link";
import Head from "next/head";

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>404 | Boisinhton.com</title>
          <meta property="og:title" content="404 | Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <div className="page-container1">
          <h1 className="page-text">
            <span>Notfound - 404</span>
            <br></br>
          </h1>
          <span className="page-text3">
            Đường dẫn của bạn không chính xác vui lòng liểm tra lại!
          </span>
          <Link href="/">
            <a className="page-link">
              <span>© Boisinhton.com</span>
              <br></br>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text {
            text-align: center;
          }
          .page-text3 {
            margin-top: 10px;
            text-align: center;
          }
          .page-link {
            color: var(--dl-color-hbst-blue);
            margin-top: 30px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default Page;
