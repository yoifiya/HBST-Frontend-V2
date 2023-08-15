import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/header";
import Tags from "../components/tags";
import Footer from "../components/footer";
import Heart from "../components/heart";

export const getStaticProps = async () => {
  const fetchAllPosts = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/post/all");
      const allPosts = await res.json();

      if (allPosts["success"]) {
        return allPosts.data;
      } else {
        throw new Error("Success is false");
      }
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return fetchAllPosts();
    }
  };

  try {
    const allPosts = await fetchAllPosts();
    return { props: { allPosts } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { allPosts: [] } };
  }
};

const Blog = ({ allPosts }) => {
  const router = useRouter();

  let totalPosts = 0;

  let page = router.query["page"] || 1;
  let tag = router.query["tag"];

  function getUrl(input) {
    const diacriticsMap = {
      "à|á|ả|ã|ạ": "a",
      "ă|ằ|ắ|ẳ|ẵ|ặ": "a",
      "â|ầ|ấ|ẩ|ẫ|ậ": "a",
      "è|é|ẻ|ẽ|ẹ": "e",
      "ê|ề|ế|ể|ễ|ệ": "e",
      "ì|í|ỉ|ĩ|ị": "i",
      "ò|ó|ỏ|õ|ọ": "o",
      "ô|ồ|ố|ổ|ỗ|ộ": "o",
      "ơ|ờ|ớ|ở|ỡ|ợ": "o",
      "ù|ú|ủ|ũ|ụ": "u",
      "ư|ừ|ứ|ử|ữ|ự": "u",
      "ỳ|ý|ỷ|ỹ|ỵ": "y",
      đ: "d",
      "[^a-z0-9]+": " ",
      " ": "-",
    };

    return input
      .toLowerCase()
      .replace(/./g, (char) => {
        for (const key in diacriticsMap) {
          if (new RegExp(key).test(char)) {
            return diacriticsMap[key];
          }
        }
        return char;
      })
      .trim()
      .replace(/\s+/g, "-");
  }

  let pages = 0;

  let postsInfo = [];
  for (const index in allPosts) {
    const post = allPosts[index];
    const imgs = post.text.split(/<\/?img>/);
    let imgArray = "";

    if (tag && tag === getUrl(post.tag || "")) {
      pages++;
    } else if (!tag) {
      pages++;
    }

    for (let img of imgs) {
      if (post.text.indexOf(`<img>${img}</img>`) !== -1) {
        if (img === "") continue;
        imgArray = img;
        break;
      }
    }
    postsInfo.push({
      img: imgArray,
      description: post.text
        .replace(`<img>${imgArray}</img>`, "")
        .replaceAll("<b>", "")
        .replaceAll("</b>", "")
        .replaceAll("\n", ""),
    });
  }

  pages = Array.from({ length: Math.ceil(pages / 4) }, (_, index) => index);

  let imgBanner = allPosts[0].text.split(/<\/?img>/);

  for (let img of imgBanner) {
    if (allPosts[0].text.indexOf(`<img>${img}</img>`) !== -1) {
      if (img === "") continue;
      imgBanner = img;
      break;
    }
  }

  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Kiến Thức | Boisinhton.com</title>
          <meta property="og:title" content="Kiến Thức | Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta property="og:image" content={imgBanner} />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <Tags allPosts={allPosts} rootClassName="tags-root-class-name"></Tags>
        <div className="blog-posts">
          {allPosts.map((post) => {
            let tagPost = post.tag;

            if (tag && tag !== getUrl(tagPost || "")) {
              return <div key={post.index}></div>;
            }

            totalPosts++;

            if (totalPosts > 4 * page || totalPosts <= 4 * (page - 1)) {
              return <div key={post.index}></div>;
            }

            let description = post.text;
            let Banner = "";

            const imgs = description.split(/<\/?img>/);

            const urls = description.split(/<\/?url>/);

            for (let url of urls) {
              if (description.indexOf(`<url>${url}</url>`) !== -1) {
                if (url === "") continue;
                description = description.replace(`<url>${url}</url>`, ``);
              }
            }

            for (let img of imgs) {
              if (description.indexOf(`<img>${img}</img>`) !== -1) {
                if (img === "") continue;
                if (Banner === "") {
                  Banner = img;
                }
                description = description.replace(`<img>${img}</img>`, ``);
              }
            }

            description = description
              .replaceAll("<b>", "")
              .replaceAll("</b>", "")
              .replaceAll("\n", "");
            return (
              <Link href={"/post/" + getUrl(post.title)}>
                <a className="blog-link">
                  <div className="blog-post">
                    <img alt="image" src={Banner} className="blog-avatar" />
                    <div className="blog-info">
                      <span className="blog-date">
                        <span>
                          {post.dateUpload} • {post.mins} mins
                        </span>
                        <br></br>
                      </span>
                      <span className="blog-date1">
                        <span>{post.tag}</span>
                        <br></br>
                      </span>
                      <h1 className="blog-title">{post.title}</h1>
                      <span className="blog-description">{description}</span>
                      <div
                        className="blog-heart"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <Heart id={post._id}></Heart>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="blog-container1">
          <Link
            href={`/blog${tag ? `?tag=${tag}&page=` : "?page="}${
              Number(page) > 1 ? Number(page) - 1 : page
            }`}
          >
            <a className="blog-icon2">
              <svg viewBox="0 0 1024 1024">
                <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
              </svg>
            </a>
          </Link>
          {pages.map((index) => {
            return (
              <Link
                href={`/blog${tag ? `?tag=${tag}&page=` : "?page="}${
                  index + 1
                }`}
              >
                <a
                  className={`blog-text4${page == index + 1 ? "-active" : ""}`}
                >
                  <span>{index + 1}</span>
                </a>
              </Link>
            );
          })}
          <Link
            href={`/blog${tag ? `?tag=${tag}&page=` : "?page="}${
              Number(page) < Object.keys(pages).length ? Number(page) + 1 : page
            }`}
          >
            <a className="blog-icon2">
              <svg viewBox="0 0 1024 1024">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .blog-link {
            display: contents;
          }
          .blog-post {
            flex: 0 0 auto;
            width: 90vw;
            cursor: pointer;
            height: 340px;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            margin-bottom: 20px;
            text-decoration: none;
          }
          .blog-avatar {
            width: 50%;
            height: 100%;
            max-height: 350px;
            object-fit: cover;
          }
          .blog-info {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-date {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            margin-bottom: 10px;
          }
          .blog-date1 {
            color: var(--dl-color-hbst-white);
            font-size: 14px;
            margin-bottom: 10px;
          }
          .blog-title {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            font-size: 28px;
            margin-bottom: 10px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .blog-description {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            line-height: 1.5;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .blog-heart {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 90%;
            bottom: 0px;
            height: 50px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.41);
            border-width: 1px;
            padding-bottom: 20px;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .blog-icon {
            fill: var(--dl-color-hbst-white);
            width: auto;
            cursor: pointer;
            height: 24px;
            opacity: 0.5;
            box-sizing: content-box;
            transition: 0.3s;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .blog-icon:hover {
            opacity: 1;
          }
          .blog-text4,
          .blog-text4-active {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            opacity: 0.5;
            font-size: 20px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 400;
            padding-top: 10px;
            margin-right: 5px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
          }
          .blog-text4:hover,
          .blog-text4-active {
            opacity: 1;
          }
          .blog-icon2 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            cursor: pointer;
            height: 24px;
            opacity: 0.5;
            box-sizing: content-box;
            transition: 0.3s;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .blog-icon2:hover {
            opacity: 1;
          }
          @media (max-width: 991px) {
            .blog-post {
              height: auto;
              flex-direction: column;
            }
            .blog-avatar {
              width: 100%;
              height: 30vw;
            }
            .blog-info {
              width: 100%;
              padding-bottom: 80px;
            }
          }
          @media (max-width: 767px) {
            .blog-container {
              padding-top: 118px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Blog;
