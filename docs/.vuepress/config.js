const LIST = require("./list");

module.exports = {
  title: "Jooeun's TIL",
  description:
    "Slow but Steadily. 오늘 배운 것들을 로그 형식으로 작성합니다. 개발 이야기를 주로 합니다. 주니어 프론트엔드 개발자 강주은 A.K.A 쭈꾸미",
  base: "/TIL/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
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
        title: "2022 TIL",
        children: LIST.TIL_2022,
      },
    ],
    sidebarDepth: 1,
  },
};
