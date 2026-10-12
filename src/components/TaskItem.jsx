import EditableTitle from "./EditableTitle";


export default function TaskItem({task, toggleDone, deleteTask, updateTask}) {

    return (

            <div className="task-item">
                <input type="checkbox" className="check-custom" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <EditableTitle task={task} updateTask={updateTask}/>
                <button onClick={() => deleteTask(task.id)} className="del-btn">Remove</button>
            </div>

    );
}