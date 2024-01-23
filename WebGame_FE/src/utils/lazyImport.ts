/*
코드 스플리팅

1. 큰 규모의 애플리케이션: 애플리케이션의 규모가 크다면, 모든 코드를 한 번에 로드하는 것은 비효율적일 수 있습니다. 코드 스플리팅을 사용하면 애플리케이션의 초기 로딩 시간을 줄일 수 있습니다.
2. 사용자 상호 작용에 따른 렌더링: 사용자의 특정 행동(예: 버튼 클릭)에 의해 표시되는 컴포넌트(예: 모달, 팝업 등)는 처음에 로드할 필요가 없습니다. 이런 컴포넌트는 필요할 때만 로드하도록 코드를 분리하는 것이 좋습니다.
3. 라우팅: 사용자가 특정 라우트에 방문할 때만 필요한 코드를 로드하도록 분리할 수 있습니다. 예를 들어, React Router와 React.lazy를 함께 사용하여 라우트별로 코드를 분리할 수 있습니다.

그러나 불필요한 코드 스플리팅은 많은 HTTP 요청이 필요로 하기 때문에 적절하게 판단해야 함.
*/

import * as React from "react";

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598

/**
 * Usage
 * const { Home } = lazyImport(() => import("./Home"), "Home");
 */
export function lazyImport<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  });
}
