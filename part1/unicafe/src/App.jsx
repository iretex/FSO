import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Buttons'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood((good) => good + 1)
  const neutralFeedback = () => setNeutral((neutral) => neutral + 1)
  const badFeedback = () => setBad((bad) => bad + 1)

  return (
    <>
      <div>
        <Header />
        <Button 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          goodFeedback={goodFeedback} 
          neutralFeedback={neutralFeedback} 
          badFeedback={badFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
      
    </>
  )
}

export default App
