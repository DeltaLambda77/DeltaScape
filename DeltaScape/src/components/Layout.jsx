import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import './Layout.css'

const Layout = () => {
    const [skill, setSkill] = useState({
            name: "",
            icon: "",
            experience: "",
            level: "",
        });

    return (
        <div className="layout-container">
            <SideBar />
            <div className="game-container">
                <div className="skill-container">
                    <div className="left-skill-container">
                        <img  alt={skill.name + " icon"}></img>
                        <h5>{skill.name}</h5>
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
                            <p>{skill.level} / 99 (Pass in skill lvl heree)</p>
                        </div>
                        <div className="skill-xp-container">
                        <p>{skill.name} XP</p>
                            <p>{skill.experience} / 99 (Pass in skill XP heree)</p>
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

export default Layout