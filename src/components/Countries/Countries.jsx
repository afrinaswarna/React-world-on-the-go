import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlags,setVisitedFlags]=useState([])
    const countriesData= use(countriesPromise)
    const countries = countriesData.countries

   const handleVisitedCountries=(country)=>{
    console.log('handle visited countries clicked',country)
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
   }
   const handleVisitedFlags =(flags)=>{
    console.log('flags visited clicked',flags)
    const newVisitedFlags = [...visitedFlags,flags]
    setVisitedFlags(newVisitedFlags)
   }
    return (
        <div>
            <h2>In the Countries</h2>
            <h4>Total visited countries:{visitedCountries.length}</h4>
            <h4>Total visited flags:{visitedFlags.length}</h4>
            <ol>
                {
                visitedCountries.map(country=><li>{country.name.common}</li>)
            }
            </ol>
            <div className='flags-visited-countries'>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag} />)
                }
            </div>
            <div className='countries'>{
                countries.map(country=><Country
                    key={country.cca3.cca3} 
                    country={country}
                     handleVisitedCountries={ handleVisitedCountries}
                     handleVisitedFlags={handleVisitedFlags} >  
                    </Country>)
            }</div>
        </div>
    );
};

export default Countries;