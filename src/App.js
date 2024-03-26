// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbars from "./components/Navbars";
import TextForm from "./components/TextForm";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// let name = "John";
function App() {
  const [mode, setMode] = useState('light')

  const [switchValue, setSwitchValue] = useState('Enable Dark Mode')

  const toggleMode = () => {
    console.log('works');
    if (mode === 'light') {
      setMode('dark')
      setSwitchValue('Enable Light Mode')
      document.body.style.backgroundColor = 'gray'
      setInterval( () => {
        document.title = 'You have got virus'
      }, 2000)
      setInterval(() => {
        document.title = 'Please install an antivirus'
      }, 1500);
    } else {
      setMode('light')
      setSwitchValue('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Router>
      <Navbars mode={mode} toggleMode={toggleMode} toggleDarkMode={switchValue}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm heading="Text Area" mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About/> 
          </Route>   
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
