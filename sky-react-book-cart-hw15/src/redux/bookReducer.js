import { BOOK_LOAD } from './types'

const initialState = {
  comments: [],
}

export const booksReducer = (state = initialState, action) => {
  console.log('book  reducer>', action)

  switch (action.type) {
    case BOOK_LOAD:
      return {
        ...state,
        books: action.data,
      }
    default:
      return state
  }
}