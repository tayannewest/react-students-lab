import React from "react";
import Score from "./Score"

const Student = (props) => {
  return (
    <>
    <div>
      <p>{props.name}</p>
      <p>{props.bio}</p>
    </div>
    <div>
      <Score
        scores={props.scores}
      />
    </div>
    </>
  )
}

export default Student