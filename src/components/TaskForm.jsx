export default function TaskForm({
  modal,
  setModal,
  newTask,
  handleChange,
  saveTask,
  editingTaskId,
   setEditingTaskId,
     setNewTask,
}) {
  if (!modal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{editingTaskId ? "Update Task" : "Add Task"}</h3>

        <input
          className="search-input"
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          placeholder="Enter Title"
        />
        <input
          className="search-input"
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleChange}
          placeholder="Enter Description"
        />
        <input
          className="search-input"
          type="date"
          name="duedate"
          value={newTask.duedate}
          onChange={handleChange}
        />
        <input
          className="search-input"
          type="time"
          name="duetime"
          value={newTask.duetime}
          onChange={handleChange}
        />

        <div className="actions">
          <button className="btn" onClick={saveTask}>
            {editingTaskId ? "Update" : "Add"}
          </button>
          <button className="btn danger" onClick={() =>{ setModal(false);
            setEditingTaskId(null);
            setNewTask({ title: "", description: "", duedate: "", duetime: "" });}}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
