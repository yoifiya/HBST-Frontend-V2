import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const GioiThieu = (props) => {
  return (
    <>
      <div className="gioi-thieu-container">
        <Head>
          <title>GioiThieu - Punctual Substantial Goldfish</title>
          <meta
            property="og:title"
            content="GioiThieu - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="gioi-thieu-container1">
          <h1 className="gioi-thieu-text">GIỚI THIỆU</h1>
          <h1 className="gioi-thieu-text01">
            Luôn là địa điểm được ba mẹ lựa chọn
          </h1>
          <span className="gioi-thieu-text02">
            <span>
              Là thương hiệu dạy bơi dành cho trẻ em Việt do công ty TNHH
              Survival Group sở hữu và được đăng kí bản quyền sở hữu trí tuệ với
              Cục sở hữu trí tuệ quốc gia Việt Nam với tên thương hiệu Bơi Sinh
              Tồn. Đây cũng là thông điệp mà chúng tôi muốn gửi gắm đến ba mẹ,
              những người chăm sóc trẻ, bảo mẫu rằng cần trang bị cho các con kĩ
              năng an toàn nước, kĩ năng bơi lội để đảm bảo trẻ luôn an toàn
              trong môi trường nước .
            </span>
            <br></br>
            <br></br>
            <span>
              Đây là trường dạy bơi sinh tồn cho trẻ em từ tuổi sơ sinh cho đến
              độ tuổi đến trường. Hiện tại trường của chúng tôi cung cấp các
              khóa học cụ thể như sau :
            </span>
          </span>
          <ul className="gioi-thieu-ul">
            <li className="gioi-thieu-li">
              <span className="gioi-thieu-text07">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="gioi-thieu-text09">trẻ từ 0-3 tuổi</span>
              </span>
            </li>
            <li className="gioi-thieu-li1">
              <span className="gioi-thieu-text10">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="gioi-thieu-text12">trẻ từ 3-5 tuổi</span>
              </span>
            </li>
            <li className="list-item">
              <span className="gioi-thieu-text13">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="gioi-thieu-text15">trẻ trên 5 tuổi</span>
              </span>
            </li>
          </ul>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .gioi-thieu-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gioi-thieu-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .gioi-thieu-text {
            color: var(--dl-color-hbst-white);
            font-size: 70px;
            text-align: center;
          }
          .gioi-thieu-text01 {
            color: var(--dl-color-hbst-yellow);
            font-size: 35px;
            max-width: 90vw;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 20px;
          }
          .gioi-thieu-text02 {
            color: var(--dl-color-hbst-white);
            width: 1000px;
            max-width: 90vw;
            text-align: justify;
            line-height: 1.3;
          }
          .gioi-thieu-ul {
            color: var(--dl-color-hbst-white);
            width: 90vw;
            max-width: 1000px;
            padding-left: 40px;
          }
          .gioi-thieu-li {
            width: auto;
          }
          .gioi-thieu-text07 {
            line-height: 1.3;
          }
          .gioi-thieu-text09 {
            font-weight: 700;
          }
          .gioi-thieu-li1 {
            width: auto;
          }
          .gioi-thieu-text10 {
            line-height: 1.3;
          }
          .gioi-thieu-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .gioi-thieu-text13 {
            line-height: 1.3;
          }
          .gioi-thieu-text15 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .gioi-thieu-text {
              font-size: 50px;
            }
            .gioi-thieu-text01 {
              font-size: 30px;
            }
          }
          @media (max-width: 767px) {
            .gioi-thieu-container {
              padding-top: 118px;
            }
            .gioi-thieu-text {
              font-size: 45px;
            }
            .gioi-thieu-text01 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default GioiThieu
