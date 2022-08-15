import React from 'react'

const planet = ({planet}) => {
  return (
    <div>
        <h3>name- {planet.name}</h3>
        <p>Population- {planet.population}</p>
        <p>Population- {planet.terrain}</p>
    </div>
  )
}

export default planet