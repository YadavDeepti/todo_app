import React from 'react'

function TodoList(props) {

 
  return (
    <div>
       <li> {props.item} <button onClick={() => {props.edit(props.id)}}>Edit</button>
                                    <button onClick={() =>{
                                      props.onSelect(props.id)
                                    }}>
                                      Delete</button> </li>
    </div>
  )
}

export default TodoList;

