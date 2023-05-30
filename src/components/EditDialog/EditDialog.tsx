import { memo, ReactElement, useState } from 'react'
import * as React from 'react'

import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

interface IEditDialogProps {
  open: boolean
  dialogHandler: (dialogHandler: boolean) => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const EditDialog: React.FC<IEditDialogProps> = ({
  open,
  dialogHandler,
  todo,
  editTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.text)

  const textHandler = () => {
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
        <DialogContentText id="alert-dialog-slide-description">
          <TextField
            fullWidth
            defaultValue={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
export default memo(EditDialog)
