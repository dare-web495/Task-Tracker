import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";


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

    return (
        <div>
            <Navbar />
            
            <Header name={"Console Wachia"}/>
            <TaskList tasks={tasks} toggleDone={toggleDone}/>
        </div>
    )
}
