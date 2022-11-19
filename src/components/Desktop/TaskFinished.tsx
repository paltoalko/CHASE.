import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface TaskFinished {
  title: string;
  id: number;
  handleClose: () => void;
  deleteTask: (id: number) => void;
  open: boolean;
}

const TaskFinished: React.FC<TaskFinished> = ({
  title,
  id,
  handleClose,
  deleteTask,
  open,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color="secondary">
        {title} is finished.
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you want to proceed with task, please add more time. Otherwise do
          you wish to delete it?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            deleteTask(id);
            handleClose();
          }}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
        <Button
          onClick={() => handleClose()}
          autoFocus
          color="primary"
          variant="contained"
        >
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFinished;
