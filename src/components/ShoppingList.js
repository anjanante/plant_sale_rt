
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'



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
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div className='col-md-4' key={id}>
                        {/* {item.isBestSale && <span>🔥</span>}
                        {item.isSpecialOffer && <div className='lmj-sales'>SOLD</div>} */}
                        <PlantItem name={name} id={id} cover={cover} water={water} light={light} />
                    </div>
                ))}

            </div>
        </div>
    )
}