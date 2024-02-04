import { useLayoutEffect, useEffect, useState } from "react"

const useIsomorphicEffect = () => {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect
}

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0])
  useIsomorphicEffect()(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

export default useWindowSize
