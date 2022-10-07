import React from 'react'
import Farmersignup from './farmer-signup'

function Topbar () {
  return (
    <div className='Site-header'>
          <h1 className='titleone'>Apothecary</h1>
          <Farmersignup />
          <h4 className='center'>Partnering with Farmers worldwide</h4>

    </div>
  )
}

export default Topbar