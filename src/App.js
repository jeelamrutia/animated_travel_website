import React, {useState} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import About from './components/pages/About';
import Rentals from './components/pages/Rentals';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Router>
    <GlobalStyle /> 
    <Navbar/>
    
    <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Rentals' exact component={Rentals} />
    </Switch>
   </Router>
    </>
  );
}

export default App;








