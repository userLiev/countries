import {
  createRef,
  RefObject, useCallback, useEffect,
} from 'react';

export function useClickOutside({ callback }: {
  callback?: () => void;
}): RefObject<HTMLDivElement> {
  const ref = createRef<HTMLDivElement>();

  const onClickOutside = useCallback((event) => {
    if (ref && !ref.current?.contains(event.target)) {
      if (callback) {
        callback();
      }
    }
  }, [callback, ref]);

  useEffect(() => {
    document.body.addEventListener('click', onClickOutside);
    return (): void => {
      document.body.removeEventListener('click', onClickOutside);
    };
  }, [onClickOutside]);

  return ref;
}
