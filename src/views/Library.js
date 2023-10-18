import React from 'react';
import '../components/style.css';
import { Link as RouterLink } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';




const Library = () => {

    return (
        <div className='libShell'>
            <div className='libLeft'>
                <div className='container'>
                    <p className='libTitle'>Welcome to the library</p>
                </div>
                <div className='thoughts'>
                <p>Thoughts?</p>
                <a style={{ color: 'red', textDecoration: 'none', textShadow: '.15rem .15rem ghostwhite'}} href='mailto:theroguechef@comcast.net' target='_blank' rel='noopener noreferrer'>
                <p>theroguechef@comcast.net</p>
                </a>
                </div>
            </div>
            <br /><br />
            <div className='libRight'>
                <RouterLink className='libBox' to='/toLove'>To Love</RouterLink>
                <RouterLink className='libBox' to='/mvi'>Me vs I</RouterLink>
                <RouterLink className='libBox' to='/late'>Late</RouterLink>
                <RouterLink className='DRLibBox' to='/dr'>Diarrhetic Reaction</RouterLink>
                <RouterLink className='HGHLibBox' to='/hgh'>Haters Gonna Hate</RouterLink>
                <RouterLink className='DRLibBox' to='/keegs'>Keegity Keegers</RouterLink>
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default Library;