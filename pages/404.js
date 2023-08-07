import React from "react";
import Link from "next/link";
import Head from "next/head";

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>404 | Boisinhton.com</title>
          <meta property="og:title" content="404 | Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc-blDE6wZT4MbxV9oj__ERtuvqdOPVJsox9Nx_Gg5IXGcqnr6iezUq2nP9e1BaSxh36Ejo0cyoELIwhmUvIj-0CALdhvaAjofyQW8-Z6T3TKobbVig66i1dxo-2eOdZWmBUvynZxXpxAdnAV3emdMmQ2bu_wM91t8N2HRkwA4KhScuFuhmv3Wef9DflJln-KBx2vFN1yg1dCc16ApvwsJ-YAktMzFZlsLNgU4VKFiA1dakmCNCtgu_5e5GxpPnryLo-e1GI3gjCRu5s_kZ3z2PaJHn7ER4lnHfpyGHH8g7bet0UdvlZwB06jjtR5bxfhij00wF9pdYjsXKBroauCNfZAeQFta368CWqLz15x8FVDT_St99G8CgZOqpLJvWsfcaPmhv2CED64qedqRoEAbo1-fTRRpMdIRnNpFgV2Y-iO8D-AJfxIHD3GnRtXWCUcWBKEWfXtVQoPqgdSNwjtaRKVoGoOpqfPga7ZU6a07p1dwAvojEV2IvrN6t4_FTTgdtpFgGTS99HCOpO6CZSsOFrMt7XlbOUvk6v2UaF5coQMxtZIQg-kyN7AFiprzdfrAD3Oqp7UhOtnt0tAIUltsWEI3FWWoL84Nz_-J3u2TwbOXo568meumfiyJNnQWHK4h-3yfpCOc366seqaqKbff1ky5hur_1pVAF3Hsv43q36OTee0KM6Y3kOOyWa8Pgo65-D2IoBlEP3CXh_cYLR8I9Fhc6f4P0pYwYC_HrcspevgzoN9Rmn43ObWz3dte196_98TpoZ005Ywn8t4jLavZov5r7Y_IO4TMXAA3lpUrQINV1DQMXJMFTBpDNe6E0sCA3qLOOkpxYNQug_rpYYd5dB033n2EZGDgQexa1mo82ZtDMJNOTZUwKz16212YgHHV5IENKP0ZGoWjFtgjr3F7HklFAFJYa7zlg9ukyfOHBAcpaViRF4pEodgR_ldPM=w1000-no-tmp.jpg"
          />
        </Head>
        <div className="page-container1">
          <h1 className="page-text">
            <span>Notfound - 404</span>
            <br></br>
          </h1>
          <span className="page-text3">
            Đường dẫn của bạn không chính xác vui lòng liểm tra lại!
          </span>
          <Link href="/">
            <a className="page-link">
              <span>© Boisinhton.com</span>
              <br></br>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text {
            text-align: center;
          }
          .page-text3 {
            margin-top: 10px;
            text-align: center;
          }
          .page-link {
            color: var(--dl-color-hbst-blue);
            margin-top: 30px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default Page;
