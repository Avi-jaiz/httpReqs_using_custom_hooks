import { useState } from 'react';
import './App.css';
import './Components/NewTask'
import NewTask from './Components/NewTask';
import TaskLists from './Components/TaskList';
import Modal from './UI/Modal';

function App(props) {
const [tasks,setTask] = useState([
  {
    id:"",
    taskName:"",
  }
]);


  const taskAddingHandler=(id,task)=>
  {
        setTask((prevState)=> [{id:id,taskName:task},...prevState])
  }





  return (
    <div className="App">
   <NewTask  onTaskAddition={taskAddingHandler} />
   <TaskLists taskLists={tasks}/>


    </div>
  );
}

export default App;
