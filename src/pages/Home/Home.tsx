/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useState } from 'react'

import { Container, List } from '@mui/material'

import Form from 'components/Form/Form'
import ToDoItem from 'components/ToDoItem/ToDoItem'

type Todo = {
  text: string
  id: number
}

interface IHomeProps {
  addTodo: (todoObj: { text: string; id: number }) => void
  editTodo: (id: number, text: string) => void
}

const Home: React.FC<IHomeProps> = () => {
  const [toDos, setToDos] = useState<Todo[]>([])

  const addTodo = (toDo: Todo): void => {
    setToDos([...toDos, toDo])
  }

  const deleteTodo = (id: number): void => {
    const filtered = toDos.filter((todo) => todo.id !== id)
    setToDos(filtered)
  }

  const editTodo = (id: number, editedText: string): void => {
    const todosArray = [...toDos]
    // eslint-disable-next-line no-restricted-syntax
    for (const i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText
      }
    }
    setToDos(todosArray)
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: '1em' }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: '1em' }}>
        {toDos.map((toDo) => (
          <div style={{ marginTop: '1em' }} key={toDo.id}>
            <ToDoItem editTodo={editTodo} toDo={toDo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  )
}

export default memo(Home)
