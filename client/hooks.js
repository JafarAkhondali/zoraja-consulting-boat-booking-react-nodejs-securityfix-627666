
//
//  hooks.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import { useEffect, useRef } from 'react'

/**
 * A hook to access the value during previous render of some variable inside a functional component.
 *
 * @example
 *
 * export const CounterComponent = () => {
 *   const [count, setCount] = useState(0)
 *   const prevCount = usePrevious(count)
 *   return <div>Now: {count}, before: {prevCount}</div>
 * }
 */
export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
