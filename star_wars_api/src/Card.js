import React from 'react';

const Card = ({name, climate, diameter, population}) => {
  // const { name, email, id } = props; or we can destruct props with the props parameter
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div className='tc'>
        <h2>Planet name: {name}</h2>
        <p>Climate: {climate}</p>
        <p>Diameter: {diameter}</p>
        <p>Popuation: {population}</p>
      </div>
    </div>
  );
}

export default Card;