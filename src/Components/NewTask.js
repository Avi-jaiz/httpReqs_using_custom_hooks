import "./newTask.css";
import { useCallback, useState } from "react";
import Modal from "../UI/Modal";
import useHttps from "../Hooks/use-http";

const NewTask = (props) => {
  const [taskInput, setInputTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const [modalView, setModalView] = useState(false);

  const taskSendingFunction = useCallback(() => {
    const taskTobeSent = {
      id: Math.random().toString(),
      taskName: taskInput,
    };
    return taskTobeSent;
  });

  const { sendRequests: sendRequest } = useHttps(
    {
      url: "https://task-manager-f8571-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: taskSendingFunction(),
    },
    taskSendingFunction
  );

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

    sendRequest();
    setInputTask("");
  };

  const modalCloseHandler = () => {
    setModalView(false);
  };

  return (
    <>
      <form className="newTaskForm">
        <div className="formInput">
          <label>New Task</label>
          <input type="text" onChange={taskInputHandler} value={taskInput} />
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
