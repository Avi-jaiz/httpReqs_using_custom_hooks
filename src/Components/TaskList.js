import "./taskLists.css";
import { useEffect, useState } from "react";

const TaskLists = (props) => {
  const [taskReceive, settaskReceive] = useState([]);

  const taskReceived = [];

  const taskFetched = async () => {
    const response = await fetch(
      "https://task-manager-f8571-default-rtdb.asia-southeast1.firebasedatabase.app/task.json"
    );

    const data = await response.json();

    // if(data!==null)
    // {
    //   Object.keys(data).forEach((key) => {
    //     taskReceived.push(data[key]);
    //   });

    // }

    for (let key in data) {
      taskReceived.push({
        id: data[key].id,
        taskName: data[key].taskName,
      });
    }
    //  console.log(taskReceived[0].taskName, "task received")
    settaskReceive(taskReceived);
  };

  // console.log(taskReceived, "task in array");

  useEffect(() => {
    taskFetched();
  }, [taskFetched]);

  // console.log(taskReceived, "taskReceived");

  return (
    <div className="taskLists">
      {taskReceive.map((item) => {
        return (
          <div className="task" key={item.id}>
            <h3>{item.taskName}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TaskLists;
