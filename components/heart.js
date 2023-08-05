import React, { useState } from "react";
import { default as HeartIcon } from "react-animated-heart";

function Heart({ id, like }) {
  const [isClick, setClick] = useState(false);

  return (
    <>
      <div className="heart-container" onClick={() => setClick(!isClick)}>
        <HeartIcon
          styles={{ scale: 0.7, marginLeft: "-30px" }}
          isClick={isClick}
        />
        <p>{like}</p>
      </div>
      <style jsx>
        {`
          .heart-container {
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 50px;
          }

          .heart-container > p {
            margin-left: -30px;
            margin-top: 5px;
            color: white;
          }
        `}
      </style>
    </>
  );
}

export default Heart;
