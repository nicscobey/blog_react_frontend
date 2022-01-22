import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useRef, useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';

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

export default function BannerModal({open, setOpen, handleClose, title, deletePost, post, setPost}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  const [url, setUrl] = useState("")

  const handleChange = (event) => {
    // const newUrl = {...url}
    // newUrl[event.target.name] = event.target.value
    // newPost.author = account.id
    // // setPost(newPost) 
    // console.log(newPost)
    console.log(url)
    console.log(event.target.value)
    setUrl(event.target.value)
  }


  const handleSave = () => {
    const newPost = {...post}
    newPost.banner = url
    setPost(newPost)
    handleClose()
  }

  const handleCancel = () => {
    setUrl("")
    // setPost(tempPost)
    handleClose()
  }


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style} id="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Paste the url to an image you wish to use as the banner photo...
          </Typography>
          <form className="flex-column"> 
              <TextField value={url} name="banner" onChange={handleChange}className="full-width margin-ten white-bg" size="small" placeholder="http://www.example.com" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ImageIcon />
            </InputAdornment>
          ),
        }}/>
          </form>
          <div className="flex-center">
            <div className="blue-btn horizontal-margin" onClick={handleSave}>Save</div>
            <div className="empty-btn horizontal-margin" onClick={handleCancel}>Cancel</div>
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