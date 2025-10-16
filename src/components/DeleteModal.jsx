import { X } from "lucide-react";
export default function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Are you sure you want to delete this task?</h3>
        <div className="actions">
          <button className="btnnn" onClick={onConfirm}>
            Delete
          </button>
          <button className="btn danger" onClick={onClose}>
            <X size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}
