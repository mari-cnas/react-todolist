import { memo, useState } from 'react'
import * as React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import { Paper } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import EditDialog from 'components/EditDialog/EditDialog'

type Todo = {
  text: string
  id: number
}

interface IToDoItemProps {
  toDo: Todo
  deleteTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
}

const ToDoItem: React.FC<IToDoItemProps> = ({ toDo, deleteTodo, editTodo }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const dialogHandler = (): void => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <EditDialog
        editTodo={editTodo}
        open={openDialog}
        dialogHandler={dialogHandler}
        todo={toDo}
      />
      <Paper style={{ padding: '0.5em 0em' }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTodo(toDo.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText
              primary={toDo.text}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  )
}
export default memo(ToDoItem)
