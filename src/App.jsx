import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import DeleteModal from "./components/DeleteModal";
import { Plus } from "lucide-react";
import Navbar from "./components/Navbar";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchTask, setSearchTask] = useState(""); // renamed for consistency
  const [deleteModal, setDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  function addTask(newTask) {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  }

  function handleDeleteClick(id) {
    setTaskToDelete(id);
    setDeleteModal(true);
  }

  function updateTask(updatedTask) {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  }

  function confirmDelete() {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setTaskToDelete(null);
    setDeleteModal(false);
  }

  return (
    <>
      <Navbar
        tasks={tasks}
        searchTask={searchTask}
        setSearchTask={setSearchTask}
      />

      <div className="card">
        <button className="fabbtn" onClick={() => setModal(true)}>
          <Plus size={28} />
        </button>

        <TaskList
          tasks={tasks}
          searchtask={searchTask} // pass filtered tasks to TaskList
          deleteTask={handleDeleteClick}
          updateTask={updateTask}
          setModal={setModal}
          setIsEditing={setIsEditing}
          setCurrentTask={setCurrentTask}
        />

        <TaskForm
          modal={modal}
          setModal={setModal}
          addTask={addTask}
          updateTask={updateTask}
          isEditing={isEditing}
          currentTask={currentTask}
          setIsEditing={setIsEditing}
          setCurrentTask={setCurrentTask}
        />

        <DeleteModal
          isOpen={deleteModal}
          onClose={() => setDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      </div>
    </>
  );
}
