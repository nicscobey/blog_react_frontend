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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login({open, setOpen, handleClose, username, password, login, user, handleUser}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);



  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style} id="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In
          </Typography>
          <form className="flex-column"> 
              <TextField value={user.username} name="username" onChange={handleUser}className="full-width margin-ten white-bg" size="small" placeholder="Username" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}/>
              <TextField value={user.password} onChange={handleUser} name="password" className="full-width margin-ten white-bg" size="small" placeholder="Password" type="password" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}/>
          </form>
          <br />
          <div className="flex-center">
            <div className="blue-btn horizontal-margin" onClick={login}>Log In</div>
            <div className="empty-btn horizontal-margin" onClick={handleClose}>Cancel</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

// const Login = () => {
//     return (
//         <div>
//             <h1>Login</h1>
//         </div>
//     )
// }

// export default Login