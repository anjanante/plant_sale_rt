
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'



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

            <div className='row'>
                {plantList.map((item,index) => (
                    <div className='col-md-4 box' key={item.id}>
                        {item.name} 
                        {item.isBestSale && <span>🔥</span>}
                        {item.isSpecialOffer && <div className='lmj-sales'>SOLD</div>}
                        <CareScale scaleValue={item.light} />
                    </div>
                ))}

            </div>
        </div>
    )
}