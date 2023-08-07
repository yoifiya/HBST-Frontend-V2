import React, { useEffect, useRef, useState } from "react";
import { default as HeartIcon } from "react-animated-heart";

function Heart({ id }) {
  const [isClick, setClick] = useState(false);
  const [like, setLike] = useState(0);
  const debounce = useRef(false);

  useEffect(() => {
    let saveClicked = JSON.parse(localStorage.getItem("saveClicked") || "[]");
    let saveLikes = JSON.parse(localStorage.getItem("saveLikes") || "{}");
    setClick(saveClicked.indexOf(id) > -1);
    setLike(saveLikes[id] || 0);
  }, []);

  async function handleClick() {
    if (debounce.current) {
      return;
    }
    debounce.current = true;
    setClick(!isClick);
    let saveClicked = JSON.parse(localStorage.getItem("saveClicked") || "[]");
    const index = saveClicked.indexOf(id);
    if (index > -1) {
      saveClicked.splice(index, 1);
      let saveLikes = JSON.parse(localStorage.getItem("saveLikes") || "{}");
      saveLikes[id] = Number(saveLikes[id] - 1);
      localStorage.setItem("saveLikes", JSON.stringify(saveLikes));
      setLike(Number(saveLikes[id]));
      await fetch(`${process.env.NEXT_PUBLIC_apiUrl}/post/heart/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: "sub",
        }),
      })
        .then((res) => res.json())
        .catch(function (err) {
          return { success: false, message: err.message };
        });
      debounce.current = false;
    } else {
      saveClicked.push(id);
      let saveLikes = JSON.parse(localStorage.getItem("saveLikes") || "{}");
      saveLikes[id] = Number(saveLikes[id] + 1);
      localStorage.setItem("saveLikes", JSON.stringify(saveLikes));
      setLike(Number(saveLikes[id]));
      await fetch(`${process.env.NEXT_PUBLIC_apiUrl}/post/heart/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: "add",
        }),
      })
        .then((res) => res.json())
        .catch(function (err) {
          return { success: false, message: err.message };
        });
      debounce.current = false;
    }

    localStorage.setItem("saveClicked", JSON.stringify(saveClicked));
  }

  useEffect(async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_apiUrl}/post/heart/${id}`
    ).then((res) => res.json());

    if (response["success"]) {
      setLike(response["data"]);
      let saveLikes = JSON.parse(localStorage.getItem("saveLikes") || "{}");
      saveLikes[id] = response["data"];
      localStorage.setItem("saveLikes", JSON.stringify(saveLikes));
    }
  }, []);

  return (
    <>
      <div className="heart-container" onClick={handleClick}>
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
