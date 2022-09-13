import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({residents}) => {
    const [Character, isCharacter] = useState({})
    const [color, setColor] = useState ("gray")

    useEffect(() => {
        axios.get(residents)
        .then(res => isCharacter(res.data))
        if(Character.status === "Alive"){
            setColor("green")
        } else if(Character.status === "Dead"){
            setColor("red")
        } else{
            setColor("gray")
        }
    },[residents, residents.status])

    console.log(Character)

    return (
        <div className='card-img'>
            <li className='item'>{Character.name}</li>
            <img src={Character.image} alt="" />
            <span className={'circle' + color}></span>
            <p>{Character.species} - {Character.status}</p>
            <p>{Character.location?.name}</p>
            <p>{Character.episode?.length}</p>
        </div>
    );
};

export default ResidentInfo;