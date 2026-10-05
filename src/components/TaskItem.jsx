export default function TaskItem(props) {
    return (

            <div className="task-item">
                <input type="checkbox" />
                <p>{props.task}</p>
                <button>delete</button>
            </div>

    );
}