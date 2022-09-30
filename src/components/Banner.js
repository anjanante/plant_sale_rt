import '../styles/Banner.css'

export default function Banner({children}) {
    const title = 'The jungle house'
    return (
        <div className="jumbotron">
            <div className='lmj-banner'>
                {children}
            </div >
        </div>
    )
}