import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cart, updateCart] = useState(cartStorage ? cartStorage : [])

  //save Cart on page loading
  useEffect(() => {
      localStorage.setItem('cart',JSON.stringify(cart));
  }, [cart])

  return (<div>
    <Banner>
        <img src={logo} alt='The jungle house' className='float-left' width="250"/>
        <h1 className='display-4 lmj-title'>The jungle house</h1>
    </Banner>
    <div className='row'>   
      <div className='col-md-3'>   
        <Cart cart={cart} updateCart={updateCart} />
      </div>
      <div className='col-md-9'> 
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
    </div> 
    <Footer />
  </div>);
}

export default App;
