import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const FAQ = (props) => {
  return (
    <>
      <div className="faq-container">
        <Head>
          <title>FAQ - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="FAQ - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
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
          @media (max-width: 767px) {
            .faq-container {
              padding-top: 118px;
            }
          }
        `}
      </style>
    </>
  )
}

export default FAQ
