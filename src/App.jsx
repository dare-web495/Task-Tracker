import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


export default function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn React", done: false },
        { id: 2, title: "Learn Django", done: false },
        { id: 3, title: "Learn HTML", done: true },
        { id: 4, title: "Learn Swift", done: true }
    ]);

    const toggleDone = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? {...task, done : !task.done} : task
        )));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const addTask = (title) => {
        setTasks(task => {
            const nxtId = task.reduce((max, task) => (task.id > max ? task.id : max), 0);
            const newObj = {id: nxtId+1, title: title, done: false};

            return [...task, newObj]
        })
    }

    return (
        <div>
            <Header name={"Console Wachia"}/>
            <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} addTask={addTask}/>
        </div>
    )
}
