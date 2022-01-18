import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import Blog from './pages/blog';
import Write from './pages/write';
import Account from './pages/account';
import { ThemeProvider } from '@mui/system';
import ColorTheme from './components/ColorTheme';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={ColorTheme}>
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
          <Route exact path="/my">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider> 
    </div>
  )
}

export default App
