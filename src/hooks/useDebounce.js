import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
      setLoading(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);

  return { debounceValue, loading };
}
