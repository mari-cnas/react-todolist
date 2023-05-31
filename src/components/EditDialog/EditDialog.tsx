import { memo, useState } from 'react'
import * as React from 'react'

import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

type Todo = {
  text: string
  id: number
}

interface IEditDialogProps {
  open: boolean
  dialogHandler: () => void
  todo: Todo
  editTodo: (id: number, text: string) => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />
})

const EditDialog: React.FC<IEditDialogProps> = ({
  open,
  dialogHandler,
  todo,
  editTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.text)

  const textHandler = (): void => {
    editTodo(todo.id, editedText)
    dialogHandler()
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>Editando tarefa</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          defaultValue={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
export default memo(EditDialog)
