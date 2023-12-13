import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Mining = () => {

    const [skill, setSkill] = useOutletContext();
    setSkill("Mining");

    return (
       <div>
        <h2>This is the Mining Component</h2>
       </div>
    )
}

export default Mining;