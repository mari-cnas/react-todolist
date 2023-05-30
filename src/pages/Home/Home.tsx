/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react'

import { Container, List } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Form from 'components/Form/Form'
import ToDoItem from 'components/ToDoItem/ToDoItem'

import useTitle from 'hooks/useTitle'

type Todo = {
  text: string
  id: number
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [toDos, setToDos] = useState([])

  const addTodo = (toDo: Todo): void => {
    setToDos([...toDos, toDo])
  }

  const deleteTodo = (id: number): void => {
    const filtered = toDos.filter((todo) => todo.id != id)
    setToDos(filtered)
  }

  const editTodo = (id: number, editedText): void => {
    const todosArray = [...toDos]
    for (const i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText
      }
    }
  }

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Container maxWidth="xs" style={{ marginTop: '1em' }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: '1em' }}>
        {toDos.map((toDo) => (
          <div style={{ marginTop: '1em' }}>
            <ToDoItem editTodo={editTodo} toDo={toDo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  )
}

export default memo(Home)
