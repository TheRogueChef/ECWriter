import React from 'react';
import '../style.css';
import { Link as RouterLink } from 'react-router-dom';




const HGH = () => {

    return (
        <div className='HGHShell'>
            <div className='stBar'>
                <p className='stTitle'>Haters Gonna Hate</p>
                <RouterLink className='stBtn' to='/library'>Back to Library</RouterLink>
            </div>
            <div className='HGHBox'>
                <p>
                    Why? What a miserable existence to live in a world where your filter is tainted with hate and your actions fueled by an overwhelming need to oppress and destroy. Ive said before I don’t understand how one can cohabitate in a world where every day they wake to hurt, rise to stomp. Racism is that hatred. Above the sexism and bigotry and intolerance, racism is the truest hatred. I am not diminishing those other terrible attributes all ugly and awful, but racism is hates home. The biggest problem with the racist mentality (Ha-ha, like that is a reasonable statement!) is that it can’t ever end. That visceral hatred can never be sated.
                </p>
                <p>
                    Let’s entertain for a moment that these people get what they want. The world acquiesces to their hate and they get their white bred homogentisic America. There would be the appearance of a won fight, a perceived righted wrong. But, haters gonna hate. One day a white woman in that community would speak a touch to loud or ask a question not readily accepted in their “new” America. That hate would be right back at the forefront, now leading the charge in the eradication of women’s rights and even established societal norms. Now the great new America goes to war against women, because in the new America only the white man can have power. So, that fight rages on putting all things ever fought for in the rear-view mirror of a country eating itself. The haters would once again get their way. Then what?
                </p>
                <p>
                    Now, its white man hating white man due to finances. Now the hatred looks to eat the surviving haters that aren’t in the same financial bracket. Next its due to one mans hair loss, then eventually it will simply be a small group of white men, sparsely populating what was destined to be the greatest country on Earth; living in its now desolate and rotting lands. This is the inevitable outcome of hatred. A world where there is never peace, never any contentment. Yet, we have people who want this outcome as sad and terrible as it may be. They are willing to do whatever it takes to make this doomed scenario prevail.
                </p>
                <p>
                    I don’t hold a place for these people. I cannot stand by and label them as misunderstood or deceived, they are haters. I understand anger better than most. I understand righteous anger better than most, I understand vitriol and venom better than most. But mass hatred birthed in fear and nurtured by power is not acceptable. We cannot as a human species survive this. We cannot tolerate this. I, being a flawed man, cannot say with a true consciousness that this is something we can ‘love’ out of people. We have to label this as to what it truly is, terrorism. Racism equals terrorism. We do not accept these acts in our country. They should be treated as such and eradicated from a progressive, inclusive America. No more can we allow the idea of what our fathers deemed as free speech be hijacked as an opinion or point of view when its sum is still coming from hate. This has to end, it’s the only way we move forward as a species, together, all colors, all genders, all everything. America is everything, and we are all the unique bits of the recipe that make what we can be amazing.
                </p>
                <p>
                    Haters gonna hate, but we don’t have to end the statement there.
                </p>
                <RouterLink className='home' to='/'>Home</RouterLink>
            </div>
        </div>
    );
};

export default HGH;