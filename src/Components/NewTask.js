import "./newTask.css";
import { useState } from "react";
import Modal from "../UI/Modal";

const NewTask = (props) => {
  const [taskInput, setInputTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const [modalView, setModalView] = useState(false);

const taskTobeSent = {
    id:Math.random().toString(),
    taskName:taskInput,
}



  const taskInputHandler = (e) => {
    setInputTask(e.target.value);
    setTaskId(Math.random().toString());
  };



  const AddTaskHanlder = async (e) => {
    e.preventDefault();

    if (taskInput.length === 0) {
      setModalView(true);
      return;
    }

    props.onTaskAddition(taskId, taskInput);

  const response= await   fetch('https://task-manager-f8571-default-rtdb.asia-southeast1.firebasedatabase.app/task.json',{
method:"POST",
body:JSON.stringify(taskTobeSent),
headers:{
    "Content-Type":"application/json"
}
    })

    const data = await response.json()

    console.log(data , 'data to sent')
  };

  const modalCloseHandler = () => {
    setModalView(false);
  };

  return (
    <>
      <form className="newTaskForm">
        <div className="formInput">
          <label>New Task</label>
          <input type="text" onChange={taskInputHandler} />
        </div>

        <div className="formAction">
          <button onClick={AddTaskHanlder}>Add Task</button>
        </div>
      </form>
      {modalView && <Modal onModalView={modalCloseHandler} />}
    </>
  );
};

export default NewTask;
