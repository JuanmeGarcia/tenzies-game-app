import React from 'react'

function Container({children}) {
  return (
    <section className='main__dice-container'>
        {children}
    </section>
  )
}

export default Container