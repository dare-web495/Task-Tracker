import { useState } from "react";

function EditTask({task, updateTask}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(task.title);

    const saveChanges = () => {
        const trimmed = draft.trim();
        if (trimmed) {
            updateTask(task.id, trimmed);   
        } else {
            setDraft(task.title);
        }
        setIsEditing(false);
    }

    const handleBlur = () => {
        saveChanges();
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            saveChanges();
        } else if (e.key === "Escape") {
            setDraft(task.title);
            setIsEditing(false);
        }
    }

    if (isEditing === false) {
        return <span onDoubleClick={() => {
            setIsEditing(true);
            setDraft(task.title);
        }} className={task.done ? "done-task" : "pending-task"}>{task.title}</span>;
    } else {
        return <input placeholder="Set new task" value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus onBlur={handleBlur} onKeyDown={handleKeyDown}/>;
    }
}

export default function TaskItem({task, toggleDone, deleteTask, updateTask}) {


    return (

            <div className="task-item">
                <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <EditTask task={task} updateTask={updateTask}/>
                <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>

    );
}