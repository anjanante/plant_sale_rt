import CareScale from './CareScale'
import '../styles/PlantItem.css'


export default function PlantItem({name,cover,light,water}){
    function handleClick(name,e){
        console.log(e)
        console.log('Click plant ',name)
    }

    return (
        <div className='card box' onClick={(e) => handleClick(name,e)}>
            <img className='card-img-top lmj-plant-item-covera' src={cover} alt={`${name} cover`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <span className="card-text"><CareScale careType='water' scaleValue={water} /></span>
            <span className="card-text"><CareScale careType='light' scaleValue={light} /></span>
            <button href="#" className="btn btn-info">Add</button>
        </div>
    )
}