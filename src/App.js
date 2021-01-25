import React from 'react';
import './App.scss';
import AboutUs from './pages/AboutUs';
import {Route, Switch, useLocation} from 'react-router-dom';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav/Nav';

import {AnimatePresence} from 'framer-motion';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav/>
      <AnimatePresence exitBeforeEnter>
     
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={AboutUs} />
            <Route       path="/work" component={OurWork}/>
            <Route       
            path="/contact" component={ContactUs}/>
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
