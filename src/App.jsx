import { useEffect, useReducer, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route, useHistory} from 'react-router-dom'
import Home from './pages/home';
import Blog from './pages/blog';
import Write from './pages/write';
import Account from './pages/account';
import { ThemeProvider } from '@mui/system';
import ColorTheme from './components/ColorTheme';
import Edit from './pages/edit';

function App() {
  const url = 'https://blog-backend-django-ns.herokuapp.com/'
  // const url = 'http://127.0.0.1:8000/'
  const [count, setCount] = useState(0)
  const history = useHistory()
  
  // AUTH FUNCTIONS
  const [token, setToken] = useState("")
  let localToken = JSON.parse(localStorage.getItem('token')) || ""
  const [account, setAccount] = useState(null)
  const getAccountInfo = async(username) => {
    const response = await fetch(url + 'user/', {
      method: "get",
    })
    const users = await response.json()
    // console.log(users)
    const user = users.find(user => user.username === username)
    // console.log(user)
    setAccount(user)
    localStorage.setItem("user", JSON.stringify(user))
    console.log(localStorage.user)
  }


  const getToken = async (username, password) => {
    const response = await fetch(url + 'api/token/', {
      method: 'post', 
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "https://blog-backend-django-ns.herokuapp.com/"
      },
      body: JSON.stringify({username: username, password: password})
    })

    const data = await response.json()
    // console.log(data)
    if (data.detail==='No active account found with the given credentials') {
      // console.log('oh no!')
      console.log(data)
      alert("Invalid username or password")
    }
    else {
      // console.log('yay!')
      getAccountInfo(username)
      setToken(data)
      localStorage.setItem("token", JSON.stringify(data))
    }
  }

  const refreshToken = async () => {

    console.log(token)

    const response = await fetch(url + 'api/token/refresh/', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token)
    })
    const data = await response.json()
    console.log(data)
    const tempToken = {...token}
    tempToken.access = data.access
    console.log(tempToken)
    setToken(tempToken)
    console.log(localToken)
    localStorage.setItem("token", JSON.stringify(tempToken))
    console.log(token)
    localToken = JSON.parse(localStorage.getItem('token'))
    console.log(JSON.parse(localStorage.getItem('token')))
  }
  

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setToken("")
    setAccount(null)
    history.push('/')
    localToken = ""
  }

  // NEW USER
  const newUser = async (user) => {
    console.log(user)
    const response = await fetch(url + 'user/', {
      method: "post",
      headers: {
        // Authorization: `Bearer ${token.access}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
      // title: post.title,
      // subtitle: post.subtitle,
      // content: post.content,
      // them: post.theme,
      // author_id: account.id
    })
    // console.log(response)
    // console.log(response.json())
    // const data = await response.json()
    // console.log(data)


    // getPosts()
  }

  //Signup & Login Modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openSignup, setOpenSignup] = useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);


  // GET POSTS
  const [posts, setPosts] = useState(null)
  const [publishedPosts, setPublishedPosts] = useState(null)
  // const publishedPosts = []
  const getPosts = async () => {
    const response = await fetch(url + 'blog/', {
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${token.access}`
      // }
    })
    const data = await response.json()
    console.log(data)
    setPosts(data)

    const filteredPosts = []
    data?.forEach(post => {
      if (post.published) {
        filteredPosts.push(post)
      }
    })
    console.log(filteredPosts)
    setPublishedPosts(filteredPosts)
  }

  useEffect(() => {getPosts()}, [])
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('token'))) {
      console.log('hi')
      // localStorage.setItem("token", JSON.stringify(tempToken))
      localToken = JSON.parse(localStorage.getItem('token'))
      console.log(JSON.parse(localStorage.getItem('token')))
      setToken(JSON.parse(localStorage.getItem('token')))
      setAccount(JSON.parse(localStorage.getItem('user')))
    }
  }, [])


  // NEW POST
  const newPost = async (post) => {
    await refreshToken()
    const response = await fetch(url + 'blog/', {
      method: "post",
      headers: {
        Authorization: `Bearer ${localToken.access}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
      // title: post.title,
      // subtitle: post.subtitle,
      // content: post.content,
      // them: post.theme,
      // author_id: account.id
    })

    getPosts()
  }

  //EDIT POST
  const editPost = async (post, post_id) => {

    // console.log(token.access)
    // console.log(localToken)
    // console.log(localToken.access)

    // console.log(post)
    // console.log(post_id)
    await refreshToken()

    const response = await fetch(url + 'blog/' + post_id + '/', {
      method: "put",
      headers: {
        Authorization: `Bearer ${localToken.access}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
      // title: post.title,
      // subtitle: post.subtitle,
      // content: post.content,
      // them: post.theme,
      // author_id: account.id
    })

    getPosts()
  }

  //DELETE POST 
  const deletePost = async (post_id) => {

    console.log(token.access)
    console.log(localToken)
    console.log(localToken.access)

    // console.log(post)
    console.log(post_id)
    await refreshToken()

    const response = await fetch(url + 'blog/' + post_id + '/', {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localToken.access}`,
      //   "Content-Type": "application/json"
      },
      // body: JSON.stringify(post)
      // title: post.title,
      // subtitle: post.subtitle,
      // content: post.content,
      // them: post.theme,
      // author_id: account.id
    })

    getPosts()
  }







// GET COMMENTS
const [comments, setComments] = useState(null)
const getComments = async () => {
  const response = await fetch(url + 'comment/', {
    method: "get",
  })
  const data = await response.json()
  console.log(data)
  setComments(data)
}

// NEW COMMENT
const newComment = async (comment) => {
  await refreshToken()

  const response = await fetch(url + 'comment/', {
    method: "post",
    headers: {
      Authorization: `Bearer ${localToken.access}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  })

  console.log(response)

  getComments()
}

//EDIT COMMENT
const editComment = async (comment, comment_id) => {
  await refreshToken()

  const response = await fetch(url + 'comment/' + comment_id + '/', {
    method: "put",
    headers: {
      Authorization: `Bearer ${localToken.access}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  })

  getComments()
}

//DELETE COMMENT
const deleteComment = async (comment_id) => {
  await refreshToken()
  const response = await fetch(url + 'comment/' + comment_id + '/', {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localToken.access}`,
    },
  })

  console.log(response)
  getComments()
}



// // GET REPLIES
// const [replies, setReplies] = useState(null)
// const getReplies = async () => {
//   const response = await fetch(url + 'reply/', {
//     method: "get",
//   })
//   const data = await response.json()
//   console.log(data)
//   setReplies(data)
// }

// // NEW REPLY
// const newReply = async (reply) => {
//   const response = await fetch(url + 'reply/', {
//     method: "post",
//     headers: {
//       Authorization: `Bearer ${token.access}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(reply)
//   })

//   console.log(response)

//   getReplies()
// }

// //EDIT REPLY
// const editReply = async (reply, reply_id) => {
//   const response = await fetch(url + 'reply/' + reply_id + '/', {
//     method: "put",
//     headers: {
//       Authorization: `Bearer ${localToken.access}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(reply)
//   })

//   getReplies()
// }

// //DELETE REPLY
// const deleteReply = async (reply_id) => {

//   const response = await fetch(url + 'reply/' + reply_id + '/', {
//     method: "delete",
//     headers: {
//       Authorization: `Bearer ${localToken.access}`,
//     },
//   })

//   getReplies()
// }





  return (
    <div className="App">
      <ThemeProvider theme={ColorTheme}>
        <Header newUser={newUser} logout={logout} token={localToken} getToken={getToken} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} openSignup={openSignup} setOpenSignup={setOpenSignup} handleOpenSignup={handleOpenSignup} handleCloseSignup={handleCloseSignup} />
        <Switch>
          <Route exact path="/">
            <Home getPosts={getPosts} refreshToken={refreshToken} posts={publishedPosts} token={localToken} handleOpen={handleOpen} handleOpenSignup={handleOpenSignup} />
          </Route>
          <Route path="/blog/:id" render={(rp) => (
            <Blog localToken={localToken} refreshToken={refreshToken} token={localToken} {...rp} url={url} account={account} posts={publishedPosts} getPosts={getPosts} comments={comments} getComments={getComments} editComment={editComment} deleteComment={deleteComment} newComment={newComment} />
          )} />
          {/* <Route path="/blog">
            <Blog />
          </Route> */}
          <Route path="/new">
            <Write token={localToken} newPost={newPost} title="" subtitle="" theme="" content="" banner="" account={account} />
          </Route>
          {/* <Route path="/edit">
            <Edit editPost={editPost} title="edit" subtitle="edit" theme="CSS" content="edit" account={account} />
          </Route> */}
          <Route path="/edit/:id">
            <Edit editPost={editPost} posts={posts} account={account} />
          </Route>
          <Route exact path="/my">
            <Account account={account} posts={posts} token={localToken} deletePost={deletePost}/>
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider> 
    </div>
  )
}

export default App
