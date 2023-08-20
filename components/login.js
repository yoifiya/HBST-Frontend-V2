import React, { useRef } from "react";

import PropTypes from "prop-types";

const Login = (props) => {
  const isDebouce = useRef(false);

  return (
    <>
      <div className={`login-container ${props.rootClassName} `}>
        <form
          className="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (isDebouce.current) {
              return;
            }
            isDebouce.current = true;
            const username = e.target.username.value;
            const password = e.target.password.value;

            console.log(username, password);
            const res = await fetch(
              process.env.NEXT_PUBLIC_apiUrl + "/admin/login",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: username,
                  password: password,
                }),
              }
            )
              .then((res) => res.json())
              .catch((err) => {});

            if (!res["success"]) {
              alert(res["data"]);
            } else {
              localStorage.setItem(
                "admin-login",
                JSON.stringify({ username: username, password: password })
              );
              window.location.reload();
            }

            isDebouce.current = false;
          }}
        >
          <input
            type="text"
            id="username"
            required
            placeholder="Tên đăng nhập"
            className="login-username"
          />
          <input
            type="password"
            id="password"
            required
            placeholder="Mật khẩu"
            className="login-password"
          />
          <button type="submit" className="login-button">
            {props.button}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .login-form {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 50px;
            flex-direction: column;
            padding-bottom: 50px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .login-username {
            height: 30px;
          }
          .login-username::placeholder,
          .login-password::placeholder {
            color: black;
          }
          .login-password {
            height: 30px;
            margin-top: 10px;
          }
          .login-button {
            cursor: pointer;
            margin-top: 20px;
            transition: 0.3s;
            padding-top: 10px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 10px;
            background-color: #ffffff;
          }
          .login-button:hover {
            background-color: var(--dl-color-hbst-yellow);
          }
        `}
      </style>
    </>
  );
};

Login.defaultProps = {
  button: "Đăng nhập",
  rootClassName: "",
};

Login.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Login;
