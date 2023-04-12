# React \<StrictMode> (TBD)

::: tip 원문 Link   
리액트 공식 문서   
[https://react.dev/reference/react/StrictMode](https://react.dev/reference/react/StrictMode)
:::

## \<StrictMode>
\<StrictMode>는 개발을 진행하며 당신의 컴포넌트가 가지고 있는 common bug를 찾게 해줍니다.

```jsx
<StrictMode>
  <App />
</StrictMode>
```
---

## Reference 
### `<StrictMode>`   
Use StrictMode to enable additional development behaviors and warnings for the component tree inside:   
StrictMode를 사용하세요. 추가적인 개발 환경에서의 동작이나 컴포넌트 트리 내부에 대한 경고를 추가하기 위하여:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
See more examples below.   
추가 예시는 하단에서 볼 수 있습니다. (차후 링크 예정)

Strict Mode enables the following development-only behaviors:   
Strict Mode는 개발 환경에서만 발생하는 동작을 추적할 수 있게 합니다. :
- Your components will re-render an extra time to find bugs caused by impure rendering.
- 당신의 컴포넌트는 ..
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will be checked for usage of deprecated APIs.
Props 
StrictMode accepts no props.

Caveats 
There is no way to opt out of Strict Mode inside a tree wrapped in \<StrictMode\>. This gives you confidence that all components inside \<StrictMode\> are checked. If two teams working on a product disagree whether they find the checks valuable, they need to either reach consensus or move \<StrictMode\> down in the tree.