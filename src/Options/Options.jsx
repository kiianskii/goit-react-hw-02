
function Options({ handleVote, totalFeedbacks, handleDeleteVotes}) {
  return (
      <div>
          <button onClick={() => handleVote("good")}>Good</button>
          <button onClick={() => handleVote("bad")}>Bad</button>
          <button onClick={() => handleVote("neutral")}>Neutral</button>

          {totalFeedbacks !== 0 ? <button onClick={handleDeleteVotes}>Reset</button> : ""}
    </div>
  )
}

export default Options