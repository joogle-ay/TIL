(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{282:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2022년-10월-til"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022년-10월-til"}},[t._v("#")]),t._v(" 2022년 10월 TIL")]),t._v(" "),a("h2",{attrs:{id:"_2022-10-04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022-10-04"}},[t._v("#")]),t._v(" 2022.10.04")]),t._v(" "),a("h3",{attrs:{id:"프로그래밍에-있어서-응집도란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로그래밍에-있어서-응집도란"}},[t._v("#")]),t._v(" 프로그래밍에 있어서 응집도란?")]),t._v(" "),a("p",[a("code",[t._v("좋은 코드란 무엇인가?")]),t._v(" 혹은 "),a("code",[t._v("좋은 프로덕트 설계는 무엇인가?")]),t._v(" 라는 키워드로 쓴 글을 보면 자주 나오는 문장. 낮은 결합도(Coupling)와 높은 응집도(Cohesion)를 갖도록 설계된 프로덕트가 좋은 프로덕트라는 것."),a("br"),t._v("\n결합도와 응집도라는 개념은 모듈의 독립성과 관련되어있다. 소프트웨어를 모듈화할 때, 독립성이 높아서 수정이나 재사용이 용이한 모듈이 좋은 모듈이라고 이야기하는데, 결합도와 응집도는 모듈의 독립성을 측정하는 기능이다.")]),t._v(" "),a("p",[t._v("📌 "),a("strong",[t._v("결합도린?")])]),t._v(" "),a("ul",[a("li",[t._v("서로 다른 모듈 간에 상호 의존하는 정도, 혹은 서로간에 연관된 관계.")])]),t._v(" "),a("p",[t._v("📌 "),a("strong",[t._v("응집도란?")])]),t._v(" "),a("ul",[a("li",[t._v("같은 모듈 내의 요소들이 서로 관련되어 있는 정도. 모듈이 하나의 기능을 중심으로 책임이 잘 뭉쳐있는지를 나타낸다.")])]),t._v(" "),a("p",[a("strong",[t._v("참고")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=aSAGOH2u2rs&t=139&ab_channel=FEConfKorea",target:"_blank",rel:"noopener noreferrer"}},[t._v("우리는 응집도에 대하여 이야기할 필요가 있다. - 마켓컬리 한윤석"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree shaking")]),t._v(" "),a("p",[t._v("사용하는 모듈, 혹은 라이브러리에서 불필요한 코드를 제거하는 것을 의미한다. 해피문데이 화상 면접 단계에서 질문받았던 것 중 몰랐던 개념.")]),t._v(" "),a("p",[a("code",[t._v("팀프로젝트에서 검색 단계에 필요한 디바운싱을 처리하기 위해 lodash의 debounce를 사용하였는데, 하나의 기능을 이용하기 위해 lodash를 통으로 import 해오는 것을 보고 굳이 왜 이렇게 했나 하는 의문이 들었다. 그래서 Tree shaking에 대해 알고 있는지 물어보고 싶었다.")]),t._v(" 는 이야기를 들었다. 그리고 찾아봤음!")]),t._v(" "),a("p",[t._v("찾아보니 아예 웹팩 공식문서에 트리 쉐이킹에 대한 항목이 있더라. 상세한 내용은 일단 생략하고, 해당 문서가 Tree shaking을 어떻게 정의하는지 살펴보았다."),a("br"),t._v(" "),a("a",{attrs:{href:"https://webpack.kr/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹팩 공식 문서 - Tree Shaking"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Tree shaking은 사용되지 않는 코드를 제거하기 위해 JavaScript 컨텍스트에서 일반적으로 사용되는 용어입니다.")])]),t._v(" "),a("p",[t._v("JavaScript에서는 import를 이용해 유틸리티를 가져오게 되는데, 이 때 필요한 만큼의 모듈간 의존성만 가질 수 있도록 특정 패키지의 전체 모듈을 import 하기보다는 필요한 일부 유틸만 가져오는 편이 좋다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모든 배열 유틸리티들을 가져온다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" arrayUtils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array-utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 유틸의 일부만 가져온다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" unique"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" implode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" explode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array-utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비교예시 출처 - Toast UI 블로그")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("ref")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ui.toast.com/weekly-pick/ko_20180716",target:"_blank",rel:"noopener noreferrer"}},[t._v("트리 쉐이킹으로 자바스크립트 페이로드 줄이기 - TOAST UI"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"next-image-사이즈-조정-관련"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-image-사이즈-조정-관련"}},[t._v("#")]),t._v(" Next/Image 사이즈 조정 관련")]),t._v(" "),a("p",[t._v("Next/Image 기능을 사용해 Next.js에 이미지를 넣을 때, 가로 세로 사이즈에 고정값을 주지 않고 일정 비율로 조정되어 들어가도록 하기가 까다롭다. 반응형 작업을 하려면 필수적인 기능인데도..!")]),t._v(" "),a("p",[t._v("이미지가 실제 브라우저에 어떻게 렌더링되어 나타나는지 확인하고, 그 안에 있는 span 태그와 img 태그에 다음과 같은 속성을 적용해 해결했다.")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .parent 요소 안에 Image라는 클래스를 가진 Next/Image를 넣은 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(" > span ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unset "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".image ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" contain "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://kir93.tistory.com/entry/NextJS-Image-%ED%83%9C%EA%B7%B8-height-auto%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("이미지를 사용하며 사이즈 조정하는 방법"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"next-link의-prefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-link의-prefetch"}},[t._v("#")]),t._v(" Next/link의 prefetch")]),t._v(" "),a("h3",{attrs:{id:"데이터-통신시-useeffect를-사용하는-경우의-문제점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-통신시-useeffect를-사용하는-경우의-문제점"}},[t._v("#")]),t._v(" 데이터 통신시 useEffect를 사용하는 경우의 문제점")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://articles.wesionary.team/why-useeffect-is-a-bad-place-to-make-api-calls-98a606735c1c",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고 Article"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"input-태그의-valueasnumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-태그의-valueasnumber"}},[t._v("#")]),t._v(" input 태그의 valueAsNumber")]),t._v(" "),a("p",[t._v("html의 input태그 타입을")]),t._v(" "),a("h3",{attrs:{id:"추상화-은닉화"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추상화-은닉화"}},[t._v("#")]),t._v(" 추상화, 은닉화")]),t._v(" "),a("p",[t._v("소프트웨어 개발에 있어서 추상화, 은닉화란 대체 무엇인가?")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("껄껄")]),t._v(" "),a("p",[t._v("채용 과제 하느라 자세히 적지는 못하고 키워드만 남겨놨던 속성들 다 모아보니 한바가지..\n내일 수정하며 내용 채워넣을 예정..")])])])}),[],!1,null,null,null);a.default=r.exports}}]);