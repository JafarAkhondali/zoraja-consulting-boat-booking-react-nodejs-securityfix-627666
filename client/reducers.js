
//
//  reducers.js
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

import { combineReducers } from 'redux'
import {
  BOATS_SEARCH_BEGIN,
  BOATS_SEARCH_ERROR,
  BOATS_SEARCH
} from './actions'

const initialState = {
  boats: {
    list: [],
    isRequesting: false,
    error: null
  }
}

function boats(state, action) {
  switch (action.type) {
    case BOATS_SEARCH_BEGIN:
      return {
        ...state,
        isRequesting: true,
        error: null
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

export default function rootReducer(state = initialState, action) {
  return {
    boats: boats(state.boats, action)
  }
}
