import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { getUrl } from "../../components/get-url";
import Tags from "../../components/tags";

const Posts = (props) => {
  const router = useRouter();

  const { url } = router.query;
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState({});

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
          `<img style="width: 100%" src="${img}" alt="img"/>`
        );
      }
    }

    const lists = text.split(/<\/?list>/);

    for (let list of lists) {
      if (text.indexOf(`<list>${list}</list>`) !== -1) {
        if (list === "") continue;

        const lists = list.split("<br/>");
        let strList = "<ul>";

        for (let li of lists) {
          strList = strList + `<li>${li}</li>`;
        }
        strList = strList + "</ul>";
        text = text.replace(`<list>${list}</list>`, strList);
      }
    }

    const listsNum = text.split(/<\/?numList>/);

    for (let list of listsNum) {
      if (text.indexOf(`<numList>${list}</numList>`) !== -1) {
        if (list === "") continue;

        const listsNum = list.split("<br/>");
        let strList = "<ul style='padding-left: 30px'>";

        for (let li of listsNum) {
          strList = strList + `<li style="list-style: decimal">${li}</li>`;
        }
        strList = strList + "</ul>";
        text = text.replace(`<numList>${list}</numList>`, strList);
      }
    }
    return text;
  };

  useEffect(async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/api/posts");
    let posts = await res.json();
    let post = {};
    posts.data = posts.data.reverse();

    setPosts(posts);
  }, []);

  useEffect(() => {
    if (posts["success"]) {
      for (const index in posts.data) {
        const postTmp = posts.data[index];

        if (getUrl(postTmp.title) === url) {
          setPost(postTmp);
          break;
        }
      }
    }
  }, [posts]);

  useEffect(() => {
    if (post.text) {
      document.getElementById("content").innerHTML = convertTextToHtml(
        post.text
      );
    }
  }, [post]);

  console.log(post);

  return (
    <>
      <div className="posts-container">
        <Head>
          <title>{post.title}</title>
          <meta
            property="og:title"
            content="Posts - Punctual Substantial Goldfish"
          />
        </Head>
        <Header rootClassName="header-root-class-name6"></Header>
        <Tags></Tags>
        <div className="posts-container1">
          <div className="posts-container2">
            <span className="posts-text">{post.dateUpload}</span>
            <h1 className="posts-text1">{post.title}</h1>
            <span className={`posts-text2`}>{post.dateUpdate}</span>
            <div id="content"></div>
            <div className="posts-info">
              <div className="posts-share">
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="posts-icon"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
              <div className="posts-tags">
                <Link href={"/blog?tag=" + getUrl(post.tag)}>
                  <a className="posts-link">
                    <span>{post.tag}</span>
                    <br></br>
                  </a>
                </Link>
              </div>
            </div>
            <div className="posts-heart"></div>
          </div>
          <div className="posts-related-posts">
            <span className="posts-title">Related Posts</span>
            <Link href="/blog">
              <a className="posts-link1">
                <span>See All</span>
                <br></br>
              </a>
            </Link>
            <div className="posts-posts">
              <Link href="/blog">
                <a className="posts-link2">
                  <div className="posts-post">
                    <img
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      alt="image"
                      className="posts-image1"
                    />
                    <div className="posts-info1">
                      <h1 className="posts-title1">Title</h1>
                      <div className="posts-heart1"></div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="posts-comments">
            <h1 className="posts-text7">Comments</h1>
            <div className="posts-comment">
              <textarea
                placeholder="Viết bình luận..."
                className="posts-textarea"
              ></textarea>
              <div className="posts-container3">
                <div className="posts-container4">
                  <input
                    type="file"
                    placeholder="placeholder"
                    className="posts-textinput"
                  />
                  <button type="button" className="posts-button">
                    Thêm hình ảnh
                  </button>
                </div>
                <div className="posts-container5">
                  <button type="button" className="posts-button1">
                    Đăng
                  </button>
                </div>
              </div>
            </div>
            <div className="posts-comment-posts">
              <div className="posts-post1">
                <img
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  alt="image"
                  className="posts-image2"
                />
                <div className="posts-container6">
                  <h1 className="posts-name">Name</h1>
                  <span className="posts-text8">Text</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          #content {
            color: white;
            line-height: 1.5;
          }
          .content-img {
            width: 100%;
          }
          .posts-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .posts-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 80px;
            flex-direction: column;
            padding-bottom: 80px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .posts-container2 {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            max-width: 750px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .posts-text {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
          }
          .posts-text1 {
            color: var(--dl-color-hbst-white);
            padding-top: 30px;
            padding-bottom: 20px;
          }
          .posts-text2 {
            color: var(--dl-color-hbst-white);
            display: block;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .posts-image {
            width: 100%;
            object-fit: cover;
          }
          .posts-info {
            flex: 0 0 auto;
            width: 100%;
            height: 60px;
            display: flex;
            margin-top: 20px;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.23);
            border-width: 0px;
            justify-content: center;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .posts-share {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .posts-icon {
            fill: var(--dl-color-hbst-white);
            width: 20px;
            height: 20px;
          }
          .posts-tags {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .posts-link {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            text-decoration: none;
          }
          .posts-heart {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .posts-related-posts {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 1000px;
            align-self: center;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .posts-title {
            color: var(--dl-color-hbst-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
          }
          .posts-link1 {
            top: 0px;
            color: var(--dl-color-hbst-white);
            right: 0px;
            cursor: pointer;
            position: absolute;
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .posts-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .posts-link2 {
            display: contents;
          }
          .posts-post {
            flex: 0 0 auto;
            width: 16vw;
            cursor: pointer;
            height: auto;
            display: flex;
            max-width: 290px;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .posts-image1 {
            width: 100%;
            height: 9vw;
            max-height: 162px;
            object-fit: cover;
          }
          .posts-info1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts-title1 {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            font-size: 20px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .posts-heart1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.23);
            border-width: 0px;
            flex-direction: column;
            border-top-width: 1px;
          }
          .posts-comments {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 800px;
            align-self: center;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .posts-text7 {
            color: var(--dl-color-hbst-white);
            width: 100%;
            font-size: 18px;
            padding-top: 20px;
            border-color: rgba(255, 255, 255, 0.23);
            border-width: 0px;
            padding-bottom: 20px;
            border-bottom-width: 1px;
          }
          .posts-comment {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts-textarea {
            width: 100%;
            height: auto;
            resize: none;
            min-height: auto;
            padding-top: 30px;
            margin-bottom: 20px;
            padding-bottom: 30px;
            background-color: rgba(217, 217, 217, 0);
          }
          .posts-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .posts-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .posts-textinput {
            display: none;
          }
          .posts-button {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            transition: 0.3s;
            padding-top: 10px;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 10px;
            background-color: var(--dl-color-hbst-white);
          }
          .posts-button:hover {
            scale: 1.2;
          }
          .posts-container5 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .posts-button1 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            transition: 0.3s;
            padding-top: 10px;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 10px;
            background-color: var(--dl-color-hbst-white);
          }
          .posts-button1:hover {
            scale: 1.2;
          }
          .posts-comment-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 30px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .posts-post1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .posts-image2 {
            width: 60px;
            object-fit: cover;
          }
          .posts-container6 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: flex-start;
            padding-left: 20px;
            flex-direction: column;
          }
          .posts-name {
            color: var(--dl-color-hbst-white);
            font-size: 20px;
            padding-bottom: 10px;
          }
          .posts-text8 {
            color: var(--dl-color-hbst-white);
            width: 100%;
          }
          @media (max-width: 1200px) {
            .posts-posts {
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .posts-posts {
              flex-direction: column;
            }
            .posts-post {
              width: 100%;
              max-width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .posts-image1 {
              height: 20vw;
              max-height: 200px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Posts;
