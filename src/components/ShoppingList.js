
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'



export default function ShoppingList(){

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <hr/>
            <ul className='lmj-plant-list'>
                {plantList.map((item,index) => (
                    <li key={item.id}>
                        {item.name} 
                        {item.isBestSale && <span>🔥</span>}
                        {item.isSpecialOffer && <div className='lmj-sales'>SOLD</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}