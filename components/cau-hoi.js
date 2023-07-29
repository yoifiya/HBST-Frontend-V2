import React, { useState } from "react";

import PropTypes from "prop-types";

const CauHoi = (props) => {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="cau-hoi-cau-hoi">
        <div
          onClick={() => setOpen(open === 1 ? 0 : 1)}
          className="cau-hoi-cau1"
        >
          <h2 className="cau-hoi-title">{props.Title}</h2>
          {open !== 1 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
          {open === 1 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon02">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
        </div>
        {open === 1 && (
          <span className="cau-hoi-cau-text">
            <span>
              Boisinhton.com cung cấp nhiều khóa học đa dạng cho các bé từ dưới
              1 tuổi đến trên 5 tuổi. Chúng tôi cung cấp lộ trình học được thiết
              kế riêng cho độ tuổi:
            </span>
            <br></br>
            <span>- Khóa học cho trẻ 0-3 tuổi</span>
            <br></br>
            <span>- Khóa học cho trẻ 3-5 tuổi</span>
            <br></br>
            <span>- Khóa học cho trẻ trên 5 tuổi</span>
            <br></br>
            <span>
              Ba mẹ muốn tìm hiểu thêm thông tin chi tiết về khóa học và đăng ký
              học bơi miễn phí tại trường bẳng cách điền form tại đây: 
            </span>
            <span
              className="cau-hoi-text09"
              onClick={() => {
                window.open("https://forms.gle/EbbWgcZcmmirieFw9");
              }}
            >
              https://forms.gle/EbbWgcZcmmirieFw9
            </span>
          </span>
        )}
        <div className="cau-hoi-line"></div>
        <div
          onClick={() => setOpen(open === 2 ? 0 : 2)}
          className="cau-hoi-cau3"
        >
          <h2 className="cau-hoi-title1">{props.Title1}</h2>
          {open !== 2 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon04">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
          {open === 2 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon06">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
        </div>
        {open === 2 && (
          <span className="cau-hoi-cau-text">
            <span>
              Ba mẹ cần tư vấn học phí và lộ trình học cho trẻ tại
              Boisinhton.com, truy cập form bên dưới để biết thêm thông tin chi
              tiết và đăng ký học thử miễn phí ba mẹ nhé!
            </span>
            <br></br>
            <span>
              Form đăng ký:
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span
              className="cau-hoi-text13"
              onClick={() => {
                window.open("https://forms.gle/1AcPCPUuZncXxoBD8");
              }}
            >
              https://forms.gle/1AcPCPUuZncXxoBD8
            </span>
          </span>
        )}
        <div className="cau-hoi-line1"></div>
        <div
          onClick={() => setOpen(open === 3 ? 0 : 3)}
          className="cau-hoi-cau31"
        >
          <h2 className="cau-hoi-title2">{props.Title2}</h2>
          {open !== 3 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon08">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
          {open === 3 && (
            <svg viewBox="0 0 1024 1024" className="cau-hoi-icon10">
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          )}
        </div>
        {open === 3 && (
          <span className="cau-hoi-cau-text">
            <span>
              Tùy vào độ tuổi mà ba mẹ sẽ được khuyên xuống hồ hỗ trợ hoặc cho
              trẻ học độc lập với huẩn luyện viên. Nếu trẻ từ 0-4 tuổi, ba mẹ
              nên xuống hồ hỗ trợ và động viên trẻ trong quá trình rèn luyện để
              hỗ trợ thầy/ cô nhằm mang đến sự hiệu quả nhất cho buổi học. Đối
              với trẻ trên 4 tuổi, trẻ có thể tự học và rèn luyện độc lập với
              huấn luyện viên tại hồ mà không cần sự có mặt của ba mẹ.
            </span>
            <br></br>
            <span>
              Ba mẹ cần tư vấn học phí và lộ trình học cho trẻ tại
              Boisinhton.com, truy cập form bên dưới để biết thêm thông tin chi
              tiết và đăng ký học thử miễn phí ba mẹ nhé!
            </span>
            <br></br>
            <span>
              Form đăng ký:
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span
              className="cau-hoi-text19"
              onClick={() => {
                window.open("https://forms.gle/1AcPCPUuZncXxoBD8");
              }}
            >
              https://forms.gle/1AcPCPUuZncXxoBD8
            </span>
          </span>
        )}
        <div className="cau-hoi-line2"></div>
      </div>
      <style jsx>
        {`
          .cau-hoi-cau-hoi {
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: flex;
            position: relative;
            max-width: 800px;
            margin-top: 20px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-hbst-blue);
          }
          .cau-hoi-cau1 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            justify-content: center;
          }
          .cau-hoi-title {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            text-align: left;
          }
          .cau-hoi-icon {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .cau-hoi-icon02 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
          }
          .cau-hoi-cau-text {
            color: var(--dl-color-hbst-white);
            text-align: left;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .cau-hoi-text09 {
            text-decoration: underline;
            cursor: pointer;
          }
          .cau-hoi-line {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.31);
            border-style: solid;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .cau-hoi-cau3 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            justify-content: center;
          }
          .cau-hoi-title1 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            text-align: left;
          }
          .cau-hoi-icon04 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .cau-hoi-icon06 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
          }
          .cau-hoi-cau-text {
            color: var(--dl-color-hbst-white);
            text-align: left;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .cau-hoi-text13 {
            text-decoration: underline;
            cursor: pointer;
          }
          .cau-hoi-line1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.31);
            border-style: solid;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .cau-hoi-cau31 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            justify-content: center;
          }
          .cau-hoi-title2 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 16px;
            text-align: left;
          }
          .cau-hoi-icon08 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .cau-hoi-icon10 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
          }
          .cau-hoi-cau-text {
            color: var(--dl-color-hbst-white);
            text-align: left;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .cau-hoi-text19 {
            text-decoration: underline;
            cursor: pointer;
          }
          .cau-hoi-line2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.31);
            border-style: solid;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
        `}
      </style>
    </>
  );
};

CauHoi.defaultProps = {
  Title1: "Tôi muốn được tư vấn học phí",
  Title: "Trẻ bao nhiêu tuổi có thể đăng ký học bơi?",
  Title2: "Ba mẹ có cần xuống hồ với bé không?",
};

CauHoi.propTypes = {
  Title1: PropTypes.string,
  Title: PropTypes.string,
  Title2: PropTypes.string,
};

export default CauHoi;
