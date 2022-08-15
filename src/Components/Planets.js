import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Planet from './planet';

const fetchPlanets = async () => {
    const res = await fetch(`https://swapi.dev/api/planets/`);
    return res.json();
}

const Planets = () => {
    // const[ page, setPage ] = useState(1)
    const { data, status } = useQuery(['planets']   , fetchPlanets, {
    });
    console.log(data); 

  return (
    <div>

    {/* <button onClick={() => setPage(1)}>Page 1</button>
    <button onClick={() => setPage(2)}>Page 2</button>
    <button onClick={() => setPage(3)}>Page 3</button> */}
    { status === 'error' && (
        <div>Error has occured in fetching the data</div>
    )}
    { status === 'loading' && (
        <div>Data is loading your patience is required</div>
    )}
    { status === 'success' && (
        <div>
            { data.results.map(planet => <Planet planet={planet} />) }
        </div>
    )}
    </div>
  )
}

export default Planets