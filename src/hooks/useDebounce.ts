import { useState, useEffect } from 'react'
const useDebounce = <D>(value: D, delay = 200) => {
  const [debounceVlaue, setDebounceVlaue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVlaue(value)
    }, delay)
    // return 上一次effect处理完后执行回调
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounceVlaue
}

export default useDebounce
