import { useState } from 'react';
import '../styles/Cart.css'

export default function Cart() {
    const [cart, updateCart]   = useState(0);
    const [isOpen, setIsOpen]  = useState(true);
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;
    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>X</button>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€  
                    <button onClick={() => updateCart(cart+1)}>Add</button>
                </li>
                {/* <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li> */}
            </ul>
            Total : {(monsteraPrice*cart)}€
            <div>
                <button onClick={() => updateCart(0)} className="btn btn-secondary">Empty the cart</button>
            </div>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button onClick={() => setIsOpen(true)} className='btn btn-info'>Open Cart</button>
        </div>
    );
}
