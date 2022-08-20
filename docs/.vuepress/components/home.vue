<template>
  <div>
    <div class="titleBox">
      <h1 class="title"><span>Slow but steadily</span>
      </h1>
    </div>
    <div class="contentBox">
      <h3>This is Jooeun's TIL.</h3>
      <p>오늘 배운 것들을 로그 형식으로 작성합니다.<br>
      개발 이야기를 주로 합니다.</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
@font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.titleBox {
  text-align: left;

}
h1.title {
  font-family: "GongGothicMedium", "돋움", sans-serif;
  font-weight: 500;
  word-break: keep-all;
  font-size: 3rem;
  padding-bottom: 10px;
  position:relative;
  display: inline-block;
}
h1.title span {
  position:relative;
  z-index: 1;
}
h1.title:before {
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