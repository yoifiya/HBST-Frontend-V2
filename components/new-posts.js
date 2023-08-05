import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getUrl } from "../components/get-url";

const NewPosts = () => {
  const [Imgs, setImgs] = useState([]);
  const [Dates, setDates] = useState([]);
  const [Titles, setTitles] = useState([]);
  const [Tags, setTags] = useState([]);
  const [posts, setPosts] = useState({});

  useEffect(async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/api/posts");
    const posts = await res.json();
    setPosts(posts);
  }, []);

  useEffect(async () => {
    const response = posts;

    if (response["success"]) {
      const postsClone = {};
      for (const post of response.data) {
        postsClone[Number(post.index)] = post;
      }
      let title = [];
      let imgArray = [];
      let dateUpload = [];
      let tagArray = [];
      for (
        let i = Object.keys(postsClone).length;
        i >= Object.keys(postsClone).length - 3;
        i--
      ) {
        let post = postsClone[i];
        title.push(post.title);
        dateUpload.push(post.dateUpload);
        tagArray.push(post.tag);

        const imgs = post.text.split(/<\/?img>/);

        for (let img of imgs) {
          if (post.text.indexOf(`<img>${img}</img>`) !== -1) {
            if (img === "") continue;
            imgArray.push(img);
            break;
          }
        }
      }
      setTitles(title);
      setImgs(imgArray);
      setDates(dateUpload);
      setTags(tagArray);
    }
  }, [posts]);

  return (
    <>
      <div id="newPosts" className="new-posts-new-posts">
        <div
          id="post1"
          style={{ backgroundImage: `url(${Imgs[0]})` }}
          className="new-posts-item"
        >
          <Link href={"/posts/" + getUrl(Titles[0])}>
            <a className="new-posts-container">
              <span className="new-posts-date">
                <span>{Dates[0]}</span>
                <br></br>
              </span>
              <Link href={"blog?tag=" + getUrl(Tags[0])}>
                <a className="new-posts-link">
                  <span>
                    <span>{Tags[0]}</span>
                    <br></br>
                  </span>
                </a>
              </Link>
              <h1 className="new-posts-title">
                <span>{Titles[0]}</span>
                <br></br>
              </h1>
            </a>
          </Link>
        </div>
        <div
          id="post2"
          style={{ backgroundImage: `url(${Imgs[1]})` }}
          className="new-posts-item1"
        >
          <Link href={"/posts/" + getUrl(Titles[1])}>
            <a className="new-posts-container1">
              <span className="new-posts-date1">
                <span>{Dates[0]}</span>
                <br></br>
              </span>
              <Link href={"blog?tag=" + getUrl(Tags[1])}>
                <a className="new-posts-link1">
                  <span>
                    <span>{Tags[1]}</span>
                    <br></br>
                  </span>
                </a>
              </Link>
              <h1 className="new-posts-title1">
                <span>{Titles[1]}</span>
                <br></br>
              </h1>
            </a>
          </Link>
        </div>
        <div
          id="post3"
          style={{ backgroundImage: `url(${Imgs[2]})` }}
          className="new-posts-item2"
        >
          <Link href={"/posts/" + getUrl(Titles[2])}>
            <a className="new-posts-container2">
              <span className="new-posts-date2">
                <span>{Dates[2]}</span>
                <br></br>
              </span>
              <Link href={"blog?tag=" + getUrl(Tags[2])}>
                <a className="new-posts-link2">
                  <span>
                    <span>{Tags[2]}</span>
                    <br></br>
                  </span>
                </a>
              </Link>
              <h1 className="new-posts-title2">
                <span>{Titles[2]}</span>
                <br></br>
              </h1>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .new-posts-new-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 30px;
            align-items: center;
            justify-content: center;
          }
          .new-posts-item {
            width: 292px;
            height: 390px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
            background-position: center;
          }
          .new-posts-container {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .new-posts-date {
            top: 20px;
            left: 20px;
            color: var(--dl-color-hbst-white);
            position: absolute;
          }
          .new-posts-link {
            color: var(--dl-color-hbst-black);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            transition: 0.2s;
            font-weight: 300;
            padding-top: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            padding-right: 20px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-white);
          }
          .new-posts-link:hover {
            opacity: 0.5;
          }
          .new-posts-title {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .new-posts-item1 {
            width: 292px;
            height: 390px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
            background-position: center;
          }
          .new-posts-container1 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .new-posts-date1 {
            top: 20px;
            left: 20px;
            color: var(--dl-color-hbst-white);
            position: absolute;
          }
          .new-posts-link1 {
            color: var(--dl-color-hbst-black);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            transition: 0.2s;
            font-weight: 300;
            padding-top: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            padding-right: 20px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-white);
          }
          .new-posts-link1:hover {
            opacity: 0.5;
          }
          .new-posts-title1 {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .new-posts-item2 {
            width: 292px;
            height: 390px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
            background-position: center;
          }
          .new-posts-container2 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .new-posts-date2 {
            top: 20px;
            left: 20px;
            color: var(--dl-color-hbst-white);
            position: absolute;
          }
          .new-posts-link2 {
            color: var(--dl-color-hbst-black);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            transition: 0.2s;
            font-weight: 300;
            padding-top: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            padding-right: 20px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-white);
          }
          .new-posts-link2:hover {
            opacity: 0.5;
          }
          .new-posts-title2 {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          @media (max-width: 991px) {
            .new-posts-new-posts {
              flex-direction: column;
            }
            .new-posts-item {
              width: 90%;
              height: 200px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .new-posts-item1 {
              width: 90%;
              height: 200px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .new-posts-item2 {
              width: 90%;
              height: 200px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default NewPosts;
