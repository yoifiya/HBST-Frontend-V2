import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";

import Header from "../components/header";
import Footer from "../components/footer";

export const getStaticProps = async () => {
  const fetchNewPosts = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/post/new");
      const newPosts = await res.json();

      if (newPosts["success"]) {
        return newPosts.data;
      } else {
        throw new Error("Success is false");
      }
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return fetchNewPosts();
    }
  };

  try {
    const newPosts = await fetchNewPosts();
    return { props: { newPosts } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { newPosts: [] } };
  }
};

const Home = ({ newPosts }) => {
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

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Boisinhton.com</title>
          <meta
            name="description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta property="og:title" content="Boisinhton.com" />
          <meta
            property="og:description"
            content="Chúng tôi tổ chức các loại hoạt động hồ bơi mới. Chúng tôi đào tạo bằng cách tham gia các khóa học bơi sinh tồn khác nhau và tìm hiểu về các xu hướng học bơi mới"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/pw/AIL4fc95smzk_QUHx8IOXZLMJPDp0D6NaBq8DP3PsunWOlfuxauo-d1lzAQhz1NztEj5Uz4JuO3bbSac0Q3bTByYavYq_O-XZF8RiR5fnLtRv6O87-_VDDc=d"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="home-side">
          <Carousel
            showThumbs={false}
            swipeable={false}
            showStatus={false}
            autoPlay
            animationHandler={"fade"}
            infiniteLoop
          >
            <div className="home-img1">
              <h1 className="home-text">uy tín</h1>
              <h1 className="home-text01">
                <span>để ba mẹ lựa chọn</span>
                <br></br>
              </h1>
            </div>
            <div className="home-img2">
              <h1 className="home-text04">hiệu quả</h1>
              <h1 className="home-text05">
                <span>CHO TRẺ HỌC TẬP VÀ RÈN LUYỆN</span>
                <br></br>
              </h1>
            </div>
            <div className="home-img3">
              <h1 className="home-text08">Năng</h1>
              <h1 className="home-text09">Động</h1>
              <h1 className="home-text10">hành trình</h1>
            </div>
            <div className="home-img4">
              <h1 className="home-text11">Tuyển</h1>
              <h1 className="home-text12">chọn</h1>
              <h1 className="home-text13">CHƯƠNG TRÌNH</h1>
              <h1 className="home-text14">chuẩn quốc tế</h1>
            </div>
          </Carousel>
        </div>
        <div className="home-info">
          <h1 className="home-title">CHÚNG TÔI LÀ AI?</h1>
          <span className="home-text15">
            <span>
              Boisinhton.com do công ty TNHH Survival Group thành lập - địa điểm
              chuyên dạy bơi cho trẻ em Việt. Công ty được thành lập vào năm
              2022 do 2 huấn luyện viên Đoàn Quốc Hùng và Tạ Quan Minh đồng sáng
              lập với tên thương hiệu là Boisinhton.com.
            </span>
            <br></br>
            <br></br>
            <span>
              Đây cũng là thông điệp mà chúng tôi muốn gửi gắm đến ba mẹ, những
              người chăm sóc trẻ, bảo mẫu rằng cần trang bị cho các con kĩ năng
              an toàn nước, kĩ năng bơi lội để đảm bảo trẻ luôn an toàn trong
              môi trường nước.
            </span>
          </span>
          <Link href="/gioi-thieu">
            <a className="home-link">Tìm hiểu thêm</a>
          </Link>
        </div>
        <div className="home-blogs">
          <h1 className="home-title1">Kiến thức</h1>
          <div id="newPosts" className="new-posts-new-posts">
            {newPosts.map((post) => {
              const imgs = post.text.split(/<\/?img>/);
              let imgUrl = "";

              for (let img of imgs) {
                if (post.text.indexOf(`<img>${img}</img>`) !== -1) {
                  if (img === "") continue;

                  imgUrl = img;
                }
              }
              return (
                <Link href={`/post/${getUrl(post.title)}`}>
                  <a
                    key={post.index}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                    id="post1"
                    className="new-posts-item"
                  >
                    <div className="new-posts-container">
                      <span className="new-posts-date">
                        <span>{post.dateUpload}</span>
                        <br></br>
                      </span>
                      <Link href={`/blog?tag=${getUrl(post.tag)}`}>
                        <a className="new-posts-link">
                          <span>
                            <span>{post.tag}</span>
                            <br></br>
                          </span>
                        </a>
                      </Link>
                      <h1 className="new-posts-title">
                        <span>{post.title}</span>
                        <br></br>
                      </h1>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="home-khoa-hoc">
          <h1 className="home-title2">CÁC KHÓA HỌC</h1>
          <div className="home-khoa-hoc-moi">
            <div className="home-khoa-hoc1">
              <div className="home-container01">
                <h1 className="home-title3">Khóa Bơi 0-3 Tuổi</h1>
                <span className="home-info1">
                  Xây dựng cho trẻ các kỹ năng an toàn khi ở dưới nước và sự tự
                  tin cho trẻ trong môi trường nước.
                </span>
                <div className="home-time">
                  <div className="home-container02">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                    </svg>
                    <span className="home-text20">
                      <span>30-60 phút</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container03">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon02"
                    >
                      <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
                    </svg>
                    <span className="home-text23">2-3 buổi/ tuần</span>
                  </div>
                </div>
                <div className="home-tim-hieu-them1">
                  <Link href={"/khoa-hoc-0-3"}>
                    <span className="home-text24">
                      <span>Tìm hiểu thêm</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-khoa-hoc2">
              <div className="home-container04">
                <h1 className="home-title4">Khóa Bơi 3-5 Tuổi</h1>
                <span className="home-info2">
                  Xây dựng sự tự tin cho trẻ khi ở dưới nước và kỹ năng bơi Dog
                  Paddle 10M sinh tồn.
                </span>
                <div className="home-time1">
                  <div className="home-container05">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                    </svg>
                    <span className="home-text27">
                      <span>30-60 phút</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container06">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon06"
                    >
                      <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
                    </svg>
                    <span className="home-text30">2-3 buổi/ tuần</span>
                  </div>
                </div>
                <div className="home-tim-hieu-them2">
                  <Link href={"/khoa-hoc-3-5"}>
                    <span className="home-text31">
                      <span>Tìm hiểu thêm</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-khoa-hoc3">
              <div className="home-container07">
                <h1 className="home-title5">Khóa Bơi Trên 5 Tuổi</h1>
                <span className="home-info3">
                  Cung cấp kỹ năng an toàn cho trẻ và rèn luyện kỹ năng bơi 10M
                  (kỹ năng bơi mà trẻ yêu thích).
                </span>
                <div className="home-time2">
                  <div className="home-container08">
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                    </svg>
                    <span className="home-text34">
                      <span>30-60 phút</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container09">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon10"
                    >
                      <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
                    </svg>
                    <span className="home-text37">2-3 buổi/ tuần</span>
                  </div>
                </div>
                <div className="home-tim-hieu-them3">
                  <Link href={"/khoa-hoc-tren-5"}>
                    <span className="home-text38">
                      <span>Tìm hiểu thêm</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .new-posts-new-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 30px;
            align-items: center;
            justify-content: center;
          }
          .new-posts-item {
            width: 292px;
            height: 390px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
            background-position: center;
          }
          .new-posts-container {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .new-posts-date {
            top: 20px;
            left: 20px;
            color: var(--dl-color-hbst-white);
            position: absolute;
          }
          .new-posts-link {
            color: var(--dl-color-hbst-black);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            transition: 0.2s;
            font-weight: 300;
            padding-top: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            padding-right: 20px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-white);
          }
          .new-posts-link:hover {
            opacity: 0.5;
          }
          .new-posts-title {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .new-posts-item1 {
            width: 292px;
            height: 390px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
            background-position: center;
          }
          .new-posts-container1 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .new-posts-date1 {
            top: 20px;
            left: 20px;
            color: var(--dl-color-hbst-white);
            position: absolute;
          }
          .new-posts-link1 {
            color: var(--dl-color-hbst-black);
            cursor: pointer;
            font-style: normal;
            text-align: center;
            transition: 0.2s;
            font-weight: 300;
            padding-top: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            padding-right: 20px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-white);
          }
          .new-posts-link1:hover {
            opacity: 0.5;
          }
          .new-posts-title1 {
            color: var(--dl-color-hbst-white);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-side {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-img1 {
            width: 100%;
            height: 45vw;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_nnYBJp8FfSLQ37tZtgzYT_QR6wcoi7pLbm-HrhP3Sg7sVDZuDWGqepUCXagN4dQZfoiPdMNW0AwCtAl3HbtC3Q19camwwre5FKjSXR4IsAb-WPRk=d");
            background-position: center;
          }
          .home-text {
            top: 0.5vw;
            left: 20vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text01 {
            top: 9vw;
            left: 22vw;
            color: var(--dl-color-hbst-white);
            position: absolute;
            font-size: 2vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-img2 {
            width: 100%;
            height: 45vw;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_EpTG0tIamcNf8curUvBdN-IWPqCojmdaFn8Wm3Sp4BJls0_kJSq6j31P36lQ1gWnN0veBv-WTznXDPhFj8R7JHXq4XfA0M4MTiyW5Phldw4cHwaw=d");
            background-position: center;
          }
          .home-text04 {
            top: 28vw;
            left: 45vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text05 {
            top: 38vw;
            left: 47vw;
            color: var(--dl-color-hbst-white);
            position: absolute;
            font-size: 2vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-img3 {
            width: 100%;
            height: 45vw;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_bwWzlD232T5uT5KJ4gMm-YRH_ETFCUAHVpgQVaTeZ2sLfUz43Z25iewZeoCz5AMjxVmJCGTRq_2EFu-r89-ja-u_GUMeB7STiR07RVSGfSjcNBs0=d");
            background-position: center;
          }
          .home-text08 {
            top: 5vw;
            left: 8vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text09 {
            top: 5vw;
            left: 56vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text10 {
            top: 2vw;
            left: 20vw;
            color: var(--dl-color-hbst-white);
            position: absolute;
            font-size: 2vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-img4 {
            width: 100%;
            height: 45vw;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-3XeYjqQbo_ktlfxZpxgh6l-oURIGFb_HTqn0RPGga6LlrTT58NdyWrpN6LRung7xyu5FrJD0iuTzbM7FVeqGJYDmlDV5F_fIaWmrPdz2GivamFDs=d");
            background-position: center;
          }
          .home-text11 {
            top: 5vw;
            left: 8vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text12 {
            top: 5vw;
            left: 66vw;
            color: var(--dl-color-hbst-yellow);
            position: absolute;
            font-size: 8vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text13 {
            top: 2vw;
            left: 10vw;
            color: var(--dl-color-hbst-white);
            position: absolute;
            font-size: 2vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text14 {
            top: 14.5vw;
            left: 72vw;
            color: var(--dl-color-hbst-white);
            position: absolute;
            font-size: 2vw;
            text-align: center;
            text-transform: uppercase;
          }
          .home-info {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: center;
          }
          .home-title {
            color: var(--dl-color-hbst-blue);
            font-size: 50px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text15 {
            width: 90vw;
            max-width: 650px;
            margin-top: 30px;
            text-align: center;
            line-height: 1.3;
          }
          .home-link {
            color: var(--dl-color-hbst-white);
            cursor: pointer;
            margin-top: 30px;
            transition: 0.2s;
            padding-top: 10px;
            padding-left: 20px;
            border-radius: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
            text-decoration: none;
            background-color: var(--dl-color-hbst-blue);
          }
          .home-link:hover {
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          .home-blogs {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: center;
            background-color: var(--dl-color-hbst-blue);
          }
          .home-title1 {
            color: var(--dl-color-hbst-yellow);
            font-size: 50px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-khoa-hoc {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 40px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: center;
          }
          .home-title2 {
            color: var(--dl-color-hbst-blue);
            font-size: 50px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-khoa-hoc-moi {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: center;
            justify-content: center;
          }
          .home-khoa-hoc1 {
            width: 306px;
            height: 569px;
            display: flex;
            align-items: flex-end;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc9lhjfX0Py0Wq4pOqCBWKRYl3NqEgVR5cGub0gvvCqjMwxPYTwmBXO0RuM0Y2AMHdUeK6GHbAiNQmHzix2w4lUiVACEW_AHERkIxFq29fscunS11bI=d");
            background-position: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
          .home-title3 {
            color: var(--dl-color-hbst-white);
            font-size: 30px;
          }
          .home-info1 {
            color: var(--dl-color-hbst-white);
            margin-top: 10px;
            line-height: 1.3;
            margin-bottom: 10px;
          }
          .home-time {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 85%;
            bottom: 60px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          }
          .home-icon {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text20 {
            color: var(--dl-color-hbst-white);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .home-icon02 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text23 {
            color: var(--dl-color-hbst-white);
          }
          .home-tim-hieu-them1 {
            left: 0px;
            right: 0px;
            width: auto;
            bottom: 15px;
            margin: auto;
            position: absolute;
            display: flex;
            justify-content: center;
            align-item: center;
          }
          .home-text24 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            transition: 0.2s;
            padding-top: 5px;
            padding-left: 25px;
            border-radius: 20px;
            padding-right: 25px;
            padding-bottom: 5px;
            background-color: var(--dl-color-hbst-white);
          }
          .home-text24:hover {
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          .home-khoa-hoc2 {
            width: 306px;
            height: 569px;
            display: flex;
            align-items: flex-end;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc9GIYSN3WEg4qXw6PpsOHjgy-Y32KwOswr24c4yPJr_vqwmCv7FoSsx_5rQDeK-lCmS4lOUypsUVnbGKjtRgGVPeoIy0dmPmzbkvqz1iibPiMVr1RU=d");
            background-position: center;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
          .home-title4 {
            color: var(--dl-color-hbst-white);
            font-size: 30px;
          }
          .home-info2 {
            color: var(--dl-color-hbst-white);
            margin-top: 10px;
            line-height: 1.3;
            margin-bottom: 10px;
          }
          .home-time1 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 85%;
            bottom: 60px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          }
          .home-icon04 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text27 {
            color: var(--dl-color-hbst-white);
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .home-icon06 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text30 {
            color: var(--dl-color-hbst-white);
          }
          .home-tim-hieu-them2 {
            left: 0px;
            right: 0px;
            width: auto;
            bottom: 15px;
            margin: auto;
            position: absolute;
            display: flex;
            justify-content: center;
            align-item: center;
          }
          .home-text31 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            transition: 0.2s;
            padding-top: 5px;
            padding-left: 25px;
            border-radius: 20px;
            padding-right: 25px;
            padding-bottom: 5px;
            background-color: var(--dl-color-hbst-white);
          }
          .home-text31:hover {
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          .home-khoa-hoc3 {
            width: 306px;
            height: 569px;
            display: flex;
            align-items: flex-end;
            margin-left: 20px;
            margin-right: 20px;
            background-size: cover;
            justify-content: center;
            background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc-NQLJeBdwuh2bEkC80U2PWxyvAZGQp_KG8277Pd-27Vf_3cYTDEg6fIRdzFhd5_nTA9zjsOmLNLYrAnWZLY97M043ixMrmAXt1vBnO6kLifsr7xJo=d");
            background-position: center;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            padding: 20px;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-hbst-blue);
          }
          .home-title5 {
            color: var(--dl-color-hbst-white);
            font-size: 30px;
          }
          .home-info3 {
            color: var(--dl-color-hbst-white);
            margin-top: 10px;
            line-height: 1.3;
            margin-bottom: 10px;
          }
          .home-time2 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 85%;
            bottom: 60px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          }
          .home-icon08 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text34 {
            color: var(--dl-color-hbst-white);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .home-icon10 {
            fill: var(--dl-color-hbst-white);
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .home-text37 {
            color: var(--dl-color-hbst-white);
          }
          .home-tim-hieu-them3 {
            left: 0px;
            right: 0px;
            width: auto;
            bottom: 15px;
            margin: auto;
            position: absolute;
            display: flex;
            justify-content: center;
            align-item: center;
          }
          .home-text38 {
            color: var(--dl-color-hbst-blue);
            cursor: pointer;
            transition: 0.2s;
            padding-top: 5px;
            padding-left: 25px;
            border-radius: 20px;
            padding-right: 25px;
            padding-bottom: 5px;
            background-color: var(--dl-color-hbst-white);
          }
          .home-text38:hover {
            color: var(--dl-color-hbst-black);
            background-color: var(--dl-color-hbst-yellow);
          }
          @media (max-width: 991px) {
            .new-posts-new-posts {
              flex-direction: column;
            }
            .new-posts-item {
              width: 90%;
              height: 200px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .new-posts-item1 {
              width: 90%;
              height: 200px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .home-khoa-hoc-moi {
              flex-direction: column;
            }
            .home-khoa-hoc1 {
              width: 90%;
              height: 300px;
            }
            .home-container01 {
              height: 80%;
            }
            .home-khoa-hoc2 {
              width: 90%;
              height: 300px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .home-container04 {
              height: 80%;
            }
            .home-khoa-hoc3 {
              width: 90%;
              height: 300px;
            }
            .home-container07 {
              height: 80%;
            }
          }
          @media (max-width: 767px) {
            .home-container {
              padding-top: 138px;
            }
            .home-title {
              font-size: 40px;
            }
            .home-title1 {
              font-size: 40px;
            }
            .home-title2 {
              font-size: 40px;
            }
          }
          @media (max-width: 479px) {
            .home-title {
              font-size: 30px;
            }
            .home-title1 {
              font-size: 30px;
            }
            .home-title2 {
              font-size: 30px;
            }
            .home-khoa-hoc1 {
              height: 350px;
            }
            .home-khoa-hoc2 {
              height: 350px;
            }
            .home-khoa-hoc3 {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
