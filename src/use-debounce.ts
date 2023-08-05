import { useEffect, useState } from "react";

export function useDebounce(
  value: string | number,
  timeMS?: number,
): string | number | undefined {
  const [val, setVal] = useState<string | number>();
  const delay = timeMS || 500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVal(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);

  return val;
}
