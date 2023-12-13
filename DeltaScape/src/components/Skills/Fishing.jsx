import React, { useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

const Fishing = () => {

    const [skill, setSkill] = useOutletContext();
    setSkill("Fishing");

    return (
       <div>
            <h2>This is the Fishing Component</h2>
       </div>
    )
}

export default Fishing;