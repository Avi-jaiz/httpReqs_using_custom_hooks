import "./taskLists.css";
import { useEffect } from "react";

const TaskLists = (props) => {
  const taskReceived = [];

  const taskFetched = async () => {
    const response = await fetch(
      "https://task-manager-f8571-default-rtdb.asia-southeast1.firebasedatabase.app/task.json"
    );

    const data = await response.json();

    
if(data!==null)
{
  Object.keys(data).forEach((key) => {
    taskReceived.push(data[key]);
  });

}
   

    
  };

  // console.log(taskReceived, "task in array");

  useEffect(() => {
    taskFetched();
  }, [taskReceived]);

  // console.log(taskReceived, "taskReceived");
console.log(taskReceived)
  for(let i=0;i<taskReceived.length;i++)
  {
    console.log(taskReceived)
  }

  return (
    <div className="taskLists">
      {taskReceived.map((item) => {
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
