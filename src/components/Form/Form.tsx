/* eslint-disable no-shadow */
import { memo, useState } from 'react'

import { TextField, Button, Paper } from '@mui/material'

// type Todo = {
//   text: string
//   id: number
// }

interface IFormProps {
  children?: React.ReactNode
  addTodo: (todoObj: { text: string; id: number }) => void
}

const Form: React.FC<IFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>('')
  const [id, setId] = useState<number>(0)

  const handleSubmit = (text: string): void => {
    const todoObj = { text, id }
    setId(id + 1)
    addTodo(todoObj)
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
        <Button variant="text" onClick={() => handleSubmit(text)}>
          Add
        </Button>
      </div>
    </Paper>
  )
}
export default memo(Form)
