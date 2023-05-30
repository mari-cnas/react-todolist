/* eslint-disable no-shadow */
import { memo, ReactElement, useState } from 'react'

import { TextField, Button, Paper } from '@mui/material'

type Todo = {
  text: string
  id: number
}

interface IFormProps {
  children?: React.ReactNode
  addTodo: (todo: Todo) => void
}

const Form: React.FC<IFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const todoCreate = (text: string): void => {
    const todoObj = { text, id }
    setId(id + 1)
    addTodo(todoObj)
    document.getElementById('outlined-basic').value = null
  }

  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  )
}
export default memo(Form)
