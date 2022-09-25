(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{271:function(t,s,a){t.exports=a.p+"assets/img/220925.26fdac7d.png"},284:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2022년-9월-til"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022년-9월-til"}},[t._v("#")]),t._v(" 2022년 9월 TIL")]),t._v(" "),s("h2",{attrs:{id:"_2022-09-25"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022-09-25"}},[t._v("#")]),t._v(" 2022.09.25")]),t._v(" "),s("h3",{attrs:{id:"브라우저-렌더링-과정-with-critical-rendering-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-렌더링-과정-with-critical-rendering-path"}},[t._v("#")]),t._v(" 브라우저 렌더링 과정 (with Critical Rendering Path)")]),t._v(" "),s("p",[t._v("직관적으로는 이해하고 있으나 제대로 정리해본 적은 없는 그것.. 브라우저 렌더링 과정에 대해 알아보자. 웹 브라우저의 구조에 대해 살펴보고, 그 중에서도 웹서비스의 렌더링 퍼포먼스 향상에 큰 영향을 미치는 렌더링 엔진의 작동 방식과 CRA(Critical Rendering Path)에 대해서도 정리해보는 것으로.")]),t._v(" "),s("p",[t._v("먼저 웹 브라우저의 기본적인 구조를 정리해보면 다음과 같다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(271),alt:"220925"}})]),t._v(" "),s("ol",[s("li",[t._v("사용자 인터페이스\n"),s("ul",[s("li",[t._v("주소창, 새로고침/이전/다음 버튼 등 웹페이지 이외에 사용자가 접근할 수 있는 인터페이스 영역.")])])]),t._v(" "),s("li",[t._v("브라우저 엔진\n"),s("ul",[s("li",[t._v("사용자 인터페이스와 렌더링 엔진 사이의 동작을 제어한다. 두 가지를 연결해주는 브릿지 역할.")])])]),t._v(" "),s("li",[t._v("렌더링 엔진\n"),s("ul",[s("li",[t._v("브라우저의 핵심.")]),t._v(" "),s("li",[t._v("HTML과 CSS를 파싱(Parsing)해서 웹 페이지에 그려주는 엔진이다.")])])]),t._v(" "),s("li",[t._v("네트워크 (통신)\n"),s("ul",[s("li",[t._v("HTTP와 같은 각종 네트워크 요청에 사용된다.")])])]),t._v(" "),s("li",[t._v("JS 해석기 (인터프리터)\n"),s("ul",[s("li",[t._v("자바스크립트를 해석하고 실행하는 엔진. 많이 언급되는 V8엔진이 바로 이 JS 해석기에 해당한다.")])])]),t._v(" "),s("li",[t._v("UI 백엔드\n"),s("ul",[s("li",[t._v("기본 input, select 등 브라우저의 기본 위젯을 그려준다.")]),t._v(" "),s("li",[t._v("사용자 인터페이스와 상호 작용한다.")])])]),t._v(" "),s("li",[t._v("자료 저장소\n"),s("ul",[s("li",[t._v("localStorage, sessionStorage, cookie처럼 브라우저에 데이터를 임시 저장할 수 있는 저장공간 영역.")])])])]),t._v(" "),s("p",[t._v("이 때, 렌더링 엔진은 크게 다음과 같은 단계를 거쳐 화면을 그린다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("CRA 과정 요약")]),t._v(" "),s("p",[t._v("DOM Tree & CSSOM Tree 파싱 > 렌더 트리 생성 > Layout > Paint")])]),t._v(" "),s("ol",[s("li",[t._v("HTML을 파싱하여 DOM Tree를 그린다. (HTML의 DOM Tree가 맞음)")]),t._v(" "),s("li",[t._v("CSS와 스타일 요소를 파싱하여 CSSOM Tree를 그린다.")]),t._v(" "),s("li",[t._v("만들어진 DOM Tree와 CSSOM Tree를 합쳐 렌더 트리를 만든다.")]),t._v(" "),s("li",[t._v("Layout(Reflow) - 요소의 위치와 크기 등을 계산하여 브라우저에 배치한다.")]),t._v(" "),s("li",[t._v("Paint(Repaint) - 배치된 픽셀 정보를 이용하여 실제 화면에 요소를 그린다.\n위와 같은 과정을 Critical Rendering Path라고 부르며, 레이아웃과 페인트 단계를 얼마나 효율적으로 생략하느냐에 따라 웹서비스의 렌더링 효율이 달라지게 된다. (특히 애니메이션을 구현할 때 영향을 많이 미친다.)")])]),t._v(" "),s("p",[t._v("CSS 속성별로 수정시 Layout 이후의 과정을 모두 거쳐야하는 속성, Paint 이후의 과정만 거치는 속성, Layout과 Paint를 거칠 필요 없이 Composite만 수행해도 되는 속성이 정해져있다. tranform이 Composite만 발생하는 대표적인 속성인데, 그래서 애니메이션을 많이 넣어야 하는 웹페이지의 경우 transform을 우선적으로 사용하는 듯. (그렇게 배워서 그렇게 쓰고는 있었지만 이유는 CRA 공부하며 처음 알았다.)")]),t._v(" "),s("h3",{attrs:{id:"til-블로그-github-action-자동배포-성공"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#til-블로그-github-action-자동배포-성공"}},[t._v("#")]),t._v(" TIL 블로그 github action 자동배포 성공")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/TIL/2022/2022-08.html#_2022-08-20"}},[t._v("지난번에 실패했던")]),t._v(" github action을 이용한 자동 배포에 성공했다."),s("br"),t._v("\n어이없게도 github action 설정 yml 파일에 오타가 있어서 안되는 거였음.. 😂"),s("br"),t._v("\n이제는 main 브랜치에 소스코드를 push하면 자동으로 페이지 배포가 된다."),s("br"),t._v("\ndeploy 명령어는 혹시 또 쓸 일이 있을지 모르니 살려두었다.")],1),t._v(" "),s("h2",{attrs:{id:"_2022-09-14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022-09-14"}},[t._v("#")]),t._v(" 2022.09.14")]),t._v(" "),s("h3",{attrs:{id:"nodejs-연습"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-연습"}},[t._v("#")]),t._v(" nodejs 연습")]),t._v(" "),s("p",[t._v("코드캠프 백엔드 수업 커리큘럼을 참고하여 nodejs를 이용해서 간단한 함수나 템플릿 만드는 방법을 연습 중."),s("br"),t._v("\n실행하는 부분이 브라우저에서 nodejs로 바뀌었을 뿐인데도 굉장히 신기하다. javascript가 작동하는 원리는 동일한데도!")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("오늘의 기억할 점")]),s("br"),t._v("\nvercel 등으로 개발 환경을 세팅하지 않고 순수 node만으로 module 타입의 ES6 자바스크립트를 실행할 경우, import해오는 js파일에도 반드시 확장자명을 붙여줘야 한다. 그렇지 않을 경우 에러를 뱉음.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  checkValidationEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getWelcomeTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sendWelcomeTemplateToEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("이런 식으로 쓰면")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/90050960/190181398-5140a074-2482-4414-8c23-7b1ae7355665.png",alt:"error_screenshot"}})]),t._v(" "),s("p",[t._v("이렇게 에러를 뱉는다."),s("br"),t._v("\n귀찮아도 꼭 "),s("code",[t._v(".js")]),t._v(" 붙여줘야 함..😇")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  checkValidationEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getWelcomeTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sendWelcomeTemplateToEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./email.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("백엔드 공부를 갑작스레 시작한 이유")]),s("br"),t._v("\n간단한 api는 스스로 개발해서 개인 프로젝트 배포까지 진행하고 싶기 때문."),s("br"),t._v("\nNext.js에서 제공하는 api 기능을 이용해도 좋지만, 기왕 공부하는 거 학습을 위해서라도 백엔드에 대해 좀 더 알아보고 싶었다. 새로운 언어를 배운다면 시간이 오래 걸리겠지만 javascript는 원래 사용하고 있던 언어이기도 하고."),s("br"),t._v("\n간단한 프로덕트는 나 혼자서 처음부터 끝까지 개발할 수 있는 개발자가 되고 싶다. 💪")])])]),t._v(" "),s("h2",{attrs:{id:"_2022-09-12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022-09-12"}},[t._v("#")]),t._v(" 2022.09.12")]),t._v(" "),s("h3",{attrs:{id:"typescript-타입-가드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-타입-가드"}},[t._v("#")]),t._v(" Typescript - 타입 가드")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("ref")]),t._v(" "),s("p",[t._v("원티트 프리온보딩 챌린지 9월 - Typescript의 강의 내용을 일부 요약 정리 해놓은 것")])]),t._v(" "),s("ol",[s("li",[t._v("타입 가드란?"),s("br"),t._v("\n타입스크립트가 런타임 환경에서의 모든 오류를 방지해 주는 것은 아니다."),s("br"),t._v("\n런타임 환경에서 실행했을때에만 확인할 수 있는 요소 정보의 경우 (dom 조작 등) type guard를 통해 미연에 방지하는 것이 좋다.")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("타입 가드의 예시")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $modalClose "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".modalCloseButton"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 최소한의 타입 가드")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$modalClose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $modalClose"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("타입 좁히기란? (Type narrowing)"),s("br"),t._v("\n예시를 살펴보자.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HTMLElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타입추론의 효과가 거의 없는 타입")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("위와 같은 스크립트의 경우 실질적으로 any script나 다를바 없다.\n연습을 통해 타입 추론을 예측하고 타입을 좁혀나가는 연습을 해야 한다.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HTMLElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HTMLDivElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("컴파일 vs 런타임"),s("br"),t._v("\nprop-types vs typescript → 무슨 차이가 있을까?"),s("br"),t._v("\n바로 런타임시 타입 체크 vs 컴파일시 타입 체크의 차이."),s("br"),t._v("\ntypescript는 컴파일시 js로 변경되기 때문에 런타임시 발생할 수 있는 타입으로 인한 오류는 checking 하지 못하는 문제가 있다.")]),t._v(" "),s("p",[t._v("그렇다면 이러한 문제를 방지하기 위해서는 반드시 props-types 등의 추가 도구를 사용해야 하는가?"),s("br"),t._v(" "),s("strong",[t._v("‼️‼️‼️ 아니다!")]),s("br"),t._v("\n타입 가드를 잘 사용하면 런타임시 발생할 수 있는 타입 에러도 상당부분 방지할 수 있다.")]),t._v(" "),s("p",[t._v("unknown을 활용한 예시를 통해 확인해보자.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타입가드 예시 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (typeof num === 'string') {")]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타입가드 예시 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (num as string).trim();")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 스크립트 내부에 인라인 타입가드를 넣는 것도 가능 (typdof, instanceof 등 사용)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function func(x: unknown) {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val1: any = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val2: unknown = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val3: string = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val4: boolean = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val5: number = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val6: string[] = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   let val7: {} = x;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),s("p",[t._v("unknown은 any와 비슷하게 사용할 수 있지만 에러를 던진다."),s("br"),t._v("\n즉, 타입 가드를 유도한다.")])])]),t._v(" "),s("h2",{attrs:{id:"_2022-09-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022-09-11"}},[t._v("#")]),t._v(" 2022.09.11")]),t._v(" "),s("h3",{attrs:{id:"netflix-reviews-프로젝트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netflix-reviews-프로젝트"}},[t._v("#")]),t._v(" Netflix-reviews 프로젝트")]),t._v(" "),s("p",[t._v("댓글 CRD를 완료하고 리뷰 본문과 댓글 Update 작업을 시작했다."),s("br"),t._v("\n그런데 본문 Update 코드를 추가하려고 보니 ReviewsWrite 페이지 스크립트가 많이 길어졌길래 가능한 코드들을 custom-hooks로 분리해서 리팩토링 하는 작업을 우선 시작했다.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onChangeFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ChangeEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HTMLInputElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setImages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleFileBtn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSubmitWrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FieldValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reviewsSubmit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSubmitEdit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FieldValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originImages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchBoard"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("images "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reviewsEdit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originImages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("깔끔~"),s("br"),t._v("\n작성 / 수정 / 이미지 업로드처럼 볼륨이 큰 스크립트들을 custom-hooks로 분리했고, 동일한 쿼리와 기능을 요청하는 경우에는 해당 커스텀훅을 가져다 쓸 수 있도록 인자 설정도 해두었다.")]),t._v(" "),s("p",[t._v("앞으로 할 일")]),t._v(" "),s("ul",[s("li",[t._v("react-hook-form의 yupResolver schema가 수정/작성 페이지 여부에 따라 다르게 적용되도록 하기.")]),t._v(" "),s("li",[t._v("게시글 수정 후 상세페이지로 돌아왔을 때 ApolloCacheState가 변경되도록 하기\n"),s("ul",[s("li",[t._v("fetchPolicy를 변경할까 cache를 직접 수정할까 고민했는데, cache를 직접 수정하는 쪽이 더 효율적일 것이라고 판단했다.")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);