import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from "@fortawesome/free-solid-svg-icons";

const Mining = () => {
    const [skill, setSkill] = useOutletContext();

    useEffect(() => {
        setSkill(prevSkill => ({
            ...prevSkill,
            name: "Mining",
            icon: "mining_icon",
            experience: "999",
            level: "4"
        }));
    }, [])
   
    return (
       <div class="mining-card-container">
           <div class="coal-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img alt="coal-img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="copper-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="tin-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>  
           </div>
           <div class="iron-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="silver-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="gold-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="mithril-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="adamantite-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
           <div class="thorium-card">
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
           </div>
       </div>
    )
}

export default Mining;