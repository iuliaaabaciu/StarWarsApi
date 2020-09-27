import React from 'react';
import Card from './Card';

const CardList = ({ planets }) => {
  return (
    <div> 
      {
        planets.map((planet, i) => {
          return (
            <Card 
              key={planets[i].id} 
              id={planets[i].id} 
              name={planets[i].name} 
              climate={planets[i].climate}
              diameter={planets[i].diameter}
              population={planets[i].population}
            />
          );
        })
      }
    </div>
  )
}

export default CardList;