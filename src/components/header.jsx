import Login from "./login"
import { useState, useRef } from "react";
import Signup from "./signup";
import { Link } from "react-router-dom";

const Header = ({getToken, token, logout, newUser, open, setOpen, handleOpen, handleClose, openSignup, setOpenSignup, handleOpenSignup, handleCloseSignup}) => {

    const localToken = JSON.parse(localStorage.getItem('token'))
    // console.log(localToken)
    // console.log(token)
    // console.log(newUser)

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const [openSignup, setOpenSignup] = useState(false);
    // const handleOpenSignup = () => setOpenSignup(true);
    // const handleCloseSignup = () => setOpenSignup(false);

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
        console.log(user.username, user.password)
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
                <Link to="/new"><h4 className="nav-link">New Post</h4></Link>
                <Link to="/my"><h4 className="nav-link">My Account</h4></Link>
                <h4 onClick={handleLogout} className="nav-link">Log Out</h4> 
            </>
        )
    }

    return (
        <div className="header">
            <Link to="/" className="flex-center"><img src="https://career-engineer-job-tracker.herokuapp.com/images/logo-large.png" width="100px" /></Link>
            <div className="nav">
                <a href="/#top-posts" className="nav-link">Top Posts</a>
                <a href="/#all-articles" className="nav-link">All Posts</a>
                {/* <h4 onClick={handleOpen} className="nav-link">Log In</h4>
                <h4 onClick={handleOpenSignup} className="nav-link">Sign Up</h4> */}
                {token && token.access || localToken ? loggedIn() : notLoggedIn()}
            </div>
            <Login login={handleLogin} handleUser={handleUser} user={user} open={open} handleClose={handleClose} />
            <Signup open={openSignup} handleClose={handleCloseSignup} newUser={newUser} message="Create an Account"/>
        </div>
    )
}

export default Header