
function Feedback({ totalFeedbacks, state, positive }) {
    if (totalFeedbacks === 0) {
        return (<p>
            No feedback yet!
        </p>)
    }

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