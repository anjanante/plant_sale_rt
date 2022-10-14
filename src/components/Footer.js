import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, there is no @, this is not a valid address 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionnées de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} onChange={handleInput} onBlur={handleBlur}/>
		</footer>
	)
}