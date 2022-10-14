import { useState, useEffect } from 'react';
import '../styles/Cart.css'

export default function Cart({cart,updateCart}) {
    const [isOpen, setIsOpen]  = useState(true);

    const total = cart.reduce(
        (currentvalue, plantType) => currentvalue + plantType.amount*plantType.price,
        0
    );
    
    //add effect when render (of total) in finished 
    useEffect(() => {
        document.title = `TJH: ${total}Ar to buy 💸`
    }, [total])

    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>X</button>
            <h2>Basket</h2>
            <ul className="list-group">
                {cart.map(({name,price,amount},index) => (
                    <li key={`${name}-${index}`} className="list-group-item list-group-item-light">
                        {name} {price}Ar * {amount}
                    </li>
                ))}
            </ul>
            Total : {total}Ar
            <hr/>
            <div>
                <button onClick={() => updateCart([])} className="btn btn-secondary">Empty the cart</button>
            </div>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button onClick={() => setIsOpen(true)} className='btn btn-info'>Open Cart</button>
        </div>
    );
}
