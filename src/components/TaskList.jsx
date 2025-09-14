import TaskItem from "./TaskItem";

export default function TaskList({ tasks, searchtask, updateTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="muted">No tasks yet.</li>
      ) : (
        tasks
          .filter((task) =>
            task.title.toLowerCase().includes(searchtask.toLowerCase())
          )
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))
      )}
    </ul>
  );
}
