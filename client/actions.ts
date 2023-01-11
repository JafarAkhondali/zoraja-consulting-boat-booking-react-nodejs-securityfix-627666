
//
//  actions.ts
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import { Boat } from './boats-reducer'

export const BOATS_SEARCH_BEGIN = 'BOATS_SEARCH_BEGIN'
export const BOATS_SEARCH_ERROR = 'BOATS_SEARCH_ERROR'
export const BOATS_SEARCH = 'BOATS_SEARCH'

export type BoatsActions = BoatsSearchBegin | BoatsSearchError | BoatsSearch

export interface BoatsSearchBegin {
  type: typeof BOATS_SEARCH_BEGIN,
  payload: void,
}

export interface BoatsSearchError {
  type: typeof BOATS_SEARCH_ERROR,
  payload: Error,
}

export interface BoatsSearch {
  type: typeof BOATS_SEARCH,
  payload: Boat[],
}
