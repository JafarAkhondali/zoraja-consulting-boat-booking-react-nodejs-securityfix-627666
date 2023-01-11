
//
//  boats-reducer.ts
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import { AnyAction, combineReducers } from 'redux'
import {
  BOATS_SEARCH_BEGIN,
  BOATS_SEARCH_ERROR,
  BOATS_SEARCH,
  BoatsActions
} from './actions'

export interface Boat {
  name: string
  type: string
  length: number
  price: number
}

export interface BoatsState {
  list: Boat[]
  isRequesting: boolean
  error?: Error
}

const initialState: BoatsState = {
  list: [],
  isRequesting: false,
  error: undefined
}

export default function boats(state = initialState, action: BoatsActions): BoatsState {
  switch (action.type) {
    case BOATS_SEARCH_BEGIN:
      return {
        ...state,
        isRequesting: true,
        error: undefined
      }
    case BOATS_SEARCH_ERROR:
      return {
        ...state,
        isRequesting: false,
        error: action.payload
      }
    case BOATS_SEARCH:
      return {
        ...state,
        isRequesting: false,
        list: action.payload
      }
    default:
      return state
  }
}
