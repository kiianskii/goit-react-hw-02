

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
          {totalFeedbacks !==0 ? <p>Total: {totalFeedbacks}</p> : ""}
          {state.good !== 0 || state.bad !==0 || state.neutral !== 0 ? <p>Positive: {positive}%</p> : ""}
    </div>
  )
}

export default Feedback