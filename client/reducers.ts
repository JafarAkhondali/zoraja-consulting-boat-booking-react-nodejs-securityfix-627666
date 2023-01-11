
//
//  reducers.ts
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import { combineReducers } from 'redux';

import boats from './boats-reducer';

export const rootReducer = combineReducers({
  boats,
})

export type RootState = ReturnType<typeof rootReducer>
