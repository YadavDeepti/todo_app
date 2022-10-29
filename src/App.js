import React , {useState} from 'react'
import TodoList from './components/TodoList';
import './App.css';

//import Todo from './components/Todo';


function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);


  const addTask = (e) => {
    setTodo(e.target.value)
  }
 
  const handleSubmit = (e) => {
  e.preventDefault();

    //if(todo !== ""){
    setTodoList([...todoList, todo]);
    console.log(todoList);
    setTodo("");
   // }
  }

  const handleEdit = () => {}

  const handleDelete = (id) => {
    console.log("clicked delete");
    setTodoList((allTask) => {
          return allTask.filter((task, index) => {
                 return index !== id ;
          })
    })
  }


  return (
      <div className="App">
      <h1>To-Do App</h1>
   
      <form className="todoForm" >
          <input type="text"  placeholder="Add a task" value={todo} onChange={addTask} />
             <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
      <ul>
               {/*todo*/}
              {todoList.map((t, index) => {
                return <TodoList key={index} id={index} item={t} onSelect={handleDelete}/>  
              })}
        </ul>
    </div>
    
    
  );
}

export default App;
