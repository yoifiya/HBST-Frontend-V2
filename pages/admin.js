import React, { useEffect, useState } from "react";
import Head from "next/head";

import Login from "../components/login";
import ControlPanel from "../components/control-panel";

const Admin = (props) => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("admin-login") || "{}");

    if (isLogin && isLogin["username"] && isLogin["password"]) {
      setLogin(true);
    }
  }, [setLogin]);

  return (
    <>
      <div className="admin-container">
        <Head>
          <title>Admin | Boisinhton.com</title>
          <meta property="og:title" content="Admin | Boisinhton.com" />
        </Head>
        {!isLogin ? (
          <Login rootClassName="login-root-class-name"></Login>
        ) : (
          <ControlPanel></ControlPanel>
        )}
      </div>
      <style jsx>
        {`
          .admin-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
        `}
      </style>
    </>
  );
};

export default Admin;
