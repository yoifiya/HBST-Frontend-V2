import Document, { Html, Head, Main, NextScript } from "next/document";
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ",
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/logo1.webp"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.discordapp.com/attachments/1130002236660007086/1134121648266686595/hbst.css"
            data-tag="font"
          ></link>
          {/* <link
            rel="preload"
            href="./HBST.otf"
            as="font"
            type="font/otf"
            crossorigin
          ></link> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.3.0/flickity.pkgd.min.js"></script>\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.3.0/flickity.min.css">\n<noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            class="zalo-chat-widget"
            data-oaid="3107886607616267912"
            data-welcome-message="Rất vui khi được hỗ trợ bạn!"
            data-autopopup="0"
            data-width=""
            data-height=""
          ></div>
          <script src="https://sp.zalo.me/plugins/sdk.js"></script>
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
