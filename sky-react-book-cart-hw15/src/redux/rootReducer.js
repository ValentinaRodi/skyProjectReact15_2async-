import { combineReducers } from 'redux'
import { booksReducer } from './bookReducer'

export const rootReducer = combineReducers({
  booksReducer,
})