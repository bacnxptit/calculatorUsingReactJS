import React ,{useState,useEffect} from "react";
function todoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Hàm để lưu tasks vào Local Storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Lấy tasks từ Local Storage khi ứng dụng khởi động
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Hàm xử lý thêm task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      setTask('');
      saveTasksToLocalStorage(newTasks); // Lưu vào Local Storage
    }
  };


  return (
    <div >
      <h1>To-Do List</h1>
      <div >
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default todoApp;

/*function todoApp() {
    const TDL = ()=>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("") ;
    useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos (savedTodos) ;
    },[]);
    const addtodo = () => {
    if (newTodo.trim() !== "") {
    setTodos ([...todos, { text: newTodo, completed: false }]);
    setNewTodo ("") ;
    localStorage.setItem(
    "todos",
    JSON. stringify([...todos, { text: newTodo, completed: false }])
    );
    }
};

    
return(
    <div>
    <h1>
        TodoList
    </h1>
    <input placeholder="please input" onClick={setNewTodo}></input>
    <button>app</button>

    </div>
)
}
}
export default todoApp;*/