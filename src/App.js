import React from "react"
import './App.css';
import studentArr from "./studentData"
import Student from "./Student"

function App() {
  const students = studentArr.map((ele, index) => {
    return (
      <Student 
      name={ele.name}
      bio={ele.bio}
      scores={ele.scores}
      key={index}
      />
    )
  })

  return (
    <div className="App">
      {students}
    </div>
  );
}

export default App;
