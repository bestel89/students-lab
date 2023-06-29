import Scores from "./Scores"
import "../styles/Student.css"


function Student({ students }){

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      {students.map((student, idx) => 
        <div key={idx} className="Student card my-3 p-4">
          <h5 className="card-title">{student.name}</h5>
          <p className="fw-semibold mt-4">Biography:</p>
          <p>{student.bio}</p>
          <p className="fw-semibold mt-4">Scores in recent games:</p>
          <Scores student={student} key={idx}/>
        </div>
      )}
    </div>
  )
}

export default Student