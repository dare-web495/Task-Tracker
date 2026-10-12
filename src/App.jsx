import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";


export default function App() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const toggleDone = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? {...task, done : !task.done} : task
        )));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const addTask = (title) => {
        setTasks(prevTask => {
            const nxtId = prevTask.reduce((max, prevTask) => (prevTask.id > max ? prevTask.id : max), 0);
            const newObj = {id: nxtId+1, title: title, done: false};

            return [...prevTask, newObj]
        })
    }

    const updateTask = (id, newTitle) => {
        setTasks(tasks.map(prevTask => (
            prevTask.id === id ? {...prevTask, title: newTitle} : prevTask
        )));
    }

    return (
        <div>
            <Header name={"Console Wachia"}/>
            <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} addTask={addTask} updateTask={updateTask}/>
        </div>
    )
}
