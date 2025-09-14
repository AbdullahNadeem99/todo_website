export default function TaskItem({ task, updateTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="title">{task.title}</div>
      <div className="description">{task.description}</div>
      <div className="meta">
        <span className="due-date">{task.duedate}</span>
        <span className="due-time">{task.duetime}</span>
      </div>

      <div className="list-btns">
        <button className="btn" onClick={() => updateTask(task.id)}>
          Update
        </button>
        <button className="btn danger" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
