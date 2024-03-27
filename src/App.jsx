import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import { useState } from "react";

function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleVote = value => {
    setState(prev => ({ ...prev, [value]: prev[value] + 1 }))
  }
  const handleDeleteVotes = () => {
		setState({ good: 0, neutral: 0, bad: 0 })
	}
  const totalFeedbacks = state.good + state.neutral + state.bad
  const positive = Math.round((state.good / totalFeedbacks) * 100)

  return (
    <>
      <Description />
      <Options handleVote={handleVote} totalFeedbacks={totalFeedbacks} handleDeleteVotes={handleDeleteVotes} />
      <Feedback totalFeedbacks={totalFeedbacks} state={state} positive={positive} />
    </>
  )
}

export default App
