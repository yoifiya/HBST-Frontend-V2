import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Tags = (props) => {
  return (
    <>
      <div className={`tags-container ${props.rootClassName} `}>
        <div className="tags-container1">
          <Link href="/blog">
            <a className="tags-link">{props.button}</a>
          </Link>
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
          .tags-link {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: 20px;
            margin-right: 20px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Tags.defaultProps = {
  button: 'Tag',
  rootClassName: '',
}

Tags.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Tags
