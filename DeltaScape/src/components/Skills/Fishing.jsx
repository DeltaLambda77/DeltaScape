import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';


const Fishing = () => {
    const [skill, setSkill] = useOutletContext();

    useEffect(() => {
        setSkill(prevSkill => ({
            ...prevSkill,
            name: "Fishing",
            icon: "fishing_icon",
            experience: "73",
            level: "1"
        }));
    }, []);

    return (
       <div>
            <h2>This is the Fishing Component</h2>
       </div>
    )
}

export default Fishing;