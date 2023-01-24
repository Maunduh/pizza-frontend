import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Products from './components/products';
import { ProductData, ProductData2 } from './components/products/data';
import Footer from './components/Footer'


import { GlobalStyle } from './globalStyles';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="choose your favorite" data={ProductData}/>
      <Featured />
      <Products heading="choose your favorite" data={ProductData2}/>
      <Footer />
    </Router>
    
  );
}

export default App;
