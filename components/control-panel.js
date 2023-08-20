import React, { useEffect, useRef, useState } from "react";

import PropTypes, { func, object } from "prop-types";

const ControlPanel = (props) => {
  const [selected, setSelected] = useState("contacts");
  const [isEdit, setIsEdit] = useState(false);

  const isDebounce = useRef(false);

  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_apiUrl + "/post/all")
      .then((res) => res.json())
      .then((res) => {
        if (res["success"]) {
          setPosts(res["data"]);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("CÓ lỗi khi nhập dữ liệu từ database!");
      });
  }, [setPosts]);

  const convertTextToHtml = (text) => {
    text = "<p>" + text.replaceAll("\n", "<br/>") + "</p>";

    const urls = text.split(/<\/?url>/);

    for (let url of urls) {
      if (text.indexOf(`<url>${url}</url>`) !== -1) {
        if (url === "") continue;
        text = text.replace(
          `<url>${url}</url>`,
          `<a href="${url}" target="_blank"><u>${url}</u></a>`
        );
      }
    }

    const imgs = text.split(/<\/?img>/);

    for (let img of imgs) {
      if (text.indexOf(`<img>${img}</img>`) !== -1) {
        if (img === "") continue;
        text = text.replace(
          `<img>${img}</img>`,
          `<img style="margin-top: 10px; margin-bottom: 10px; background-color: white; width: 100%" src="${img}" alt="img"/>`
        );
      }
    }

    const lists = text.split(/<\/?list>/);

    for (let list of lists) {
      if (text.indexOf(`<list>${list}</list>`) !== -1) {
        if (list === "") continue;

        const lists = list.split("<br/>");
        let strList = "<ul style='padding-left: 30px'>";

        for (let li of lists) {
          strList = strList + `<li>${li}</li>`;
        }
        strList = strList + "</ul>";
        text = text.replace(`<list>${list}</list>`, strList);
      }
    }

    const listsNum = text.split(/<\/?listNum>/);

    for (let list of listsNum) {
      if (text.indexOf(`<listNum>${list}</listNum>`) !== -1) {
        if (list === "") continue;

        const lists = list.split("<br/>");
        let strList =
          "<ul style='list-style-type: decimal; padding-left: 30px'>";

        for (let li of lists) {
          strList = strList + `<li>${li}</li>`;
        }
        strList = strList + "</ul>";
        text = text.replace(`<listNum>${list}</listNum>`, strList);
      }
    }
    return text;
  };

  useEffect(() => {
    const input1 = document.querySelector(".control-panel-textarea");
    const input2 = document.querySelector(".control-panel-textarea1");
    const input3 = document.querySelector(".control-panel-textarea2");
    const input4 = document.querySelector(".control-panel-textarea3");
    const output = document.querySelector(".control-panel-output");

    input1.value =
      (typeof isEdit === "string" &&
        posts.find((item) => item._id === isEdit).title) ||
      "";

    input2.value =
      (typeof isEdit === "string" &&
        posts.find((item) => item._id === isEdit).text) ||
      "";
    input3.value =
      (typeof isEdit === "string" &&
        posts.find((item) => item._id === isEdit).tag) ||
      "";
    input4.value =
      (typeof isEdit === "string" &&
        posts.find((item) => item._id === isEdit).mins) ||
      "";

    function onChange() {
      output.innerHTML = convertTextToHtml(
        `<h1>${input1.value}</h1>\n\n` + input2.value
      );
    }

    onChange();
    input1.addEventListener("input", onChange);
    input2.addEventListener("input", onChange);
    return () => {
      input1.removeEventListener("input", onChange);
      input2.removeEventListener("input", onChange);
    };
  }, [isEdit]);

  return (
    <>
      <div className="control-panel-container">
        <div className="control-panel-header">
          <button
            type="button"
            className="control-panel-button"
            onClick={() => {
              setSelected("contacts");
            }}
          >
            {props.Contacts}
          </button>
          <button
            type="button"
            className="control-panel-button1"
            onClick={() => {
              setSelected("posts");
              setIsEdit(false);
            }}
          >
            {props.Posts}
          </button>
        </div>
        <div
          style={{
            display: selected === "contacts" ? "flex" : "none",
          }}
          className="control-panel-contacts-container"
        >
          <div className="control-panel-shares">
            <h1 className="control-panel-title">{props.Title}</h1>
            <div className="control-panel-contacts">
              <div title="Bấm để sao chép" className="control-panel-contact">
                <span className="control-panel-name">{props.text}</span>
                <span className="control-panel-name1">{props.text1}</span>
                <span className="control-panel-name2">{props.text11}</span>
              </div>
            </div>
          </div>
          <div className="control-panel-contacts1">
            <h1 className="control-panel-text">{props.TItle2}</h1>
            <div className="control-panel-contacts2">
              <div title="Bấm để sao chép" className="control-panel-contact1">
                <span className="control-panel-name3">{props.text6}</span>
                <span className="control-panel-name4">{props.text16}</span>
                <span className="control-panel-name5">{props.text115}</span>
                <span className="control-panel-name6">{props.text1151}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
          }}
        >
          <button
            style={{
              display:
                selected === "posts" && typeof isEdit === "string"
                  ? "block"
                  : "none",
            }}
            type="button"
            className="control-panel-submit2"
            onClick={() => {
              if (isDebounce.current) {
                return;
              }

              isDebounce.current = true;

              fetch(process.env.NEXT_PUBLIC_apiUrl + "/post/remove", {
                method: "DELETE",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  _id: isEdit,
                  login: JSON.parse(
                    localStorage.getItem("admin-login") || "{}"
                  ),
                }),
              })
                .then((res) => res.json())
                .then((res) => {
                  if (res["success"]) {
                    setPosts(res["data"]);
                    setIsEdit(false);
                  } else {
                    alert(res["data"]);
                  }
                  isDebounce.current = false;
                })
                .catch((err) => {
                  console.log(err);
                  isDebounce.current = false;
                });
            }}
          >
            Xóa bài
          </button>
          <button
            style={{
              display: selected === "posts" ? "block" : "none",
            }}
            type="button"
            className="control-panel-submit"
            onClick={() => {
              if (isDebounce.current) {
                return;
              }
              if (!isEdit) {
                setIsEdit(true);
              } else {
                isDebounce.current = true;

                fetch(
                  process.env.NEXT_PUBLIC_apiUrl +
                    "/post/" +
                    (typeof isEdit === "string" ? "edit" : "upload"),
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      title: document.querySelector(".control-panel-textarea")
                        .value,
                      text: document.querySelector(".control-panel-textarea1")
                        .value,
                      _id: isEdit,
                      login: JSON.parse(
                        localStorage.getItem("admin-login") || "{}"
                      ),
                      tag: document.querySelector(".control-panel-textarea2")
                        .value,
                      mins: Number(
                        document.querySelector(".control-panel-textarea3").value
                      ),
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((res) => {
                    if (res["success"]) {
                      setPosts(res["data"]);
                      setIsEdit(false);
                    } else {
                      alert(res["data"]);
                    }
                    isDebounce.current = false;
                  })
                  .catch((err) => {
                    alert("Lỗi: " + err.message);
                    isDebounce.current = false;
                  });
              }
            }}
          >
            {!isEdit
              ? "Tạo bài viết mới"
              : typeof isEdit === "string"
              ? "Đăng chỉnh sửa"
              : "Đăng bài"}
          </button>
        </div>
        <div
          style={{
            display: selected === "posts" && isEdit ? "flex" : "none",
          }}
          className="control-panel-post-container"
        >
          <div className="control-panel-write">
            <span className="control-panel-id">
              {(typeof isEdit === "string" && "Đang chỉnh sửa: " + isEdit) ||
                ""}
            </span>
            <h1 className="control-panel-title1">{props.Title1}</h1>
            <div className="control-panel-writes">
              <textarea
                placeholder="Tiêu đề"
                className="control-panel-textarea"
              ></textarea>
              <textarea
                placeholder="Tag"
                className="control-panel-textarea2"
              ></textarea>
              <input
                placeholder="Số phút để đọc"
                className="control-panel-textarea3"
                type="number"
              ></input>
              <textarea
                placeholder="Nội dung"
                className="control-panel-textarea1"
              ></textarea>
              <span
                className="control-panel-info"
                style={{
                  lineHeight: 1.5,
                }}
              >
                <b>Hướng dẫn:</b>
                <br />
                <b>In đậm:</b> {`<b>`} Chữ {`</b>`}
                <br />
                <b>In nghiêng:</b> {`<i>`} Chữ {`</i>`}
                <br />
                <b>Gạch chân:</b> {`<u>`} Chữ {`</u>`}
                <br />
                <b>Hình:</b> {`<img>`} link {`</img>`}
                <br />
                <b>List:</b> {`<list>`} Chữ {`</list>`}
                <br />
                <b>List số:</b> {`<listNum>`} Chữ {`</listNum>`}
                <br />
                <b>URL:</b> {`<url>`} link {`</url>`}
                <br />
                <b>Up hình: </b>
                <a href="https://cdn.hocboisinhton.com/upload" target="_blank">
                  <u>https://cdn.hocboisinhton.com/upload</u>
                </a>
              </span>
            </div>
          </div>
          <div className="control-panel-review">
            <span className="control-panel-id1">
              {(typeof isEdit === "string" && "Đang chỉnh sửa: " + isEdit) ||
                ""}
            </span>
            <h1 className="control-panel-text1">{props.TItle21}</h1>
            <div className="control-panel-reviews">
              <div className="control-panel-output"></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: selected === "posts" && !isEdit ? "flex" : "none",
          }}
          className="control-panel-posts"
        >
          {Object.keys(posts).map((index) => {
            return (
              <button
                key={index}
                type="button"
                className="control-panel-post"
                onClick={() => {
                  setIsEdit(posts[index]._id);
                }}
              >
                {posts[index].title}
                <br></br>
                {posts[index]._id}
              </button>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .control-panel-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            background-color: var(--dl-color-hbst-blue);
          }
          .control-panel-header {
            flex: 0 0 auto;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .control-panel-button {
            width: 20%;
            cursor: pointer;
            height: 100%;
            transition: 0.3s;
            margin-left: 10%;
            margin-right: 10%;
            background-color: #ffffff;
          }
          .control-panel-button:hover {
            background-color: var(--dl-color-hbst-yellow);
          }
          .control-panel-button1 {
            width: 20%;
            cursor: pointer;
            height: 100%;
            transition: 0.3s;
            margin-left: 10%;
            margin-right: 10%;
            background-color: #ffffff;
          }
          .control-panel-button1:hover {
            background-color: var(--dl-color-hbst-yellow);
          }
          .control-panel-contacts-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-items: flex-start;
            padding-top: 40px;
            flex-direction: row;
            justify-content: center;
          }
          .control-panel-shares {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .control-panel-title {
            color: var(--dl-color-hbst-yellow);
          }
          .control-panel-contacts {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 20px;
            flex-direction: column;
            padding-bottom: 2px;
          }
          .control-panel-contact {
            flex: 0 0 auto;
            width: 90%;
            cursor: pointer;
            display: flex;
            max-width: 500px;
            transition: 0.3s;
            align-items: flex-start;
            padding-left: 40px;
            margin-bottom: 20px;
            padding-right: 40px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-hbst-yellow);
          }
          .control-panel-contact:hover {
            scale: 1.1;
          }
          .control-panel-name {
            color: #000000;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .control-panel-name1 {
            color: #000000;
          }
          .control-panel-name2 {
            color: #000000;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .control-panel-contacts1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .control-panel-text {
            color: var(--dl-color-hbst-yellow);
          }
          .control-panel-contacts2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 20px;
            flex-direction: column;
            padding-bottom: 2px;
          }
          .control-panel-contact1 {
            flex: 0 0 auto;
            width: 90%;
            cursor: pointer;
            display: flex;
            max-width: 500px;
            transition: 0.3s;
            align-items: flex-start;
            padding-left: 40px;
            margin-bottom: 20px;
            padding-right: 40px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-hbst-yellow);
          }
          .control-panel-contact1:hover {
            scale: 1.1;
          }
          .control-panel-name3 {
            color: #000000;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .control-panel-name4 {
            color: #000000;
          }
          .control-panel-name5 {
            color: #000000;
            margin-top: 10px;
          }
          .control-panel-name6 {
            color: #000000;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .control-panel-submit,
          .control-panel-submit2 {
            cursor: pointer;
            display: none;
            margin-top: 20px;
            transition: 0.3s;
            padding-top: 10px;
            margin-right: 40px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 10px;
            background-color: #ffffff;
            align-self: flex-end;
          }
          .control-panel-submit2 {
            background-color: var(--dl-color-danger-700);
          }
          .control-panel-submit:hover,
          .control-panel-submit2:hover {
            background-color: var(--dl-color-hbst-yellow);
          }
          .control-panel-post-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-items: flex-start;
            padding-top: 40px;
            flex-direction: row;
            justify-content: center;
          }
          .control-panel-write {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .control-panel-id {
            color: var(--dl-color-hbst-white);
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .control-panel-title1 {
            color: var(--dl-color-hbst-yellow);
          }
          .control-panel-writes {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 20px;
            flex-direction: column;
            padding-bottom: 2px;
          }
          .control-panel-textarea,
          .control-panel-textarea2,
          .control-panel-textarea3 {
            width: 90%;
            height: 50px;
            margin-bottom: 20px;
            color: black;
            resize: none;
          }
          .control-panel-textarea2,
          .control-panel-textarea3 {
            height: 25px;
          }
          .control-panel-textarea1 {
            width: 90%;
            height: 500px;
            resize: none;
            color: black;
          }
          .control-panel-textarea::placeholder,
          .control-panel-textarea1::placeholder,
          .control-panel-textarea2::placeholder,
          .control-panel-textarea3::placeholder {
            color: black;
          }
          .control-panel-info {
            color: var(--dl-color-hbst-white);
            align-self: center;
            margin-top: 20px;
          }
          .control-panel-review {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .control-panel-id1 {
            color: var(--dl-color-hbst-white);
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .control-panel-text1 {
            color: var(--dl-color-hbst-yellow);
          }
          .control-panel-reviews {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 20px;
            flex-direction: column;
            padding-bottom: 2px;
          }
          .control-panel-output {
            flex: 0 0 auto;
            width: 90%;
            height: 660px;
            display: flex;
            overflow: auto;
            align-items: flex-start;
            background-color: #ffffff;
            flex-direction: column;
            padding: 0 30px;
          }
          .control-panel-posts {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
          }
          .control-panel-post {
            width: 90%;
            cursor: pointer;
            max-width: 500px;
            min-height: 50px;
            margin-bottom: 20px;
            background-color: var(--dl-color-hbst-white);
          }
          @media (max-width: 767px) {
            .control-panel-header {
              height: auto;
              flex-direction: column;
            }
            .control-panel-button {
              width: 90%;
              height: 40px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .control-panel-button1 {
              width: 90%;
              height: 40px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .control-panel-contacts-container {
              flex-direction: column;
            }
            .control-panel-shares {
              width: 100%;
            }
            .control-panel-contacts1 {
              width: 100%;
            }
            .control-panel-post-container {
              flex-direction: column;
            }
            .control-panel-write {
              width: 100%;
            }
            .control-panel-review {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

ControlPanel.defaultProps = {
  Contacts: "Contacts",
  Posts: "Posts",
  Title: "Chia sẽ",
  TItle2: "Liên hệ",
  text: "Họ tên",
  text1: "SĐT",
  text11: "Email",
  text6: "Họ tên",
  text16: "SĐT",
  text115: "Email",
  text1151: "Tin nhắn",
  Title1: "Viêt bài",
  TItle21: "Review",
  button1: "Đăng bài",
  text2: "Hướng dẫn",
  text3: "Đang chỉnh sửa: _id",
  text31: "Đang chỉnh sửa: _id",
  button: "Button",
  button2: "Button",
  button3: "Button",
  button4: "Button",
  button5: "Button",
  button6: "Button",
};

ControlPanel.propTypes = {
  Contacts: PropTypes.string,
  Posts: PropTypes.string,
  Title: PropTypes.string,
  TItle2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  text6: PropTypes.string,
  text16: PropTypes.string,
  text115: PropTypes.string,
  text1151: PropTypes.string,
  Title1: PropTypes.string,
  TItle21: PropTypes.string,
  button1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text31: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
  button4: PropTypes.string,
  button5: PropTypes.string,
  button6: PropTypes.string,
};

export default ControlPanel;
