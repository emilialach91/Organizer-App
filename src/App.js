import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import CurrentDate from './components/CurrentDate';



function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task",
      day: "2021-03-05 9:30",
      reminder: false,
    },
    {
      id: 2,
      text: "Task",
      day: "2021-02-19 12:50",
      reminder: false,
    }
  ]);


  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder : !task.reminder } : task
      )
    );
  };


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      <CurrentDate />
      {showAddTask  && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        
        "No task to show"
      )}
      
    </div>
  );
}

export default App;
