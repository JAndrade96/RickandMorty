import axios from 'axios';
import React, { useState } from 'react';

const Characters = ({isChartacters, setIsChartacters}) => {
    const [TypeId, setTypeId] = useState("")

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${TypeId}`)
        .then(res => setIsChartacters(res.data))
    }


    return (
        <div>
            <input
            className='input' 
            type="text"
            value={TypeId} 
            onChange= {e => setTypeId(e.target.value)}/> 
            <span className="material-symbols-outlined" onClick={searchType}> search </span>
            <br />
            <h1>{isChartacters.name}</h1>
            <div className='Location-info'>
            <p> Type: {isChartacters.type}</p>
            <p> Dimension: {isChartacters.dimension}</p>
            <p> Residents: {isChartacters.residents?.length}</p>
            </div>
        </div>
    );
};

export default Characters;