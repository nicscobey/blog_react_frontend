import { useEffect, useState } from 'react'
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
  const [count, setCount] = useState(0)
  const history = useHistory()
  
  // AUTH FUNCTIONS
  const [token, setToken] = useState("")
  const localToken = JSON.parse(localStorage.getItem('token'))
  const [account, setAccount] = useState(null)
  const getAccountInfo = async(username) => {
    const response = await fetch(url + 'user/', {
      method: "get",
    })
    const users = await response.json()
    console.log(users)
    const user = users.find(user => user.username === username)
    console.log(user)
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
    if (data.detail) {
      // console.log('oh no!')
      alert("Invalid username or password")
    }
    else {
      // console.log('yay!')
      getAccountInfo(username)
      setToken(data)
      localStorage.setItem("token", JSON.stringify(data))
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    setAccount(null)
    history.push('/')
  }


  // GET POSTS
  const [posts, setPosts] = useState(null)
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
  }

  useEffect(() => {getPosts()}, [])

  // NEW POST
  const newPost = async (post) => {
    const response = await fetch(url + 'blog/', {
      method: "post",
      headers: {
        Authorization: `Bearer ${token.access}`,
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

    console.log(token.access)
    console.log(localToken)
    console.log(localToken.access)

    console.log(post)
    console.log(post_id)

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

  return (
    <div className="App">
      <ThemeProvider theme={ColorTheme}>
        <Header logout={logout} token={token} getToken={getToken} />
        <Switch>
          <Route exact path="/">
            <Home posts={posts} token={token}/>
          </Route>
          <Route path="/blog/:id" render={(rp) => (
            <Blog {...rp} posts={posts} getPosts={getPosts}/>
          )} />
          {/* <Route path="/blog">
            <Blog />
          </Route> */}
          <Route path="/new">
            <Write newPost={newPost} title="" subtitle="" theme="" content="" account={account} />
          </Route>
          {/* <Route path="/edit">
            <Edit editPost={editPost} title="edit" subtitle="edit" theme="CSS" content="edit" account={account} />
          </Route> */}
          <Route path="/edit/:id">
            <Edit editPost={editPost} posts={posts} account={account} />
          </Route>
          <Route exact path="/my">
            <Account account={account} posts={posts} token={token} />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider> 
    </div>
  )
}

export default App
