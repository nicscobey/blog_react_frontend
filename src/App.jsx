import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import Blog from './pages/blog';
import Write from './pages/write';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/new">
          <Write />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
