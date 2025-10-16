import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  searchtask,
  updateTask,
  deleteTask,
  setModal,
  setIsEditing,
  setCurrentTask,
}) {
  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchtask.toLowerCase())
  );

  return (
    <ul className="task-list">
      {filteredTasks.length === 0 ? (
        <li className="muted">No tasks yet.</li>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            onEdit={() => {
              setCurrentTask(task); // Set selected task for editing
              setIsEditing(true);   // Enable edit mode
              setModal(true);       // Open modal form
            }}
          />
        ))
      )}
    </ul>
  );
}
