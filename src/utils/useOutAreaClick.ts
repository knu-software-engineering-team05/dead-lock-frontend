import React from 'react';

// targetRef 외부를 클릭했을 때를 판단하여 onClick func를 실행하는 함수
function useOutAreaClick<RefElement extends HTMLElement = HTMLElement>(
  targetRef: React.RefObject<RefElement>,
  onClick: () => void
) {
  const handleExceptClick = React.useCallback(
    (e: Event) => {
      if (!targetRef || !targetRef?.current || !e.target) {
        return;
      }

      if (targetRef.current !== e.target && !targetRef.current.contains(e.target as HTMLElement)) {
        onClick();
      }
    },
    [onClick, targetRef]
  );

  React.useEffect(() => {
    const globalDocument = globalThis.document?.body;

    globalDocument?.addEventListener('click', handleExceptClick);
    return () => globalDocument?.removeEventListener('click', handleExceptClick);
  }, [handleExceptClick]);
}

export default useOutAreaClick;
