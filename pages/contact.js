import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="Contact - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
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
          }
          @media (max-width: 767px) {
            .contact-container {
              padding-top: 118px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
