import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <svg
          id="Bar"
          viewBox="0 0 877.7142857142857 1024"
          className="header-bar"
        >
          <path d="M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"></path>
        </svg>
        <svg id="Bar2" viewBox="0 0 1024 1024" className="header-bar2">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
        <Link href="/">
          <a className="header-link">
            <div className="header-logo">
              <img
                alt={props.image_alt}
                src="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
                loading="eager"
                className="header-icon2"
              />
              <h1 className="header-title">{props.heading}</h1>
            </div>
          </a>
        </Link>
        <div className="header-navigate">
          <Link href="/">
            <a className="header-link01">{props.button}</a>
          </Link>
          <Link href="/gioi-thieu">
            <a className="header-link02">{props.button1}</a>
          </Link>
          <Link href="/blog">
            <a className="header-link03">{props.button2}</a>
          </Link>
          <Link href="/video">
            <a className="header-link04">{props.button3}</a>
          </Link>
          <Link href="/faq">
            <a className="header-link05">{props.button4}</a>
          </Link>
          <Link href="/contact">
            <a className="header-link06">{props.button5}</a>
          </Link>
        </div>
        <div className="header-reg">
          <a
            href="https://forms.gle/1AcPCPUuZncXxoBD8"
            target="_blank"
            rel="noreferrer noopener"
            className="header-title1"
          >
            {props.text}
          </a>
        </div>
        <div id="NavigateMobile" className="header-navigate-mb">
          <Link href="/">
            <a className="header-link07">{props.button6}</a>
          </Link>
          <Link href="/gioi-thieu">
            <a className="header-link08">{props.button11}</a>
          </Link>
          <Link href="/blog">
            <a className="header-link09">{props.button21}</a>
          </Link>
          <Link href="/video">
            <a className="header-link10">{props.button31}</a>
          </Link>
          <Link href="/faq">
            <a className="header-link11">{props.button41}</a>
          </Link>
          <Link href="/contact">
            <a className="header-link12">{props.button51}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 99;
            position: relative;
            min-height: 103px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-hbst-white);
          }
          .header-bar {
            top: 0px;
            left: 10px;
            width: 30px;
            bottom: 0px;
            cursor: pointer;
            height: 30px;
            margin: auto;
            display: none;
            z-index: 101;
            position: absolute;
            transform: 0.2s;
          }
          .header-bar2 {
            top: 0px;
            left: 10px;
            width: 30px;
            bottom: 0px;
            cursor: default;
            height: 30px;
            margin: auto;
            opacity: 0;
            position: absolute;
            transition: 0.2s;
          }
          .header-link {
            display: contents;
          }
          .header-logo {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            height: auto;
            display: flex;
            align-items: center;
            user-select: none;
            justify-content: center;
            text-decoration: none;
          }
          .header-icon2 {
            width: 81px;
            height: 81px;
            object-fit: cover;
            margin-right: 10px;
          }
          .header-title {
            font-size: 32px;
            font-family: Inter;
          }
          .header-navigate {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: auto;
            align-items: center;
            padding-left: 15%;
            padding-right: 40px;
            justify-content: flex-start;
          }
          .header-link01 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            padding: 5pxc;
            font-size: 18px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link01:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link02 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 18px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link02:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link03 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 18px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link03:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link04 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 18px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link04:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link05 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 18px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link05:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link06 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 18px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link06:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-reg {
            flex: 0 0 auto;
            color: var(--dl-color-hbst-white);
            width: auto;
            cursor: pointer;
            height: auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 15px;
            padding-left: 20px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 20px;
            padding-bottom: 15px;
            background-color: var(--dl-color-hbst-blue);
          }
          .header-reg:hover {
            fill: var(--dl-color-hbst-black);
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          .header-title1 {
            text-decoration: none;
          }
          .header-navigate-mb {
            top: 0;
            flex: 0 0 auto;
            left: 0;
            right: 0;
            width: 100vw;
            bottom: 0;
            height: 100vh;
            display: flex;
            opacity: 0;
            z-index: 100;
            position: fixed;
            overflow-y: auto !important;
            transition: opcacity 0.2s;
            align-items: center;
            flex-direction: column;
            pointer-events: none;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .header-link07 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            padding: 5pxc;
            font-size: 16px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link07:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link08 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link08:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link09 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link09:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link10 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link10:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link11 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link11:hover {
            color: var(--dl-color-hbst-yellow);
          }
          .header-link12 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            transition: 0.2s;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            text-decoration: none;
          }
          .header-link12:hover {
            color: var(--dl-color-hbst-yellow);
          }

          @media (max-width: 1200px) {
            .header-navigate {
              flex-wrap: wrap;
              max-width: 50%;
              padding-left: 5%;
            }
          }
          @media (max-width: 991px) {
            .header-bar {
              display: flex;
            }
            .header-bar2 {
              cursor: pointer;
            }
            .header-logo {
              margin-right: 20px;
            }
            .header-navigate {
              display: none;
            }
            .header-navigate-mb {
              padding-top: 100px;
              justify-content: flex-start;
            }
            .header-link07 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header-link08 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header-link09 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header-link10 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header-link11 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header-link12 {
              color: var(--dl-color-hbst-yellow);
              padding: 20px;
              font-size: 25px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 767px) {
            .header-container {
              top: 0;
              position: fixed;
              flex-direction: column;
            }
            .header-logo {
              margin-top: 10px;
              margin-right: 0px;
            }
            .header-icon2 {
              width: 60px;
              height: 60px;
            }
            .header-title {
              font-size: 30px;
            }
            .header-reg {
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }
          @media (max-width: 479px) {
            .header-icon2 {
              width: 40px;
              height: 40px;
            }
            .header-title {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  heading: 'Hocboisinhton.com',
  button21: 'Kiến Thức',
  button41: 'FAQ',
  button4: 'FAQ',
  button31: 'Video',
  button2: 'Kiến Thức',
  button1: 'Giới Thiệu',
  button3: 'Video',
  button: 'Home',
  rootClassName: '',
  text: 'Đăng ký ngay',
  button6: 'Home',
  button11: 'Giới Thiệu',
  button51: 'Liên Hệ',
  image_alt: 'image',
  button5: 'Liên Hệ',
}

Header.propTypes = {
  heading: PropTypes.string,
  button21: PropTypes.string,
  button41: PropTypes.string,
  button4: PropTypes.string,
  button31: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  button6: PropTypes.string,
  button11: PropTypes.string,
  button51: PropTypes.string,
  image_alt: PropTypes.string,
  button5: PropTypes.string,
}

export default Header
