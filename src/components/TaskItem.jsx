import EditableTitle from "./EditableTitle";


export default function TaskItem({task, toggleDone, deleteTask, updateTask}) {

    return (

            <div className="task-item">
                <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <EditableTitle task={task} updateTask={updateTask}/>
                <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>

    );
}