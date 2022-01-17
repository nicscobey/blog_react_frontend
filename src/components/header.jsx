import Login from "./login"
import { useState } from "react";
import Signup from "./signup";

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openSignup, setOpenSignup] = useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);

    return (
        <div className="header">
            <a href="/"><h2 className="flex-center no-weight no-margin">App Name</h2></a>
            <div className="nav">
                <a href="/#top-posts" className="nav-link">Top Posts</a>
                <a href="/#all-articles" className="nav-link">All Posts</a>
                <h4 onClick={handleOpen} className="nav-link">Log In</h4>
                <h4 onClick={handleOpenSignup} className="nav-link">Sign Up</h4>
            </div>
            <Login open={open} handleClose={handleClose}/>
            <Signup open={openSignup} handleClose={handleCloseSignup} />
        </div>
    )
}

export default Header