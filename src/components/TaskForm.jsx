import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./TaskSchema";
import FormFields from "./FormFields";
import TaskModal from "./TaskModal";
import {X} from "lucide-react";

export default function TaskForm({
  modal,
  setModal,
  addTask,
  updateTask,
  isEditing,
  currentTask,
  setIsEditing,
  setCurrentTask,
}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset(isEditing && currentTask ? currentTask : {
      title: "", description: "", duedate: "", duetime: "", priority: "", status: "",
    });
  }, [isEditing, currentTask, reset]);

  const onSubmit = (data) => {
    isEditing ? updateTask({ ...currentTask, ...data }) : addTask(data);
    setIsEditing(false);
    setCurrentTask(null);
    setModal(false);
    reset();
  };

  if (!modal) return null;

  return (
    <TaskModal
      isEditing={isEditing}
      onClose={() => {
        setModal(false);
        setIsEditing(false);
        setCurrentTask(null);
        reset();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
  <FormFields register={register} errors={errors} />

  <div className="actions">
    <button type="submit" className="btn">
      {isEditing ? "Update" : "Add"}
    </button>
    <button
      type="button"
      className="btn danger"
      onClick={() => {
        setModal(false);
        setIsEditing(false);
        setCurrentTask(null);
        reset();
      }}
    >
      <X size={20}/>
    </button>
  </div>
</form>
</TaskModal>
  );
}
