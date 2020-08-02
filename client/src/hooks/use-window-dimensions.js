import { useState, useEffect, useCallback, useRef } from 'react'

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  const win = useRef(null)
  useEffect(() => {
    // noinspection JSValidateTypes
    win.current = window
    setWindowDimensions({
      width: win.current.innerWidth,
      height: win.current.innerHeight,
    })
  }, [])

  const updateWindowDimensions = useCallback(
    () =>
      setWindowDimensions({
        width: win.current.innerWidth,
        height: win.current.innerHeight,
      }),
    [setWindowDimensions],
  )

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [updateWindowDimensions])

  return windowDimensions
}

export default useWindowDimensions
