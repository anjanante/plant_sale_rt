
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'



export default function ShoppingList({cart,updateCart}){

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    const [catSelected, setCatSelected] = useState('');

    const plantFilter = catSelected !== '' ? plantList.filter((plant) => plant.category === catSelected) : plantList;

    return (
        <div>
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <select className="custom-select mb-3" onChange={(e) => setCatSelected(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <Categories cat={cat} key={cat} selected={catSelected}/>
                        ))}
                    </select>
                </div>
            </div>

            <div className='row'>
                {plantFilter.map(({ id, cover, name, water, light, price }) => (
                    <div className='col-md-4' key={id}>
                        {/* {item.isBestSale && <span>🔥</span>}
                        {item.isSpecialOffer && <div className='lmj-sales'>SOLD</div>} */}
                        <PlantItem 
                            name={name} 
                            id={id} 
                            cover={cover} 
                            water={water} 
                            light={light} 
                            price={price} 
                            cart={cart} 
                            updateCart={updateCart} 
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}