const LIST = require("./list");

{
  /* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon"></link> */
}

module.exports = {
  title: "Jooeun's TIL",
  description:
    "Slow but Steadily. 오늘 배운 것들을 로그 형식으로 작성합니다. 개발 이야기를 주로 합니다. 주니어 프론트엔드 개발자 강주은 A.K.A 쭈꾸미",
  base: "/TIL/",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/assets/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/assets/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "m78_O9WTZXf9ieiRNO1Sfj4yMmeAVjyBlp4g4wVo988",
      },
    ],
  ],
  themeConfig: {
    nav: [
      // { text: "About", link: "/about/about-me" },
      { text: "Github", link: "https://github.com/Jooeun-K", target: "_blank" },
      { text: "Blog", link: "https://guuumi.tistory.com/", target: "_blank" },
    ],
    sidebar: [
      {
        title: "2023 TIL",
        children: LIST.TIL_2023,
      },
      {
        title: "2022 TIL",
        children: LIST.TIL_2022,
      },
      {
        title: "Bookmark",
        children: LIST.BOOKMARK,
      }
    ],
    sidebarDepth: 2,
  },
  plugins: ["@vuepress/back-to-top"],
};
