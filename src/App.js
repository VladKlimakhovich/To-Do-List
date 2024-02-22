import React from 'react';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
}
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

return (
  <div className="todo-list">
    <h2>To-Do List</h2>
    <div className="add-task">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
}


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
