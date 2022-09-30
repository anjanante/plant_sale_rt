import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';

function App() {
  return (<div>
    <Banner>
        <img src={logo} alt='The jungle house' className='float-left' />
        <h1 className='display-4 lmj-title'>The jungle house</h1>
    </Banner>
    <div className='row'>   
      <div className='col-md-3'>   
        <Cart />
      </div>
      <div className='col-md-9'> 
        <ShoppingList />
      </div>
    </div> 
  </div>);
}

export default App;
