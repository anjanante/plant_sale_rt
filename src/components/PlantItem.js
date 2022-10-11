import CareScale from './CareScale'
import '../styles/PlantItem.css'

export default function PlantItem({name,cover,light,water}){
    return (
        <div className='card box'>
            <img className='card-img-top lmj-plant-item-covera' src={cover} alt={`${name} cover`} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
            </div>
            <p class="card-text"><CareScale careType='water' scaleValue={water} /></p>
            <p class="card-text"><CareScale careType='light' scaleValue={light} /></p>
            <a href="#" class="card-link">Add</a>
        </div>
    )
}