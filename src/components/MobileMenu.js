import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mobile-menu">
            <br />
            <div className="menu-toggle" onClick={toggleMenu}>
                Menu  
                
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <br />
            {menuOpen && (
                <div className="menu-items">
                    <RouterLink to="aboutMe" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        About Me
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="toLove" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        To Love
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="MVI" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        Me vs I
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="late" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        Late
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="dr" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        Diarrhetic Reaction
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="hgh" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        Haters Gonna Hate
                    </RouterLink>
                    <br /><br />
                    <RouterLink to="keegs" style={{ textDecoration: 'none', color: 'black'}} smooth="true" duration={500}>
                        Keegity Keegers
                    </RouterLink>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;