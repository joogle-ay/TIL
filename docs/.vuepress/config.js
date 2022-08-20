module.exports = {
  title: "Today I Learned",
  description: "배운 것을 간략하게 기록합니다.",
  base: "",
  dest: "build",
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
      { text: "Github", link: "https://github.com/Jooeun-K", target: "_blank" },
      { text: "Blog", link: "https://guuumi.tistory.com/", target: "_blank" },
    ],
    sidebar: [
      {
        title: "TIL",
        children: ["/TIL/220820"],
      },
    ],
  },
};
