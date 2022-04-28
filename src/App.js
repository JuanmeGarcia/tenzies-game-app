import React from 'react'

import './scss/main.scss';
import Container from './components/Container';
import Dice from './components/Dice';
import Button from './components/Button';
import Header from './components/Header';

function App() {
    const [dices, setDices] = React.useState(newDice());
    
    function newDice() {
        const diceNumbers = []
        for(let i = 0; i < 10; i++){
            let diceNumber = Math.floor(Math.random() * 6);
            diceNumbers.push(diceNumber);
        }
        return diceNumbers;
    }
    
    function updateDiceNumber(){
        setDices(newDice());
    }

	return (
        <main className='main'>
            <Container>
                {dices.map((dice, index) =>{
                    return <Dice key={index} value={dice} />
                })}
            </Container>
            <Button updateDiceNumber={updateDiceNumber}/>
        </main>
    )
}

export default App
