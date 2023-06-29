import '../styles/Scores.css'

function Scores({ student, idx }){

  return (
    <div className="score-container">
      {student.scores.map((score, idx) => 
        <div key={idx} className="score card p-2 me-5">
          <p>Date: {score.date}</p>
          <p>Score: {score.score}</p>
        </div>
      )}
    </div>
  )
}

export default Scores