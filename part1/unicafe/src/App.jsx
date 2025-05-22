import { useState } from 'react'

const SurveyButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  
  const all = good + neutral + bad
  const average = (good - bad) / all

  return (
    <div>
      <h1>give feedback</h1>
      <SurveyButton text={'good'} onClick={incrementGood} />
      <SurveyButton text={'neutral'} onClick={incrementNeutral} />
      <SurveyButton text={'bad'} onClick={incrementBad} />
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {good*100/all}%</div>
    </div>
  )
}

export default App