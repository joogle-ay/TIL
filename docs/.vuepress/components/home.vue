<template>
  <div>
    <div class="title_box">
      <h1 class="title">
        <span class="title_text">Slow but steadily</span>
      </h1>
    </div>
    <div>
      <h3>This is Jooeun's TIL.</h3>
      <p>
        시야를 계속해서 넓혀나가고 싶은 프론트엔드 개발자
        <a href="https://github.com/joogle-ay" target="_blank">강주은</a>입니다.✨<br />
        이 곳에는 오늘 배운 것들을 로그 형식으로 기록합니다.<br />
        정돈된 글, 회고 등은
        <a href="https://guuumi.tistory.com/" target="_blank">티스토리 블로그</a>에 작성하는 편입니다.
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
@font-face {
  font-family: "GongGothicMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.title_box {
  text-align: left;
}
.title {
  font-family: "GongGothicMedium", "돋움", sans-serif;
  font-weight: 500;
  word-break: keep-all;
  font-size: 3rem;
  padding-bottom: 10px;
  position: relative;
  display: inline-block;
}
.title_text {
  position: relative;
  z-index: 1;
}
.title:before {
  content: "";
  width: calc(100% + 20px);
  height: 26px;
  background: #a5ebda;
  position: absolute;
  bottom: 5px;
  left: -10px;
  z-index: 0;
  border-radius: 13px;
}
</style>
