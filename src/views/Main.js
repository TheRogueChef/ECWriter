import React from 'react';
import '../components/style.css';
import { Link as RouterLink } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';


const Main = () => {

    return (
        <div className='mainShell'>
            <MobileMenu />
            <div className='container' >
                <p className='MTitle'>Erik Carlson, writer</p>
                <div>
                    <p className='MTitleMM'>Erik Carlson</p>
                    <p className='MTitleMM'>writer</p>
                </div>
            </div >
            <div className='mainRight'>
                <RouterLink className='enterBtn' to='/aboutMe'>enter</RouterLink>
            </div>
        </div>
    );
};

export default Main;