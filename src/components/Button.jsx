import React from 'react'

function Button(props) {
  return (
    <button className='main__button' onClick={props.updateDiceNumber}>Roll</button>
  )
}

export default Button