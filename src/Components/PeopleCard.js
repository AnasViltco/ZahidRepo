import React from 'react'

const planet = ({people}) => {
  return (
    <div>
        <h3>name- {people.name}</h3>
        <p>Population- {people.population}</p>
        <p>Population- {people.terrain}</p>
    </div>
  )
}

export default planet