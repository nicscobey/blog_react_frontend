import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Signup({open, setOpen, handleClose, newUser, message}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  const [user, setUser] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: ""
  })

  const handleSignup = () => {
    handleClose()
    newUser({email: user.email, username: user.username, first_name: user.first_name, last_name: user.last_name, password: user.password})
  }

  const handleChange = (event) => {
    const myUser = {...user}
    myUser[event.target.name] = event.target.value
    setUser(myUser)
    console.log(myUser)
  }

  const [showPaswordTips, setShowPasswordTips] = useState(false)
  const [showPaswordConfTips, setShowPasswordConfTips] = useState(false)


  const focusPassword = () => {
    // console.log('focus')
    setShowPasswordTips(true)
  }

  const blurPassword = () => {
    // console.log('leave')
    setShowPasswordTips(false)
  }

  const focusPasswordConfirmation = () => {
    // console.log('focus')
    setShowPasswordConfTips(true)
  }

  const blurPasswordConfirmation = () => {
    // console.log('leave')
    setShowPasswordConfTips(false)
  }

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
            {message}
          </Typography>
          <form className="flex-column"> 
            <TextField value={user.email} name="email" onChange={handleChange} className="full-width margin-ten white-bg" size="small" placeholder="Email" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <EmailIcon />
                </InputAdornment>
            ),
            }}/>
            <TextField value={user.username} name="username" onChange={handleChange} className="full-width margin-ten white-bg" size="small" placeholder="Username" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            ),
            }}/>
            <TextField value={user.first_name} name="first_name" onChange={handleChange} className="full-width margin-ten white-bg" size="small" placeholder="First Name" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            ),
            }}/>
            <TextField value={user.last_name} name="last_name" onChange={handleChange} className="full-width margin-ten white-bg" size="small" placeholder="Last Name" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            ),
            }}/>
            <TextField onFocus={focusPassword} onBlur={blurPassword} value={user.password} name="password" onChange={handleChange} className="full-width margin-ten white-bg" size="small" placeholder="Password" type="password" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <LockIcon />
                </InputAdornment>
            ),
            }}/>
            {
              showPaswordTips ? 
              <div className="flex-left gray-bg"><b>Passwords must have:</b>
                  <div className="flex-bottom">&nbsp;&nbsp;{user.password.length > 5 ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}&nbsp;6 or more characters</div>
                  <div className="flex-bottom">&nbsp;&nbsp;{user.password.match(/\d+/g) ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}&nbsp;At least 1 number</div>
                  <div className="flex-bottom">&nbsp;&nbsp;{user.password.toUpperCase() != user.password && user.password.toLowerCase() != user.password ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}&nbsp;Uppercase and lowercase letters</div>
              </div> 
            : null
            } 
            <TextField onFocus={focusPasswordConfirmation} onBlur={blurPasswordConfirmation} value={user.confirm_password} name="confirm_password" onChange={handleChange} className="full-width margin-ten white-bg" size="small" type="password" placeholder="Confirm Password" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <LockIcon />
                </InputAdornment>
            ),
            }}/>
            {
              showPaswordConfTips ? 
              <div className="flex-left gray-bg">
                {user.password === user.confirm_password ? "Passwords match!" : "Passwords must match."}
              </div> 
            : null
            } 
          </form>
          <br />
          <div className="flex-center">
            <div className={`${user.password.length > 5 && user.password.match(/\d+/g) && user.password.toUpperCase() != user.password && user.password.toLowerCase() != user.password && user.password === user.confirm_password ? "blue-btn" : "disabled-btn"} horizontal-margin`} onClick={user.password.length > 5 && user.password.match(/\d+/g) && user.password.toUpperCase() != user.password && user.password.toLowerCase() != user.password && user.password === user.confirm_password ? handleSignup : null}>Sign Up</div>
            <div className="empty-btn horizontal-margin" onClick={handleClose}>Cancel</div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}