import Login from "./login"
import { useState, useRef } from "react";
import Signup from "./signup";

const Header = ({getToken, token, logout}) => {

    const localToken = JSON.parse(localStorage.getItem('token'))
    // console.log(localToken)
    // console.log(token)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openSignup, setOpenSignup] = useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);

    const [user, setUser] = useState({username: "", password: ""})

    const handleUser = (event) => {
        const myUser = {...user}
        myUser[event.target.name] = event.target.value
        setUser(myUser)
    }

    const handleLogin = (event) => {
        // const un = username.current.value 
        // const pw = password.current.value 

        // console.log(un, pw)
        getToken(user.username, user.password)
        handleClose()
        // console.log(user)
        setUser({username: "", password: ""})
    }

    const notLoggedIn = () => {
        return (
            <>
                <h4 onClick={handleOpen} className="nav-link">Log In</h4>
                <h4 onClick={handleOpenSignup} className="nav-link">Sign Up</h4>
            </>
        )
    }

    const handleLogout = () => {
        // console.log('logout')
        // console.log(token)
        // console.log(localToken)
        logout()
    }

    const loggedIn = () => {
        // console.log(token)

        return (
            <>
                <a href="/new" className="nav-link">New Post</a>
                <a href="/my" className="nav-link">My Account</a>
                <h4 onClick={handleLogout} className="nav-link">Log Out</h4> 
            </>
        )
    }

    return (
        <div className="header">
            <a href="/"><h2 className="flex-center no-weight no-margin">App Name</h2></a>
            <div className="nav">
                <a href="/#top-posts" className="nav-link">Top Posts</a>
                <a href="/#all-articles" className="nav-link">All Posts</a>
                {/* <h4 onClick={handleOpen} className="nav-link">Log In</h4>
                <h4 onClick={handleOpenSignup} className="nav-link">Sign Up</h4> */}
                {token.access || localToken ? loggedIn() : notLoggedIn()}
            </div>
            <Login login={handleLogin} handleUser={handleUser} user={user} open={open} handleClose={handleClose}/>
            <Signup open={openSignup} handleClose={handleCloseSignup} />
        </div>
    )
}

export default Header