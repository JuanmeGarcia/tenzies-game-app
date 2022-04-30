import React from 'react'

function Dice(props) {
	return (
		<div 
			className={`dice ${props.isHeld && 'dice--active'}`}
			onClick={props.holdDice}
		>{props.value}
		</div>
	)
}

export default Dice
