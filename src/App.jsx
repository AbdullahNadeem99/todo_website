import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import DeleteModal from "./components/DeleteModal";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({title: "",description: "",duedate: "",duetime: "",
  });
  const [modal, setModal] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchtask, setSearchTask] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  }

  function saveTask() {
    if (editingTaskId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId ? { ...task, ...newTask } : task
        )
      );
      setEditingTaskId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), ...newTask }]);
    }
    setNewTask({ title: "", description: "", duedate: "", duetime: "" });
    setModal(false);
  }

  function updateTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setNewTask({
        title: taskToEdit.title,
        description: taskToEdit.description,
        duedate: taskToEdit.duedate,
        duetime: taskToEdit.duetime,
      });
      setEditingTaskId(id);
      setModal(true);
    }
  }

  function handleDeleteClick(id) {
    setTaskToDelete(id);
    setDeleteModal(true);
  }

  function confirmDelete() {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setTaskToDelete(null);
    setDeleteModal(false);
  }

  return (
    <div className="card">
      <h3 className="todo">TODO LIST</h3>
      <button className="fabbtn" onClick={() => setModal(true)}>
        Add
      </button>

      {tasks.length > 5 && (
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks by title..."
          value={searchtask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
      )}

      <TaskList
        tasks={tasks}
        searchtask={searchtask}
        updateTask={updateTask}
        deleteTask={handleDeleteClick}
      />

      <TaskForm
        modal={modal}
        setModal={setModal}
        newTask={newTask}
        handleChange={handleChange}
        saveTask={saveTask}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
         setNewTask={setNewTask}
      />

      <DeleteModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
