import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import { useState, useEffect } from "react";

const test = { good: 0, neutral: 0, bad: 0 }

function App() {
  const [state, setState] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("saved-data"));
    if (savedClicks) {
      return savedClicks;
    }
    return test;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-data", JSON.stringify(state));
  }, [state]);


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
