import './app.css'
import Card from './component/cards/card'
import Btn from './component/btn/btn'

import logo from './component/img/pokeball.png'
import bulbasaur from './component/img/bulbasaur.gif'
import invysaur from './component/img/ivysaur.gif'
import venusaur from './component/img/venusaur.gif'
import charmander from './component/img/charmander.gif'
import charmeleon from './component/img/charmeleon.gif'
import charizard from './component/img/charizard.gif'
import squirtle from './component/img/squirtle.gif'
import wartortle from './component/img/wartortle.gif'
import blastoise from './component/img/blastoise.gif'
import caterpie from './component/img/caterpie.gif'

function App() {
    return (
        <>
            <header>
                <img className="logo" src={logo} alt="pokebola"/>
                <Btn />
            </header>
            <main>
                <ul className='listagem-pokemon'>
                    <Card name='bulbasaur' number='001' img={bulbasaur} type='grass' type2='poison' text='There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.' />
                    
                    <Card name='invysaur' number='002' img={invysaur} type='grass' type2='poison' text='When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.' />

                    <Card name='venusaur' number='003' img={venusaur} type='grass' type2='poison' text='Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.' />

                    <Card name='charmander' number='004' img={charmander} type='fire' text='It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.' />
                    
                    <Card name='charmeleon' number='005' img={charmeleon} type='fire' text='It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.' />
                    
                    <Card name='charizard' number='006' img={charizard} type='fire' text='It is said that Charizard’s fire burns hotter if it has experienced harsh battles.' />

                    <Card name='squirtle' number='007' img={squirtle} type='water' text='When it retracts its long neck into its shell, it squirts out water with vigorous force.' />
                    
                    <Card name='wartortle' number='008' img={wartortle} type='water' text='It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.' />
                    
                    <Card name='blastoise' number='009' img={blastoise} type='water' text='It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.' />
                    
                    <Card name='caterpie' number='010' img={caterpie} type='bug' text='For protection, it releases a horrible stench from the antenna on its head to drive away enemies.' />
                </ul>
            </main>
        </>
    );
}

export default App;
