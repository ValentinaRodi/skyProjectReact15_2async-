import { useState } from 'react'
import MinMaxLazy from './MinMaxLazy'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { booksLoad } from '../redux/actions'
import { useSelector } from 'react-redux'

export default function BookCart() {
  const stub = useSelector((state) => {
    const { booksReducer } = state
    return booksReducer.books
  })

  const [books, setBooks] = useState([])
  const setQuantity = (id, quantity, total) => {
    setBooks(
      books.map((book) =>
        book.id !== id
          ? book
          : {
              ...book,
              quantity,
              total,
            }
      )
    )
  }
  const removeItem = (id) => {
    setBooks(books.filter((obj) => obj.id !== id))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(booksLoad())
  }, [dispatch])

  useEffect(() => {
    if(stub)setBooks(stub)
  }, [stub])

  return (
    <div className="some">
      <hr />
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMaxLazy
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity, total) =>
                    setQuantity(book.id, quantity, total)
                  }
                  total={book.price * book.quantity}
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeItem(book.id)}
                  className="removeButton"
                >
                  x
                </button>
              </td>
              <td>{book.quantity * book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>
          Total amount:
          {books.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
        </h3>
        <h3>
          Total quantity:
          {books.reduce((prev, curr) => prev + Number(curr.quantity), 0)}
        </h3>
      </div>
    </div>
  )
}