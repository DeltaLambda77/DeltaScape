import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SideBar = (props) => {
    const handleClick = () => {
        props.onClick();
    }

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={viteLogo} alt="logo" />
                <img src={viteLogo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/mining">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/fishing">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/>
                </NavLink>
            </nav>
        </div>

       /* <header>
             <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                        onClick={handleClick}
                        >
                        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Combat Skill #1</span>
                        </a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        onClick={handleClick}>
                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Combat Skill #2</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        onClick={handleClick}><i class="fas fa-lock fa-fw me-3"></i><span>Combat Skill #3</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        onClick={handleClick}><i class="fas fa-chart-line fa-fw me-3"></i><span>Skill #1</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                        <i class="fas fa-chart-pie fa-fw me-3"></i><span>Skill #2</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Skill #3</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-globe fa-fw me-3"></i><span>Skill #4</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-building fa-fw me-3"></i><span>Skill #5</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-calendar fa-fw me-3"></i><span>Skill #6</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-users fa-fw me-3"></i><span>Skill #7</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-money-bill fa-fw me-3"></i><span>Skill #8</span></a>
                        
                    </div>
                </div>
            </nav>
        </header>*/
    )
}

export default SideBar;