import React from 'react';
import '../components/style.css';
import { Link as RouterLink } from 'react-router-dom';



const Main = () => {

    return (
        <div className='mainShell'>
            <div className='container' >
                <p className='MTitle'>Erik Carlson, writer</p>
            </div >
            <div className='mainRight'>
                <RouterLink className='enterBtn' to='/dashboard'>enter</RouterLink>
            </div>
        </div>
    );
};

export default Main;