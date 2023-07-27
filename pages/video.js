import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Video = (props) => {
  return (
    <>
      <div className="video-container">
        <Head>
          <title>Video - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="Video - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name5"></Header>
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
          @media (max-width: 767px) {
            .video-container {
              padding-top: 118px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Video
