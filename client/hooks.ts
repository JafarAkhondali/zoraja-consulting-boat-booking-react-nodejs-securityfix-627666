
//
//  hooks.ts
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import { useEffect, useRef } from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from './reducers'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
