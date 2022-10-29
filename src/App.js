import React , {useState} from 'react'
import TodoList from './components/TodoList';
import './App.css';

//import Todo from './components/Todo';


function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editId, setEditId] = useState();

  const addTask = (e) => {
    setTodo(e.target.value)
  }
 
  const handleSubmit = (e) => {
  e.preventDefault();
  if(!todo){
    alert('please add task');
  }else if(todo && !toggle){
        setTodoList(
          todoList.map((task)=> {
              if(task.id ===editId){
                return {...task, name:todo}
              }
              return task;
          })
        )
        setToggle(true);
        setTodo("");
        setEditId();
  }else{
  const allTodos = {id: new Date().getTime().toString(), name:todo}
    setTodoList([...todoList, allTodos]);
    console.log(todoList);
    setTodo("");
  }
  }

  const handleEdit = (id) => {
    let editTodo = todoList.find((task) => {
      return task.id === id
    });
      setToggle(false);
      setTodo(editTodo.name);
      setEditId(id);
    
  }

  const handleDelete = (id) => {
    let updatedList = todoList.filter((task) => {
      return id !== task.id;
    });
        setTodoList(updatedList);
  }

  const deleteAll = () => {
  
      setTodoList([]);
    
  }


  return (
      <div className="App">
      <h1>To-Do App</h1>
   
      <form className="todoForm" >
          <input type="text"  placeholder="Add a task" value={todo} onChange={addTask} />
            { toggle ? <button type="submit" onClick={handleSubmit}>Add</button> 
            : <button type="submit" onClick={handleSubmit}>Edit</button>} 
      </form>
      <ul>
               {/*todo*/}
              {todoList.map((task) => {
                return <TodoList key={task.id} id={task.id} item={task.name} onSelect={handleDelete} edit={handleEdit}/>  
              })}
        </ul>
        <div>
           <button onClick={deleteAll}>Delete All</button> 
        </div>
    </div>
    
    
  );
}

export default App;
