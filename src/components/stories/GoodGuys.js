import React from 'react';
import '../style.css';
import { Link as RouterLink } from 'react-router-dom';



const GoodGuys = () => {

    return (
        <div className='GGShell'>
            <div className='stBar'>
                <p className='DRTitle'>Good Guys</p>
                <RouterLink className='stBtn' to='/library'>Back to Library</RouterLink>
            </div >
            <div className='DRBox'>
                <p>
                In the movies at the crescendo of duress the same thing happens. In that moment where all is lost if evil prevails, we see the good guys down and cornered. The protagonists have been beaten down and in their rapidly dwindling final seconds are reaching out for the shared force of goodness, then against all odds they find the cosmically available thread of decency and end the story on the morally right choice. We, being the media infused species that we are, seem to accept this as how life works. And in our polarized today, we can easily recognize ourselves on our current American political landscape as good guys and bad guys. Of course, everyone believing your view always affording you the position of the good guy. However, I would argue that the judgement of your personal character is not in your position, it is in the bedrock of your reasoning. What I mean is what angle you wish to see a situation go in is directly aligned with how you reason it will benefit you and yours in some way and not in what you say you want. Simply, walking the walk and not spewing grand words whilst privately dismantling groundwork. 
                </p>
                <p>
                Unfortunately, that’s not how this life thing works. In the context of politics, the battle between the good guys and the bad guys is always about power. In a very general sense, it is about where that power should lie, whether that be with a small controlling body or the population at large. I see things through an extreme lens when it comes to all this government activities that happen. But I believe that radical or not, the bedrock for both ends of the political spectrum is based strongly on how to keep that power.  OK, now that I have understood and observed the power struggle for a long time in our government. But now we see the Why.
                </p>
                <p>
                I by no means am so great fount of detailed historical knowledge, I am an everyman. I worry about day-to-day things just like the rest of middle America and inform myself when needed. But overall, I am keyed into topics of the day and the general optics of our political climate. This is where I see the Why. I see where one side is basing their reason for power control on how to make our country smaller. A more of a ‘members only’ country club. A small, narrow-minded group that in their opinion would also garnish the ability to create and maintain all laws and systems for the country that we all share. However, given their agenda the control would not stop there. They would eventually believe that those that were not in agreement with this new Orwellian form of life should leave or be eradicated in some way to preserve that freedom prohibitive and autocratically controlled America they so strongly wish for. The read of all historical documents by this group would be viewed through blind eyes. The idea that our Constitution is a living breathing piece of our continental agreement is foreign through their eyes. It is a stone tablet, not representing a fledgling country over 300 years ago, but scripture from all seeing forebearers that would never alter, even though we are a progressive culture. In this blindness their power is robust, as bad guys never sleep.
                </p>
                <p>
                In the movies the bad guys have their Alpha. Some horrible despot bent on control through any means necessary. One always singularly concerned in their own personal success, damning any underling to fry for their win. Yet, the followers always blindly follow along thinking they will be the different one and their king or queen will still allow a moment at their robe’s edges for them. Time and time again we see the leader of these regimes stomping on all their minions, be they high ups, personal whatevers or family members both blood and marriage. Their masses again fueling a machine that bears total power to which they must obey and feed. The laws they have subscribed to get written to only include what their leader likes. Their decisions day-to-day are informed by only what their party wants them to know. They are told by their government where to go when and what they will be allowed to do when they get there. These are the actions of one small group, power hungry for control to shape a world of their design and omit all differences to that cause. That sounds like bad guys to me.
                </p>
                <p>
                As I said before, everyone sees themselves as good guys. Good guys place their basis for power in another stream of consciousness, the peoples. The good guys come from a place of equality first. They come into a situation evaluating the pros and cons of the situation. The outcome based firmly in the idea that the power for American life rests with the general population. That the growth and success from our progressive country will only be available if we pool all this country’s human resources and band them into one unit. In the culture of inclusivity there is a natural level of equality in fairness. In a country where all people are represented at the same table the trajectory changes. No longer is there conflict over rights or liberties, but a conversation about how to enhance the governments systems, which had truly been reimagined with all involved, to become stronger and more supportive to the people. The people are then truly represented by themselves. Career politician would no longer be any type of career, but instead our government becomes a fluid body of representatives offering new innovations and ideas on how we get stronger. This is where the good guy in every movie comes from. What’s fair? What includes all? 
                </p>   
                <p>
                Now, reality. The good guys are losing. The bad guys are winning.    
                </p>
                <RouterLink className='home' to='/'>Home</RouterLink>
            </div>
        </div>
    );
};

export default GoodGuys;