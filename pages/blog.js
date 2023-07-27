import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Blog - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="Blog - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
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
          @media (max-width: 767px) {
            .blog-container {
              padding-top: 118px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
