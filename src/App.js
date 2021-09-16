import React from "react";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Add the header component with menus  - home, products, cart */} 
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;



// store
    // actions
    // reducers
// routing
// components
   // home
   // footer
   // productList
      // product