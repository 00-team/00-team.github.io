import React from 'react'
import { Link } from 'react-router-dom'


const go = path => {window.open(path)}

const Header = () => {
    return (
        <div className='base-menu'>
            <div className="btn-bar">
                <span></span>
            </div>
            <div className="menu-bar">
                <div className="togo">
                    <span>00 Team</span>
                </div>
                <ul className="tree-link">
                    <li className="link">
                        <Link to="/">Home</Link>
                        <div className="spacel"></div>
                    </li>
                    
                    <li className="link">
                        <Link to="/projects">Projects</Link>
                        <div className="spacel"></div>
                    </li>

                    <li className="link">
                        <a href='' onClick={() => go('https://github.com/00-team/')}>Join Team</a>
                        <div className="spacel"></div>
                    </li>

                    <li className="link">
                        <a href='' onClick={() => go('https://discord.gg/4chSwNEQ3E')}>Discord</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Header;
