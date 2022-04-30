import React from 'react'

function Button(props) {
  return (
    <button 
      className='main__button' 
      onClick={props.tenzies ? props.restarGame : props.updateDiceNumber}
    >
      {props.tenzies ? 'Restart' : 'Roll'}
    </button>
  )
}

export default Button