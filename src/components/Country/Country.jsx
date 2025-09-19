import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited,setVisited] = useState(false)
    const handleVisited=()=>{
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)

        // setVisited(visited?false:true)

        setVisited(!visited)
         handleVisitedCountries(country)
    }

        
        
    // console.log(country)
    return (
        <div className={`country ${visited&&'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name:{country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>Region:{country.region.region}</p>
            <p>Continent:{country.continents.continents[0]}</p>
            <p>Area:{country.area.area}  
                 {country.area.area>300000?'big country':'small country'}
            </p>
            <button onClick={handleVisited}>
                {visited?'visited':'not visited'}
                </button>
            <button onClick={()=>handleVisitedFlags(country.flags.flags.png)}>Flags visited</button>    
        </div>
    );
};

export default Country;