import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import './Layout.css'

const Layout = () => {
    const [skill, setSkill] = useState('');

    const handleChange = (newSkill) => {
        setSkill(newSkill);
    };

    return (
        <div className="layout-container">
            <SideBar />
            <div className="game-container">
                <div className="skill-container">
                    <div className="left-skill-container">
                        <img  alt="skill img alt text goes here"></img>
                        <h5>Skill Name goes Here</h5>
                    </div>

                    <div className="right-skill-container">
                        <button className="equipment-btn">
                            <img alt="equipment button img goes here"></img>
                        </button>
                        <button className="character-tag-btn">
                            <img alt="character tag button img goes here"></img>
                        </button>
                    </div>
                </div>

                <div className="xp-container"> 
                    <div className="xp-bar">
                        <h6>this is the xp bar (pass in skill xp)</h6>
                    </div>

                    <div className="skill-stats-container">
                        <div className="skill-level-container">
                            <p>Skill Level</p>
                            <p>1 / 99 (Pass in skill lvl heree)</p>
                        </div>
                        <div className="skill-xp-container">
                        <p>{skill} XP</p>
                            <p>1 / 99 (Pass in skill XP heree)</p>
                        </div>
                        <div className="skill-equipment-container">

                        </div>
                    </div>
                </div>

                <div className="timer-container">
                    <h2>This is the timer container</h2>
                </div>

                <Outlet context={[skill, setSkill]} />
            </div>
        </div>
    )
}

const currentSkill = ({skill}) => {
    
}

export default Layout