import React from 'react'

function TodoList(props) {

 
  return (
    <div>
       <li className='li-list'> {props.item} <div>
       <button className='button' onClick={() => {props.edit(props.id)}}>Edit</button>
                                    <button className = 'button' onClick={() =>{
                                      props.onSelect(props.id)
                                    }}>
                                      Delete</button></div> </li>
    </div>
  )
}

export default TodoList;

