import React, { useEffect, useState } from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Tags = (props) => {
  const { posts } = props;

  const [Tags, setTags] = useState([]);

  useEffect(() => {
    let tags = ["All Posts"];
    for (const index in posts) {
      if (!tags.includes(posts[index].tag)) {
        tags.push(posts[index].tag);
      }
    }
    setTags(tags);
  }, []);

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
                <a className="tags-link">{tag}</a>
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
