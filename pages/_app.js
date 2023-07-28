import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./icon/css/all.css";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
