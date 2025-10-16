export default function TaskModal({ children, isEditing, onClose }) {
      const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <h3>{isEditing ? "Update Task" : "Add Task"}</h3>
        {children}
        
      </div>
    </div>
  );
}
