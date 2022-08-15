import React from 'react'
import { useQuery } from '@tanstack/react-query'
import PeopleCard from './PeopleCard';

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return res.json();
}

const People = () => {
    const { data, status } = useQuery(['people']   , fetchPlanets);
    console.log(data); 

  return (
    <div>

    { status === 'error' && (
        <div>Error has occured in fetching the data</div>
    )}
    { status === 'loading' && (
        <div>Data is loading your patience is required</div>
    )}
    { status === 'success' && (
        <div>
            { data.results.map(people => <PeopleCard key={people.name} people={People} />) }
        </div>
    )}
    </div>
  )
}

export default People