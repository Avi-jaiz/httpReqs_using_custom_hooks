import "./taskLists.css";
import { useEffect, useState ,useCallback} from "react";
import useHttps from "../Hooks/use-http";

const TaskLists = () => {
  const [taskReceive, settaskReceive] = useState([]);

  const taskReceived = [];

  const transformedTasks = useCallback((data) => {

    if(data!==null)
    {
      for (let key in data) {
        taskReceived.push({
          id: data[key].id,
          taskName: data[key].taskName,
        });
      }

    }
 

    settaskReceive(taskReceived);
  });

  const { sendRequests: fetchRequest } = useHttps(
    {
      url: "https://task-manager-f8571-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
    },
    transformedTasks
  );

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

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
