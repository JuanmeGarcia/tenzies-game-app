import React from 'react'

function Header(props) {
	return (
		<header className='header'>
            <p className='counter'>Counter: {props.counter} </p>
            <p className='timer'>Timer: {props.timeTracker}</p>
			<h1 className='header__title'>Tenzies</h1>
			<h3 className='header__subtitle'>
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</h3>
		</header>
	)
}

export default Header
