import { MutableRefObject, useEffect } from "react";

type Props = {
  elementRef: MutableRefObject<any>;
  handler: () => void;
  attached: boolean;
};

export function useOutsideClick({
  elementRef,
  handler,
  attached = true,
}: Props) {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: any) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, handler, attached]);
}
