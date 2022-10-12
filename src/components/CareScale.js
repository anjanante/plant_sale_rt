import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

export default function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />

    function handleClick(scaleValue,careType){
        const type = {
            '1' : 'peu',
            '2' : 'modérement',
            '3' : 'beaucoup',
        }
        const msg   = 'Cette plante requiert'

        const value = scaleValue > 3 ? 3 : scaleValue;

        if(careType === 'light'){
            alert(msg+' '+type[value]+'de lumière');
        }else{
            alert(msg+' '+type[value]+' d\'arrosage');
        }
    }
    return (
        <div onClick={() => handleClick(scaleValue,careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
