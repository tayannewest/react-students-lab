import React from "react";

const Score = (props) => {
  const scores = props.scores.map((ele, index) => {
    return (
      <div>
          <p>{ele.date}</p>
          <p>{ele.score}</p>
      </div>
    )
  })

  return (
    <div>
      {scores}
    </div>
  )
}

export default Score