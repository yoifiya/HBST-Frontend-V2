import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { getUrl } from "./get-url";

import PropTypes from "prop-types";

const Tags = (props) => {
  const router = useRouter();
  const [posts, setPosts] = useState({ success: false, data: {} });

  let tagA = router.query["tag"];

  useEffect(async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/api/posts");
    let posts = await res.json();
    posts.data = posts.data.reverse();
    setPosts(posts);
  }, []);

  const [Tags, setTags] = useState([]);

  useEffect(() => {
    if (posts["success"]) {
      let tags = ["All Posts"];
      for (const index in posts.data) {
        if (!tags.includes(posts.data[index].tag)) {
          tags.push(posts.data[index].tag);
        }
      }
      setTags(tags);
    }
  }, [posts]);

  return (
    <>
      <div className={`tags-container ${props.rootClassName} `}>
        <div className="tags-container1">
          {Tags.map((tag) => {
            return (
              <Link
                key={tag}
                href={`/blog${tag !== "All Posts" ? "?tag=" : ""}${
                  tag !== "All Posts" ? getUrl(tag) : ""
                }`}
              >
                <a
                  className={`tags-link${
                    (tag === "All Posts" && !tagA && "-active") ||
                    getUrl(tag) === tagA
                      ? "-active"
                      : ""
                  }`}
                >
                  {tag}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .tags-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 20px;
            padding-left: 10vw;
            padding-right: 10vw;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .tags-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
          }
          .tags-link,
          .tags-link-active {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: 20px;
            margin-right: 20px;
            text-decoration: none;
          }
          .tags-link-active {
            color: var(--dl-color-hbst-yellow);
          }
        `}
      </style>
    </>
  );
};

Tags.defaultProps = {
  button: "Tag",
  rootClassName: "",
};

Tags.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Tags;
