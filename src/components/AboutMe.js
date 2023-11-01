import React from 'react';
import '../components/style.css';
import { Link as RouterLink } from 'react-router-dom';


const AboutMe = () => {

    return (
        <div className='AMShell'>
            <div className='AMLeft'>
                <p>I'm Erik Carlson, and I have been here a long time. I seem to have experienced so many of lifes adventures from being the front man for a rock band to becoming a high profile Executive Chef to learning how to write code and create cool websites. I have also experienced the other side of lifes adventures like losing my best friend in a horrible way to navigating through a deeply painful divorce to trying to live with mid life depression and self worth issues. Like I said, I have been here a long time. While living my life I have learned many things and I always have an opnion lifted by a loud voice and a weird need to try and get these feelings written, although I honestly have a very difficult time reading most of what I write.</p>
                <p>During my many years I have accumulated many written pieces. Most of them autobigraphical and seeking something. I feel like these things are typical. I don't see myself as anything other than a regular person who was born in the early ages of Aquarius. But, as I have been told MANY times, I talk alot. In all those words people seem to find common threads. A little piece of their life recognition pops up in my words. I am by no means some great intellectual being, nor do I believe that my opinions are the way things should or could be, but I have a point of view and the ability to emote through those words a shared feeling.</p>
                <p>That brings me to this site. as you will read I often ask during my writing periods, "Why would anyone care about what I'm writing?". I guess I'm coming to the conclusion that people need to see that we all share seats on the bus of life. My inability to keep my mouth shut or keep my thoughts to myself has, of course, allowed me to say what others are thinking and feeling. I've had people read my stuff and say to me that they were thinking the same things, but didnt quite know how to say it out loud. I have also had others read my stuff and think, "What a megalomaniac this guy is! He thinks life should be this and that, when really it's not." Either way, I want to have a place I can put these thoughts. I want a place others can read my stuff and feel like someone gets it. I want people to read my stuff and not feel too distant or like they cant relate simply because noone has said what they were thinking in the way they were thinking it.</p>
                <p>Regardless of what you take away from your time spent here reading, I hope you take something away, even if its a little smirk or an 'F-You Erik', take something. If you like what I'm writing, let me know. Let others know. Hell, let the whole world know.
                </p>
                <p>Dig in.</p>
                <br />
                <RouterLink className='home' to='/'>Home</RouterLink>
                </div>
                <div className="AMRight">
                <RouterLink className='AMBtn' to='/library'>My Library</RouterLink>
                </div>
        </div>
    );
};

export default AboutMe;