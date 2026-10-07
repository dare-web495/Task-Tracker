export default function TaskItem({task, toggleDone}) {

    return (

            <div className="task-item">
                <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)}/>
                <label>{task.title}</label>
                <button>delete</button>
            </div>

    );
}