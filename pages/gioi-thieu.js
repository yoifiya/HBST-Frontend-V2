import React from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import Flickity from "react-flickity-component";

import Header from "../components/header";
import Footer from "../components/footer";

const GioiThieu = (props) => {
  return (
    <>
      <div className="gioi-thieu-container">
        <Head>
          <title>Giới Thiệu | Hocboisinhton.com</title>
          <meta property="og:title" content="Giới Thiệu | Hocboisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="gioi-thieu-info">
          <h1 className="gioi-thieu-title1">GIỚI THIỆU</h1>
          <h1 className="gioi-thieu-title2">
            Luôn là địa điểm được ba mẹ lựa chọn
          </h1>
          <span className="gioi-thieu-text1">
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
          <ul className="gioi-thieu-list-khoa-hoc">
            <li className="gioi-thieu-list03">
              <span className="gioi-thieu-text04">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="gioi-thieu-text06">trẻ từ 0-3 tuổi</span>
              </span>
            </li>
            <li className="gioi-thieu-list35">
              <span className="gioi-thieu-text07">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="gioi-thieu-text09">trẻ từ 3-5 tuổi</span>
              </span>
            </li>
            <li className="list-item">
              <span className="gioi-thieu-text10">
                <span>
                  Khóa học bơi dành cho
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="gioi-thieu-text12">trẻ trên 5 tuổi</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="gioi-thieu-side">
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            swipeable={false}
            animationHandler={"fade"}
          >
            <div className="gioi-thieu-img1">
              <div className="gioi-thieu-container01">
                <div className="gioi-thieu-container02">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="27.067 49.383 146.033 101.117"
                    viewBox="27.067 49.383 146.033 101.117"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="tint"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        d="M32.8 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.3-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.3z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M116.1 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.4-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.2z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2 className="gioi-thieu-text13">
                  Giáo viên rất nhiệt tình, thân thiện. Hồ bơi rất sạch luôn. Cả
                  nhà mình đều thích đi bơi ở đây.
                </h2>
                <span className="gioi-thieu-text14">
                  <span>Chị Xuyên - Phụ huynh bé 5 tuổi tại</span>
                  <br></br>
                  <span>Hocboisinhton.com</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="gioi-thieu-img2">
              <div className="gioi-thieu-container03">
                <div className="gioi-thieu-container04">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="27.067 49.383 146.033 101.117"
                    viewBox="27.067 49.383 146.033 101.117"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="tint"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        d="M32.8 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.3-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.3z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M116.1 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.4-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.2z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2 className="gioi-thieu-text19">
                  Bé nhà mình học tại trường luôn cảm thấy năng động và cải
                  thiện hẳn về thể chất. Chương trình thiết kế riêng cho trẻ rất
                  phù hợp.
                </h2>
                <span className="gioi-thieu-text20">
                  <span>Chị Lộc - phụ huynh bé 3 tuổi tại</span>
                  <br></br>
                  <span>Hocboisinhton.com</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="gioi-thieu-img3">
              <div className="gioi-thieu-container05">
                <div className="gioi-thieu-container06">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="27.067 49.383 146.033 101.117"
                    viewBox="27.067 49.383 146.033 101.117"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="tint"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        d="M32.8 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.3-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.3z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M116.1 148.2v-1.3c11.8-2.3 22.6-8.3 30.8-17.1 7.6-8.6 12-19.5 12.6-30.8-6.9 8.1-14.6 12.2-23.2 12.2-5 .1-9.9-1.2-14.1-3.9-3.9-2.4-7-5.9-8.9-10-2-4.5-3-9.4-2.9-14.4-.4-9 2.9-17.8 9.2-24.3 6-6 14.2-9.4 22.8-9.2 8.5-.3 16.7 3.4 22.2 9.8 5.7 6.6 8.5 16 8.5 28.4 0 5.3-.5 10.5-1.5 15.7-1.2 5.4-3.2 10.6-5.9 15.4-3 5.4-6.8 10.4-11.4 14.7-4.7 4.5-10.1 8.3-16 11.3-5.5 2.9-11.4 4.8-17.6 5.7l-4.6-2.2z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2 className="gioi-thieu-text25">
                  Thầy cô có sự chuyên nghiệp và luôn động viên bé trong quá
                  trình học, giá học phí ổn so với thị trường.
                </h2>
                <span className="gioi-thieu-text26">
                  <span>Anh Phong - phụ huynh bé 8 tuổi tại</span>
                  <br></br>
                  <span>Hocboisinhton.com</span>
                  <br></br>
                </span>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="gioi-thieu-team">
          <h1 className="gioi-thieu-title">ĐỘI CỦA CHÚNG TÔI</h1>
          <div className="gioi-thieu-user">
            <div className="gioi-thieu-user1">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/AIL4fc9sln_Z13FHWgtEXIpgcPvGtJUKlPqaGsYgM09bz5nVABBn6yp6bd7ls5T_DHa04Zw3yfP-F2IN3uweSWoCpkIsjDkyirnaW4BpcnOuMdbR83ZATJY=d"
                className="gioi-thieu-image"
              />
              <h2 className="gioi-thieu-text31">HLV ĐOÀN QUỐC HÙNG</h2>
              <h3 className="gioi-thieu-text32">Co-Founder &amp; CEO</h3>
              <span className="gioi-thieu-text33">
                <span>HUẤN LUYỆN VIÊN DẠY BƠI CHO</span>
                <br></br>
                <span>TRẺ 0-3 TUỔI</span>
              </span>
              <span className="gioi-thieu-text37">
                Thầy Đoàn Quốc Hùng với trên 10 năm kinh nghiệm trong việc giảng
                dạy và trang bị kĩ năng cho nhiều học viên trên khắp khu vực
                TPHCM. Tại Hocboisinhton.com, học viên không chỉ được dạy bơi mà
                còn được trang bị tất cả những kĩ năng cần thiết để bảo vệ bản
                thân trong môi trường nước.
              </span>
            </div>
            <div className="gioi-thieu-user2">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/AIL4fc9rVKKWUWfLUVi7R4i2GUK77d5jktEGasOsvXhMtb901Mp_ZpbpbnwANGbEDzHuEcd-jASC7dt5eVJohwLTDKyZFxY4DoPh0x-sfawetzaHKYS8XQQ=d"
                className="gioi-thieu-image1"
              />
              <h2 className="gioi-thieu-text38">HLV Tạ Quan Minh</h2>
              <h3 className="gioi-thieu-text39">Co-Founder &amp; Manager</h3>
              <span className="gioi-thieu-text40">
                <span>HUẤN LUYỆN VIÊN DẠY BƠI CHO</span>
                <br></br>
                <span>TRẺ 3-5 TUỔI</span>
              </span>
              <span className="gioi-thieu-text44">
                Thầy Tạ Quan Minh với trên 5 năm kinh nghiệm và đầy đủ bằng cấp
                chuyên môn đã phổ cập bơi cho hơn 1000 học viên mọi lứa tuổi.
                Với niềm yêu thích bơi lội và tận tâm trong việc giảng dạy, thầy
                Minh hiện đang chuyên huẩn luyện và giảng dạy cho các trẻ trong
                độ tuổi 3-5.
              </span>
            </div>
            <div className="gioi-thieu-user3">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/AIL4fc9LL6vxMVgs_5sfLJAFHYG8z4FKmnbt60zhhhTO_fXFADmLnJhFWuO1qrWdfFdBjFTGvV8PLVwIkPeG84vi4zNvaVNCnDyH74mbaEaIewdjhPw8nQU=d"
                className="gioi-thieu-image2"
              />
              <h2 className="gioi-thieu-text45">HLV NGUYỄN HOÀI GIANG</h2>
              <h3 className="gioi-thieu-text46">Swimming Coach</h3>
              <span className="gioi-thieu-text47">
                <span>HUẤN LUYỆN VIÊN DẠY BƠI CHO</span>
                <br></br>
                <span>TRẺ TRÊN 5 TUỔI</span>
              </span>
              <span className="gioi-thieu-text51">
                Thầy Nguyễn Hoài Giang với trên 8 năm kinh nghiệm, chuyên nghiệp
                với đầy đủ chứng chỉ giảng dạy bơi lội và cứu hộ, thầy Giang
                luôn cố gắng dành mọi tâm huyết để truyền tải những kiến thức và
                hướng dẫn cụ thể mọi động tác trong khóa học nhằm mang đến kĩ
                năng bơi hoàn thiện nhất.
              </span>
            </div>
          </div>
        </div>
        <div className="gioi-thieu-container07">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={{
              pageDots: false,
              prevNextButtons: false,
              initialIndex: 1,
            }}
          >
            <div className="gioi-thieu-container08">
              <div className="gioi-thieu-container09"></div>
            </div>
            <div className="gioi-thieu-container10">
              <div className="gioi-thieu-container11"></div>
            </div>
            <div className="gioi-thieu-container12">
              <div className="gioi-thieu-container13"></div>
            </div>
            <div className="gioi-thieu-container14">
              <div className="gioi-thieu-container15"></div>
            </div>
            <div className="gioi-thieu-container16">
              <div className="gioi-thieu-container17"></div>
            </div>
            <div className="gioi-thieu-container18">
              <div className="gioi-thieu-container19"></div>
            </div>
            <div className="gioi-thieu-container20">
              <div className="gioi-thieu-container21"></div>
            </div>
            <div className="gioi-thieu-container22">
              <div className="gioi-thieu-container23"></div>
            </div>
            <div className="gioi-thieu-container24">
              <div className="gioi-thieu-container25"></div>
            </div>
          </Flickity>
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
            background-color: var(--dl-color-hbst-blue);
          }
          .gioi-thieu-info {
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
          .gioi-thieu-title1 {
            color: var(--dl-color-hbst-white);
            font-size: 70px;
            text-align: center;
          }
          .gioi-thieu-title2 {
            color: var(--dl-color-hbst-yellow);
            font-size: 35px;
            max-width: 90vw;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 20px;
          }
          .gioi-thieu-text1 {
            color: var(--dl-color-hbst-white);
            width: 1000px;
            max-width: 90vw;
            text-align: justify;
            line-height: 1.3;
          }
          .gioi-thieu-list-khoa-hoc {
            color: var(--dl-color-hbst-white);
            width: 90vw;
            max-width: 1000px;
            padding-left: 40px;
          }
          .gioi-thieu-list03 {
            width: auto;
          }
          .gioi-thieu-text04 {
            line-height: 1.3;
          }
          .gioi-thieu-text06 {
            font-weight: 700;
          }
          .gioi-thieu-list35 {
            width: auto;
          }
          .gioi-thieu-text07 {
            line-height: 1.3;
          }
          .gioi-thieu-text09 {
            font-style: normal;
            font-weight: 700;
          }
          .gioi-thieu-text10 {
            line-height: 1.3;
          }
          .gioi-thieu-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .gioi-thieu-side {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gioi-thieu-img1 {
            width: 100vw;
            height: 30vw;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc8TO868T0x_g3O-mRFZDUyL4kL5B6_7x4CCg7CSHF_I9OPHSz6eJKW8XlAHtLEGBMvKj1rr8qsjXbpZ-ZYBOjuKOuq8wo3kvwT_dCxov43soGaznm8=d");
            background-position: center;
          }
          .gioi-thieu-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(13, 116, 185, 0.52);
          }
          .gioi-thieu-container02 {
            flex: 0 0 auto;
            width: 5vw;
            height: 5vw;
            display: flex;
            align-items: center;
            margin-bottom: 2vw;
            justify-content: center;
          }
          .gioi-thieu-text13 {
            color: var(--dl-color-hbst-white);
            width: 80vw;
            font-size: 2.3vw;
            max-width: 1000px;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-text14 {
            color: var(--dl-color-hbst-white);
            font-size: 1.8vw;
            margin-top: 2vw;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-img2 {
            width: 100vw;
            height: 30vw;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc8mJ3eHH1f2i8sEDsn7F9L7zQM5x_WlNACqmEi7N4bfGsJlPRUo3m8sDyMsSuxfXJvlJEre5lDhUPpBOaO1E4RaTAMyrFMJAAIvdksUYzdj4g1RN9I=d");
            background-position: center;
          }
          .gioi-thieu-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(13, 116, 185, 0.52);
          }
          .gioi-thieu-container04 {
            flex: 0 0 auto;
            width: 5vw;
            height: 5vw;
            display: flex;
            align-items: center;
            margin-bottom: 2vw;
            justify-content: center;
          }
          .gioi-thieu-text19 {
            color: var(--dl-color-hbst-white);
            width: 80vw;
            font-size: 2.3vw;
            max-width: 1000px;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-text20 {
            color: var(--dl-color-hbst-white);
            font-size: 1.8vw;
            margin-top: 2vw;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-img3 {
            width: 100vw;
            height: 30vw;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-hwuCLNltyIVJaf3ZnQHf21lCNX0TMb4sqpibG0fz3KvLZa087P9WrxzzleXeW7Zo6o_7CRZOW-FhZQJtjZkg3rsMLb7fseL_RY8etRMlwd9x1Whw=d");
            background-position: center;
          }
          .gioi-thieu-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(13, 116, 185, 0.52);
          }
          .gioi-thieu-container06 {
            flex: 0 0 auto;
            width: 5vw;
            height: 5vw;
            display: flex;
            align-items: center;
            margin-bottom: 2vw;
            justify-content: center;
          }
          .gioi-thieu-text25 {
            color: var(--dl-color-hbst-white);
            width: 80vw;
            font-size: 2.3vw;
            max-width: 1000px;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-text26 {
            color: var(--dl-color-hbst-white);
            font-size: 1.8vw;
            margin-top: 2vw;
            text-align: center;
            line-height: 1.3;
          }
          .gioi-thieu-team {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            // padding-bottom: 40px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .gioi-thieu-title {
            color: var(--dl-color-hbst-yellow);
            font-size: 50px;
            text-align: center;
            text-transform: uppercase;
          }
          .gioi-thieu-user {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 40px;
            flex-direction: row;
            padding-bottom: 40px;
            justify-content: center;
          }
          .gioi-thieu-user1 {
            flex: 0 0 auto;
            display: flex;
            max-width: 280px;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .gioi-thieu-image {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .gioi-thieu-text31 {
            color: var(--dl-color-hbst-yellow);
            width: 100%;
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 10px;
          }
          .gioi-thieu-text32 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 18px;
            text-align: center;
          }
          .gioi-thieu-text33 {
            color: var(--dl-color-hbst-white);
            margin-top: 20px;
            text-align: center;
            line-height: 1.3;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .gioi-thieu-text37 {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            font-style: normal;
            text-align: justify;
            font-weight: 200;
            line-height: 1.5;
          }
          .gioi-thieu-user2 {
            flex: 0 0 auto;
            display: flex;
            max-width: 280px;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .gioi-thieu-image1 {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .gioi-thieu-text38 {
            color: var(--dl-color-hbst-yellow);
            width: 100%;
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 10px;
          }
          .gioi-thieu-text39 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 18px;
            text-align: center;
          }
          .gioi-thieu-text40 {
            color: var(--dl-color-hbst-white);
            margin-top: 20px;
            text-align: center;
            line-height: 1.3;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .gioi-thieu-text44 {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            font-style: normal;
            text-align: justify;
            font-weight: 200;
            line-height: 1.5;
          }
          .gioi-thieu-user3 {
            flex: 0 0 auto;
            display: flex;
            max-width: 280px;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .gioi-thieu-image2 {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .gioi-thieu-text45 {
            color: var(--dl-color-hbst-yellow);
            width: 100%;
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 10px;
          }
          .gioi-thieu-text46 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 18px;
            text-align: center;
          }
          .gioi-thieu-text47 {
            color: var(--dl-color-hbst-white);
            margin-top: 20px;
            text-align: center;
            line-height: 1.3;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .gioi-thieu-text51 {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            font-style: normal;
            text-align: justify;
            font-weight: 200;
            line-height: 1.5;
          }
          .gioi-thieu-container07 {
            flex: 0 0 auto;
            width: 90%;
            max-width: 1029px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            margin: 20px 0;
          }
          .gioi-thieu-container08 {
            width: 245px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-1KndJdaRV9XYYm-qEQPWQlbgPRTlBfl9i5bo3_lFrqt2U0HcyH7on9hcbGCNEpJ2vsJg0nYCSOHSuPC6KS2BCUmPYSFejtHdv-U8JetcGumQTEuI=d");
            background-position: center;
          }
          .gioi-thieu-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(30vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container09:hover {
            opacity: 1;
            transform: translateY(0px);
          }
          .gioi-thieu-container10 {
            width: 499px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc9gq7FQXPXn3TNXob-xTGNlm_R18bLc-MXjanu4pAtGwOGHXqNC3HT-h-cK1hltP0dloO5QbdORSytQjuXWanK-Y3lm3Mrmk-P8pcofVRJ0SZDwpkQ=d");
            background-position: center;
          }
          .gioi-thieu-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container11:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container12 {
            width: 245px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-A2QiiFhu3sDHG3XuGb5QyN5YlWITx4rr5w--E3N8GxVLqaUxdKHCTJQOxG-LQGvjIGoYIHtZk3NLoDEaWuqFXLl5zQ7MxejmWLVwhMi5zXAoAmEA=d");
            background-position: center;
          }
          .gioi-thieu-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container13:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container14 {
            width: 499px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc99zMAUAbvKLhsgVJ-Vg2C0D_jfm6iympVYYDayNiTnnsVjLap0pTVLskmGaLvphc7yXXk8X2jnqFevamS5OkAgA9g9Vz__X55_n_PySYJDO4NNh4E=d");
            background-position: center;
          }
          .gioi-thieu-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container15:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container16 {
            width: 245px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_ERDKSG6ysOnG4YBRdNWr_sxt-JHz2D99CBBiuIlxo-60G5mU5MGfazU604P5Ht3C83qRBdthsEx7qbRYfEb1Yl9PdDin9Rb2AwJ7X85rkNL84EDg=d");
            background-position: center;
          }
          .gioi-thieu-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container17:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container18 {
            width: 499px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-3POfgFhXlwJpnTm__t6w57dap2Cu8lfctvQNPWrPQBGImbFCVez0RiDbRFahTIbCr8v9xIn-V4QgosDTz9yMGOP9O-KFQgKBovZgYxAY6Kxph9qc=d");
            background-position: center;
          }
          .gioi-thieu-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container19:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container20 {
            width: 245px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc9l-nUZX7wP3D2s1gd6V93sGjSgL8TguUPk5X_10LiV5NUpcYImwUt5rK24yyXGvmwea7mCx1B-KJbSN0pgDAovJniZh7iGU2_rXHY77VxdSFNvtU0=d");
            background-position: center;
          }
          .gioi-thieu-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container21:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container22 {
            width: 499px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-FW5JKp0eqooHksCugnvYvPbQ7hbgjpJaqULJ0RUKjwx5AepTJD7HPIpRLK4D_obitpxiUCHSZ6jTAYsEdx7EqxR-ygcWGDnRHo5v40vMPvQqeu-Y=d");
            background-position: center;
          }
          .gioi-thieu-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container23:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          .gioi-thieu-container24 {
            width: 245px;
            height: 30vw;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-8kcEWiGiJS0WcED2UmxzxahKfQIWRSlp6lBPYVq0XlVc82Xbo3188WlKxNk-oFmZH539EL220HF7C1ssm6_K8x4u8SbTO8Ga3Bi-c8SQN20ZPi4A=d");
            background-position: center;
          }
          .gioi-thieu-container25 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            opacity: 0;
            transform: translateY(15vw);
            transition: 0.4s;
            align-items: flex-start;
            background-image: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .gioi-thieu-container25:hover {
            opacity: 1;
            transform: translateY(-15vw);
          }
          @media (max-width: 991px) {
            .gioi-thieu-title1 {
              font-size: 50px;
            }
            .gioi-thieu-title2 {
              font-size: 30px;
            }
            .gioi-thieu-title {
              font-size: 40px;
            }
            .gioi-thieu-user {
              align-items: center;
              flex-direction: column;
            }
            .gioi-thieu-user1 {
              width: 90vw;
              max-width: 90vw;
            }
            .gioi-thieu-user2 {
              width: 90vw;
              max-width: 90vw;
              margin-top: 40px;
              margin-bottom: 40px;
            }
            .gioi-thieu-user3 {
              width: 90vw;
              max-width: 90vw;
            }
          }
          @media (max-width: 767px) {
            .gioi-thieu-container {
              padding-top: 138px;
            }
            .gioi-thieu-title1 {
              font-size: 45px;
            }
            .gioi-thieu-title2 {
              font-size: 25px;
            }
            .gioi-thieu-title {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .gioi-thieu-title {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default GioiThieu;
