import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/header";
import Tags from "../components/tags";
import Footer from "../components/footer";
import { getPosts } from "../components/get-posts";
import { getUrl } from "../components/get-url";
import Heart from "../components/heart";

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts } };
}

const Blog = ({ posts }) => {
  const router = useRouter();
  let postsInfo = [];

  let page = router.query["page"] || 1;
  let tag = router.query["tag"];
  let totalPosts = 0;

  let pages = 0;

  for (const index in posts) {
    const post = posts[index];
    const imgs = post.text.split(/<\/?img>/);
    let imgArray = "";

    if (tag && tag === getUrl(post.tag)) {
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

  console.log(pages);

  pages = Array.from({ length: Math.ceil(pages / 4) }, (_, index) => index);

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
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <Tags {...{ posts: posts }} rootClassName="tags-root-class-name"></Tags>
        <div className="blog-posts">
          {Object.keys(posts).map((index) => {
            const post = posts[index];

            if (tag && getUrl(post.tag) !== tag) {
              return <></>;
            }

            totalPosts++;

            if (totalPosts > 4 * page || totalPosts <= 4 * (page - 1)) {
              return <></>;
            }

            return (
              <Link href={`/posts/${getUrl(post.title)}`}>
                <a className="blog-link">
                  <div className="blog-post">
                    <img
                      alt="image"
                      src={postsInfo[index].img}
                      className="blog-avatar"
                    />
                    <div className="blog-info">
                      <span className="blog-date">
                        <span>{`${post.dateUpload} • ${post.mins} mins`}</span>
                        <br></br>
                      </span>
                      <span className="blog-date1">
                        <span>{post.tag}</span>
                        <br></br>
                      </span>
                      <h1 className="blog-title">{post.title}</h1>
                      <span className="blog-description">
                        {postsInfo[index].description}
                      </span>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="blog-heart"
                      >
                        <Heart id={post._id} like={post.like} />
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
            width: 100%;
          }
          .blog-heart {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 90%;
            bottom: 0px;
            height: 100px;
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
            max-height: 50px;
            overflow: hidden;
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
          .blog-text4-active {
            opacity: 1;
          }
          .blog-text4:hover {
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
              padding-bottom: 70px;
            }
          }
          @media (max-width: 767px) {
            .blog-container {
              padding-top: 138px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Blog;
