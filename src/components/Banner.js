import '../styles/Banner.css'

export default function Banner({children}) {
    return (
        <div className="jumbotron">
            <div className='lmj-banner'>
                {children}
            </div >
        </div>
    )
}