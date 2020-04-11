import React from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Produits from './components/Produits';
import ProduitsList from './components/ProduitsList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Module from './components/Module';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={Produits} /> */}
          <Route exact path='/' component={ProduitsList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Module />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
