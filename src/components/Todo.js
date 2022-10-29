import React from 'react'

function todo(props) {
  return (
    <div className={props.todo.complete ? "strike" : ""}>
      {props.todo.task}
    </div>
  )
}

export default todo;
