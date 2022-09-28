import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  return (<div>
    <Banner />
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
