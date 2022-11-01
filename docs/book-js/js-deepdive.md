# 모던 자바스크립트 Deep dive

:::tip ref  
**모던 자바스크립트 Deep dive (이웅모 저 / 위키북스)**  
상기 서적을 읽은 뒤 나름의 방식대로 요약 정리한 내용입니다.  
:::

## 1장. 프로그래밍

프로그래밍이란 문제(=요구사항)를 해결하기 위해 컴퓨터에게 프로그램의 실행을 요구하는 일종의 커뮤니케이션이다. 컴퓨터가 사고하는 방식은 인간과 다르게 직관이나 직감이 존재하지 않기 때문에 우리 머릿속에 있는 의도를 배제하고 정확하고 상세하게 요구사항을 설명할 줄 알아야 한다.  
이러한 사고 과정에서 필요한 것이 비로 `Computational thinking(컴퓨팅 사고)`이다.

이 단계에서 분명히 알고 넘어가야 하는 것은 **컴퓨터와 사람의 사고, 인지의 방식이 다르다는 것이다.** 따라서 프로그래밍을 하기 위해서는 컴퓨터의 관점에서 문제를 사고해야 한다. 여기에는 논리적 수학적 사고가 필요하며, 해결 과제를 작은 단위로 분해하고 패턴화해서 추출해야하고, 프로그래밍 내에서 사용될 모든 개념은 평가 가능하도록 정의되어야 한다.

- **`기계어(Machine code)`** : 컴퓨터가 이해할 수 있는 언어.
  - 기계어는 비트 단위로 기술되어있어 사람이 직접 작성하여 명령을 전달하기 힘들다.
- **`프로그래밍 언어(Programming language)`** : 사람이 이해할 수 있는 약속된 구문으로 구성된 언어.
  - 프로그래밍 언어로 명령을 작성한 후, 일종의 번역기에 해당하는 컴파일러(Compiler)나 인터프리터(Interpreter)를 이용해 기계어로 변환할 수 있다.

프로그래밍이란 이러한 프로그래밍 언어를 사용해 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션이다. 이 프로그래밍 언어는 `구문(syntax)`과 `의미(semantics)`의 조합으로 표현된다.

```text
언어의 의미는 문맥에 있는 것이지 문법에 있는 것이 아니다. -노엄 촘스키
```

문법에 부합하는 것은 물론이고 **수행하고자 하는 바를 정확한 의미로 수행하는 프로그래밍 언어가 비로소 의미가 있다.** 물론 이러한 문제 해결을 적절하게 수행하기 위해서는 문법의 이해가 필수적이다. 적절한 자료구조와 함수의 흐름을 제어해 요구사항의 집합을 해결하는 것이 프로그래밍의 목적이라고 볼 수 있다.

## 4장. 변수

### 변수란 무엇인가?

애플리케이션이 다루는 데이터는 컴퓨터에 저장되고 연산에 이용된다. 컴퓨터는 **CPU를 이용하여 연산을 수행**하고, **메모리를 사용해 데이터를 기억(=저장)** 한다.  
이 때, 데이터를 저장할 수 있는 메모리는 데이터를 저장할 수 있는 메모리 셀의 집합체이다. 메모리 셀 하나는 1바이트의 크기를 가지고 있으며 고유의 메모리 주소를 가지고 있다.  
하지만 자바스크립트와 같은 언매니지드 언어는 **안전상의 이유로 개발자가 메모리에 직접 접근하는 것을 허용하지 않으며,** 따라서 이미 메모리 셀을 차지하고 있는 데이터를 다시 끌어 와 사용하기 위해서는 **해당 공간을 식별하기 위한 별도의 이름** 을 붙여줘야 한다. 이러한 식별자를 `변수`라고 한다.

간단하게 요약해보자면 다음과 같다.

- **`변수`**: 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름
- **`식별자`**: 어떠한 값을 구별해서 식별할 수 있는 고유한 이름으로, 변수 이름은 식별자의 일종이다.

변수 뿐 아니라 함수, 클래스 등의 이름은 모두 식별자에 해당한다.

### 변수의 선언과 할당

변수를 사용하기 위해서는 **`선언(declaration)`** 과 **`할당(assignment)`** 이라는 두 단계를 거쳐야 한다.

- **변수 선언**
  - 변수를 생성하는 것
  - 값을 저장하기 위한 메모리 공간을 확보하고, 변수 이름과 확보된 메모리 공간의 주소를 연결하는 것
  - 변수를 선언하면 확보한 메모리 공간의 값을 초기화하여 undefined로 만든다.
  - 변수 선언을 위해 var, let, const 키워드를 사용할 수 있다.
- **변수 할당**
  - 해당 변수에 값을 할당한다.
  - 할당 연산자 = 를 이용하여 변수에 값을 할당할 수 있다.

이 때 주의할 점이 있는데, 변수의 선언과 할당이 하나의 문으로 이루어져 있어도 자바스크립트는 이것을 선언과 할당으로 분리하여 각각 실행한다는 것이다. 그리고 변수의 선언과 할당은 서로 다른 시점에 실행된다.  
`변수의 선언은 런타임 이전 소스코드의 평가 단계`에서 먼저 이루어진다. 그리고 `실제 소스코드가 순차적으로 실행되는 시점(=런타임)에 할당`이 이루어진다.  
변수의 선언이 런타임 이전에 끌어올려져 먼저 실행되는 것을 **`호이스팅`** 이라 하며, 호이스팅은 자바스크립트가 가지고 있는 고유한 특징 중 하나이다.

### 값의 재할당과 가비지 콜렉터

변수는 재할당을 이용해 값을 변경할 수 있다.  
이 때 값을 변경할 수 없는, 즉 고정된 값을 가지는 식별자는 변수가 아니라 상수(constant)라고 한다.

```js
var score;
score = 80;
score = 90;
```

위와 같은 자바스크립트 코드를 실행하면, score라는 변수에 90이라는 값이 재할당되며 이전에 할당되었던 초기값 undefined와 80은 더 이상 아무런 식별자와도 연결되어있지 않는 값이 된다. 즉, **아무도 사용하고 있지 않은 상태** 가 되는 것이다. 이러한 불필요한 값들은 `가비지 콜렉터(Garbage collector)`에 의해 **메모리에서 자동 해제** 된다.

::: tip 가비지 콜렉터란?  
애플리케이션이 메모리 공간을 주기적으로 검사하여 더이상 사용되지 않는 메모리를 해제하는 기능이다. 여기서 더이상 사용되지 않는 메모리란 어떤 식별자도 참조하지 않는 메모리 공간을 의미한다. 자바스크립트는 가비지 콜렉터를 내장하고 있으며, 가비지 콜렉터를 통해 메모리 누수(Memory leak)를 방지한다.
:::

::: tip 매니지드 언어와 언매니지드 언어  
프로그래밍 언어는 메모리 관리 방식에 따라 매니지드 언어와 언매니지드 언어로 분류할 수 있다.

📌 **언매니지드 언어**: 개발자가 명시적으로 메모리를 할당하고 해제하기 위해 저수준 메모리 제어 기능을 이용할 수 있는 언어. 개발자의 역량에 따라 최적의 성능을 확보할 수 있지만, 반대로 개발자의 역량에 따라 치명적인 오류를 생산할 가능성도 있다. 대표적인 예시는 C언어.

📌 **매니지드 언어**: 메모리의 할당 및 해제를 위한 메모리 관리 기능을 언어 차원에서 담당하는 언어. 개발자의 직접적인 메모리 제어를 허용하지 않는다. 매니지드 언어는 개발자의 역량에 의존하는 부분이 상대적으로 작아져 어느 정도 일정한 생산성을 확보할 수 있다는 장점이 있다, 하지만 성능 면에서 어느 정도의 손실은 감수할 수 밖에 없음.
:::

### 식별자 네이밍 규칙

자바스크립트의 식별자 네이밍에는 다음과 같은 규칙이 있다.

- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러기호($)를 포함할 수 있다.
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어(\_), 달러 기호($)로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
- 예약어는 식별자로 사용할 수 없다.
- 자바스크립트의 예약어는 다음과 같아.

```text
await, break, case, catch, class, const ,continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if, implements, import, in, instanceof, interface, let, new, null, package, private, protected, public, return, super, static, switch, this, throw, true, try, typeof, var, void, while, with, yield
```

식별자 이름을 정할 때에는 일정한 네이밍 컨벤션을 가지고 명명하는 것이 좋다. 보편적으로 사용되는 네이밍 컨벤션에는 다음과 같은 것들이 있다.

```js
// 카멜 케이스 (camelCase)
let firstName;

// 스네이크 케이스 (snake_case)
let first_name;

// 파스칼 케이스 (PascalCase)
let FirstName;

// 헝가리안 케이스 (typeHungarianCase)
let strFirstName; // type + identifier
let $elem = document.getElementById("myId"); // DOM 노드
let observable$ = fromEvent(document, "click"); // RxJS 옵저버블
```

일관성을 유지한다면 어떤 네이밍 컨벤션을 사용해도 상관없으나, 자바스크립트에서는 일반적으로 변수나 함수의 이름에는 카멜케이스를, 생성자 함수나 클래스의 이름에는 파스칼 케이스를 사용한다.