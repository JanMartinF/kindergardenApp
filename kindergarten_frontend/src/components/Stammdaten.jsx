import React from 'react'
import StammDatenKinder from './StammDatenKinder'
import StammDatenEltern from './StammDatenEltern'
import StammDatenAngestellte from './StammDatenAngestellte'

const Stammdaten = () => {
  return (
    <div>
        <StammDatenKinder />
        <StammDatenEltern />
        <StammDatenAngestellte />
    </div>
  )
}

export default Stammdaten