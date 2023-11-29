import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import Button from './components/Button'
import Vote from './components/Vote'
import Header from './components/Header'
import Summary from './components/Summary'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const pointData = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(pointData)

  let maxPoints = Math.max(...point)

  const voteHandler = (selected) => {
    setPoint(point => {
      const points = [...point]
      points[selected] += 1
      return points
    });
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  const chooseSelected = () => setSelected(getRandomInt(0, anecdotes.length))

  return (
    <>
      <div>
        <Header />
        <Content text={anecdotes[selected]} points={point[selected]} />
        <Vote onSmash={() => voteHandler(selected)} />
        <Button onSmash={chooseSelected} />
        <Summary text={anecdotes[point.indexOf(maxPoints)]} points={maxPoints} />
      </div>
    </>
  )
}

export default App
