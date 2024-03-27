

function Options({ data, handleVote, totalFeedbacks, handleDeleteVotes}) {
  return (
      <div>
          {data.map(btn => (
					<button onClick={() => handleVote(btn)} key={btn}>
						{btn}
					</button>
          ))}
          {totalFeedbacks !== 0 ? <button onClick={handleDeleteVotes}>Reset</button> : ""}
    </div>
  )
}

export default Options