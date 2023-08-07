import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PropTypes from "prop-types";

const Tags = (props) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const pathParts = currentPath.split("/");
  const basePath = pathParts[1];

  const { allPosts } = props;

  const tagSearch = router.query.tag;

  const [Tags, setTags] = useState([]);

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

  useEffect(() => {
    let tags = ["All Posts"];
    if (allPosts[0]) {
      for (const index in allPosts) {
        if (!tags.includes(allPosts[index].tag)) {
          tags.push(allPosts[index].tag);
        }
      }
    } else {
      tags.push(allPosts.tag);
    }
    setTags(tags);
  }, [allPosts]);

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
                    (!tagSearch && tag === "All Posts" && "-active") ||
                    (getUrl(tag) === tagSearch && "-active") ||
                    ""
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
