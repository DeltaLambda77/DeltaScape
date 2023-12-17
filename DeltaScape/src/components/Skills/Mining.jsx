import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import CoalOre from "./../../assets/Coal_Ore.png";
import CopperOre from "./../../assets/Copper_Ore.png";
import IronOre from "./../../assets/Iron_Ore.png";
import SilverOre from "./../../assets/Silver_Ore.png";
import GoldOre from "./../../assets/Gold_Ore.png";
import PlatinumOre from "./../../assets/Platinum_Ore.png";
import MithrilOre from "./../../assets/Mithril_Ore.png";
import AdamantiteOre from "./../../assets/Adamantite_Ore.png";
import ThoriumOre from "./../../assets/Thorium_Ore.png";

import './Mining.css'

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
                <p>Coal</p>
                <div class="mining-card-details-container">
                    <p class="xp">XP</p>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={CoalOre} alt="coal img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="copper-card">
               <p>Copper Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={CopperOre} alt="copper img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="iron-card">
               <p>Iron Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={IronOre} alt="iron img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="silver-card">
               <p>Silver Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={SilverOre} alt="silver img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="gold-card">
                <p>Gold Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={GoldOre} alt="gold img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="platinum-card">
                <p>Platinum Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={PlatinumOre} alt="platinum img"></img>
                <div class="timer-bar">

                </div> 
           </div>
           <div class="mithril-card">
                <p>Mithril Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={MithrilOre} alt="mithril img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="adamantite-card">
                <p>Adamantite Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={AdamantiteOre} alt="adamantite img"></img>
                <div class="timer-bar">

                </div>
           </div>
           <div class="thorium-card">
                <p>Thorium Ore</p>
                <div class="mining-card-details-container">
                    <img alt="xp-icon"></img>
                    <FontAwesomeIcon icon={faHourglass} />
                </div>
                <img src={ThoriumOre} alt="thorium img"></img>
                <div class="timer-bar">

                </div>
           </div>
       </div>
    )
}

export default Mining;