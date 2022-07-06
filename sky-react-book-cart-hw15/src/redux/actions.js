import { BOOK_LOAD } from './types'
import axios from 'axios'

export function booksLoad() {
  return (dispatch) => {
    axios
      .get('https://api.jsonbin.io/b/62c03e4d402a5b3802478763')
      .then((response) => {
        dispatch({
          type: BOOK_LOAD,
          data: response.data,
        })
      })
      .catch((response) => {
        return Promise.reject(response)
      })
  }
}