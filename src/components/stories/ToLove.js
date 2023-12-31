import React from 'react';
import '../style.css';
import { Link as RouterLink } from 'react-router-dom';



const ToLove = () => {

    return (
        <div className='TLShell'>
            <div className='stBar'>
                <p className='stTitle'>To Love</p>
                <RouterLink className='stBtn' to='/library'>Back to Library</RouterLink>
            </div>
            <p className='TLBox'>  I think it can be said that love is intangible. It has no real form, yet it can be anything. It is my Force. It surrounds us and it binds us. (I am showing my real nerd here!!) But, as campy the source may seem, it feels true. Love is something that does surround us. It acts as a shield to so many things and in turn can smother and suffocate with crushing precision. Love is ageless and boundless, then judgmental and sheltered. It is something that not given the opportunity to experience one could exist on, content and blissfully unaware. But when you have that moment when you know love is there, it becomes the air of all things. All contrast aside, it is an amazing, wonderful and delicious thing Love is, perfectly crafted of chaos and wonderment.
            </p>
            <p className='TLBox'>
                I have been married to my wife for over 21 years. Love has been the fluffy layer of comfort over the solid foundation of respect we live by. Its funny how all the cliches feel small and hollow as real descriptors when they truly can’t do justice for the real meaning and feelings behind them are, however, they do tend to encapsulate the words pretty well. Our popular human culture has refined them down to greeting card blurbs that sing at you the moment the card opens. But….I am the luckiest man in the world. I have a wife with whom I share about 42% in common with. We come from different childhoods and extremely different ‘after-childhood-before-real-life’ times. Our hearts beat the same though. We think morally and ethically with one mind. And, every day I fall more in love with her. I have become an emotional man as I move up in years; a much more reflective man. I don’t take for granted any of what I have. In fact, many days I sit back and marvel, wondering how did this happen to me. My wife is really my best friend. I watch her talking to others as we socialize, stealing glances at her as her smile broadens across her face. She is beautiful. Not only in the ways we judge beauty, but thoroughly and truly beautiful. Her kindness wafts off her with gentle grace like the most pleasing perfume. Her inner person is one that sees the world in its infinite possibilities no matter how I cynically harp away in her ear. Sometimes, I ache with a love so deep I can well up. As silly as that sounds, the knowledge that this wonderful woman has chosen to spend her remaining years on this planet with me, ME of all people! It can be overwhelming. Still I feel profoundly how she loves me. It’s a known, it’s my Force, it runs through me, it binds us.
            </p>
            <p className='TLBox'>
                I too, am a father of a 16-year-old young man. Here too the cliches are appropriate. He amazes me. He always has. He has never been a problem. That’s not some fabricated and diluted parental memory that Ive generated because our children are never problems, it lies in the simple fact he has always been easy going. His temperament is from my wife, calm, collected. I find the hardest part about raising him is not seeing him through his filter but my own. At his age I was acting completely as an adult (acting not really being), I was doing most of the bad thing you would not want your son to do. So, when situations arise, I see him through the eyes of my now 51-year-old self. But, he’s not me and he’s simply extraordinary. He inspires me every day to do better, be better. Through his eyes, in the moments he shares with me, I see love and understanding far deeper than I ever knew or would really even consider at his age. He, like his mother, exudes that dizzying aroma of kindness. He cares for his friends and I see a man in him of integrity and decency. He loves me. I feel this. I know this. He is a typical teenager that has not strayed. He still talks with his mother and I frequently about anything we are brave enough to ask. He has been raised so loosely by us, but always guided and mentored. We have taught by sharing and loving, all laid heavily on the solid foundation of respect. We all swear pretty badly, yes even my teen and I really don’t give a fuck if that bothers you. Still, we have never nor will ever swear at each other, as that cracks our anchor of respect. He will be a good man, a strong fair man. He will be the most wonderful love of some person’s life and we are all better for that. That feeds the roots of love, when our children are loved deeply because of the human we watched grow, watched bloom.
            </p>
            <p className='TLBox' >
                See, cliches riddle the landscape, but remain true. They do distill the ideas surrounding those feelings pretty well sometimes. As I read back over this, I smile thinking, ‘geez Erik, what are you writing??’ Knowing full and well these words can only scratch the surface of what I really mean to say, but they will have to do. I follow no religion in my life and often don’t utilize the words surrounding faith, but when I think of my wife; my son, I can appreciate my own form of the word, blessed. My only real hope is general and big everybody, love those that you want to love. Let those you want to love you, love you. It can become your everything, the only thing that you do or would ever want to do. It is my Force. It is my oxygen. I am truly the luckiest man in the world.
            </p>
            <RouterLink className='home' to='/'>Home</RouterLink>
        </div>
    );
};

export default ToLove;