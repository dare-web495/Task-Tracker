export default function TaskItem({task, toggleDone, deleteTask}) {

    return (

            <div className="task-item">
                <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <span className={task.done ? "done-task" : "pending-task"}>{task.title}</span>
                <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>

    );
}