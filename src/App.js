import React from 'react'
import { nanoid } from 'nanoid'
import './scss/main.scss'
import Container from './components/Container'
import Dice from './components/Dice'
import Button from './components/Button'
import Header from './components/Header'
import Confetti from './components/Confetti'

function App() {
	const [counter, setCounter] = React.useState(0)
	const [dices, setDices] = React.useState(newDice())
	const [tenzies, setTenzies] = React.useState(false)
	const [timeTracker, setTimeTracker] = React.useState(0)

	React.useEffect(() => {
		const dicesAreEqual = dices.every(
			dice => dice.value === dices[0].value && dice.isHeld
		)

		if (dicesAreEqual) {
			setTenzies(true)
			console.log('you won bitch')
		}
	}, [dices])

	function addToCounter() {
		setCounter(prevCounter => prevCounter + 1)
	}

	function restarToZero() {
		setCounter(0)
	}

	function newDice() {
		const diceNumbers = []
		for (let i = 0; i < 10; i++) {
			diceNumbers.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			})
		}
		return diceNumbers
	}

	function updateDiceNumber() {
		addToCounter()
		setDices(prevDices =>
			prevDices.map(dice =>
				!dice.isHeld
					? { ...dice, value: Math.ceil(Math.random() * 6) }
					: dice
			)
		)
	}

	function restarGame() {
		setDices(newDice())
		setTenzies(false)
		restarToZero()
        setTimeTracker(0)
		clearInterval(timeTracker)
	}

	function holdDice(id) {
		setDices(prevDices =>
			prevDices.map(dice => {
				return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
			})
		)
	}

	React.useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeTracker(prevTimeTracker => prevTimeTracker + 1)
            console.log('timer', timeTracker)
        }, 1000)

    }, [])

	return (
		<main className="main">
			<Header counter={counter} timeTracker={timeTracker}/>
			<Container>
				{dices.map((dice, index) => {
					return (
						<Dice
							key={index}
							value={dice.value}
							isHeld={dice.isHeld}
							holdDice={() => holdDice(dice.id)}
						/>
					)
				})}
			</Container>
			<Button
				updateDiceNumber={updateDiceNumber}
				restarGame={restarGame}
				dices={dices}
				tenzies={tenzies}
			/>

			{tenzies && <Confetti />}
		</main>
	)
}

export default App
