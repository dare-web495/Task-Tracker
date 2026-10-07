export default function TaskItem({task, toggleDone}) {

    return (

            <div className="task-item">
                <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <span className={task.done ? "done-task" : "pending-task"}>{task.title}</span>
                <button>delete</button>
            </div>

    );
}