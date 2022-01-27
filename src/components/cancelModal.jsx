import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useRef } from 'react';
import {useHistory} from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Confirm({open, setOpen, handleClose, title, deletePost, message}) {

  const history = useHistory()

  const handleCancel = () => {
    history.push('/my')
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
          <br />
          <div className="flex-center">
            <div className="blue-btn horizontal-margin" onClick={handleCancel}>Yes, cancel</div>
            <div className="empty-btn horizontal-margin" onClick={handleClose}>No, keep writing</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}