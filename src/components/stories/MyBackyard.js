import React from 'react';
import '../style.css';
import { Link as RouterLink } from 'react-router-dom';



const MyBackyard = () => {

    return (
        <div className='BYShell'>
            <div className='stBar'>
                <p className='DRTitle'>My Backyard</p>
                <RouterLink className='stBtn' to='/library'>Back to Library</RouterLink>
            </div >
            <div className='NPBox'>
                <p>
                The gentle fall of the downhill stream. The water dropping from rock to rock with musical tones, it’s calming. The waters sound taking me to so many places, some real, some not. The soothing it brings feels medicinal, purposeful. In stereo concert with the cascading water song, a bamboo wind chime softly sways a melody of hand cut tones. The depth of each note calls to mind beautiful tapestries of peaceful and tranquil societies, Monks in Tibet, Japanese gardens of luxury for ancient dynasties, foreign lands of lush greenery. Songs of wind in the trees tapping out bamboo poems. The mind wanders.
                </p>
                <p>
                A rolling gallery of color parades by. Almost daily new feasts play out, inviting the eye to the bold and bright interwoven with the delicate and hidden. Textures of green camouflage hidden emeralds, all the while pushing and stretching its arms to sun and show. The red maple an explosion of drama season after season. Its presence, a centerpiece among a setting of planted thousands. Now, it rests rich in ambers and hues of light green grace upon its topmost buddings. In the fall it burns with an incredible sapphire, a fire of colors burning from reds to yellows. The show it is performing in makes one admire the time and old determination it so proudly puts forth. From its branches hang our songs of nature. Manmade offerings to our own mini world of nature. Each to live a life of sounds, gently serenading until nature reclaims it back and another offering is hung.
                </p>
                <RouterLink className='home' to='/'>Home</RouterLink>
            </div>
        </div>
    );
};

export default MyBackyard;