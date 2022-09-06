import '../styles/Banner.css'
import logo from '../assets/logo.png'

export default function Banner() {
    const title = 'The jungle house'
    return (
        <div className="jumbotron">
            <div className='lmj-banner'>
                <img src={logo} alt={title} className='float-left' />
                <h1 className='display-4 lmj-title'>{title}</h1>
            </div >
        </div>
    )
}