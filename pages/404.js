import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="Page - Punctual Substantial Goldfish"
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
              <span>© Hocboisinhton.com</span>
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
  )
}

export default Page
