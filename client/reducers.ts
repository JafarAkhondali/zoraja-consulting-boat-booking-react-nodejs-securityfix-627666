
//
//  reducers.ts
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import { combineReducers } from 'redux';

import boats from './boats-reducer';

export const rootReducer = combineReducers({
  boats,
})

export type RootState = ReturnType<typeof rootReducer>
