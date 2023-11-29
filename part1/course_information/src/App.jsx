import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {

  
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a Component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
        {/* Content */}
        {/* <p>
          {part1} {exercise1}
        </p>
        <p>
          {part2} {exercise2}
        </p>
        <p>
          {part3} {exercise3}
        </p> */}
        {/* Content Component */}
        </div>
        {/* <Content part1 = {part1} exercise1 = {exercise1}/>
        <Content part1 = {part2} exercise2 = {exercise2}/>
        <Content part1 = {part3} exercise3 = {exercise3}/> */}

        {/* Header Component */}
        <Header course={course} />
        {/* Content */}
        
        {/* Version 1 */}
        {/* <Content part1={part1} part2={part2} part3={part3} exercise1 = {exercise1} exercise2 = {exercise2} exercise3 = {exercise3}/> */}
        
        {/* Version 2 */}
        {/* <Content part1={part1} part2={part2} part3={part3} /> */}
        <Content course={course} />
        
        {/* Total */}
        
        {/* Version 0 */}
        {/* <p>
          Number of exercises {exercise1 + exercise2 + exercise3}
        </p> */}

        {/* Version 2 */}
        {/* <Total part1 = {part1} part2 = {part2} part3 = {part3} /> */}
        
        <Total course = {course} />
      <div/>
    </>
  )
}

export default App
