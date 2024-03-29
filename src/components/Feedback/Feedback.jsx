
function Feedback({ totalFeedbacks, state, positive }) {
  
  return (
      <div>
          <p>Good: {state.good}</p>
          <p>Bad: {state.bad}</p>
          <p>Neutral: {state.neutral}</p>
          <p>Total: {totalFeedbacks}</p>
          <p>Positive: {positive}%</p>
    </div>
  )
}

export default Feedback