import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import About from './components/About';
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('DarkMode has been enabled','success');
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('LightMode has been enabled','success');
    }
  }
  return (
    <Router>
    <Navbar mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
