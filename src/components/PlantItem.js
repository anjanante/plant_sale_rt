import CareScale from './CareScale'
import '../styles/PlantItem.css'


export default function PlantItem({name,cover,light,water,price,cart,updateCart}){
    //change state of cart
    function addToCart(name, price){
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
            ])
        }else{
            updateCart([
                ...cart,
                {name, price, amount: 1}
            ])
        }
    }

    return (
        <div className='card box'>
            <img className='card-img-top lmj-plant-item-covera' src={cover} alt={`${name} cover`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <span className="card-text"><CareScale careType='water' scaleValue={water} /></span>
            <span className="card-text"><CareScale careType='light' scaleValue={light} /></span>
            <button href="#" className="btn btn-info" onClick={() => addToCart(name, price)}>Add</button>
        </div>
    )
}