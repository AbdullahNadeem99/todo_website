import { Edit, Trash2 } from "lucide-react";

export default function TaskItem({ task, onEdit, deleteTask }) {
  return (
    <li className="task-item" role="listitem">
      <div>
        <div className="title">{task.title}</div>
        <div className="description">{task.description}</div>

        <div className="meta">
          <span className="due-date">{task.duedate}</span>
          <span className="due-time">{task.duetime}</span>
          <span className="priority">Priority: {task.priority}</span>
          <span className="status">Status: {task.status}</span>
        </div>
      </div>

      <div className="list-btns">
        <button
          type="button"
          className="icon-btn edit"
          onClick={onEdit}
          title="Edit task"
          aria-label={`Edit ${task.title}`}
        >
          <Edit size={18} />
        </button>

        <button
          type="button"
          className="icon-btn delete"
          onClick={() => deleteTask(task.id)}
          title="Delete task"
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
