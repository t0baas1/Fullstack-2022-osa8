import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'


const Authors = (props) => {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')

  const [ editedAuthor ] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS}]
  })
  if (!props.show) {
    return null
  }
  const authors = props.authors

  const submit = async (event) => {
    event.preventDefault()
    console.log('edit author...')
    var yearInt = parseInt(year)
    editedAuthor({ variables: { name, yearInt }})

    setName('')
    setYear('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <select
          name='choose'
          value={name}
          onChange={({ target }) => setName(target.value)}>
            <option label='select...'></option>
            {authors.map(a=><option key={a.id}>{a.name}</option>)}
          </select>
        </div>
        <div>
          born
          <input
            value={year}
            onChange={({ target }) => setYear(target.value)}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default Authors
