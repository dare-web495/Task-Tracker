import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


export default function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks === null) {
            return [];
        } else {
            try {
                const array = JSON.parse(savedTasks);
                if (Array.isArray(array)) {
                    return array;
                } else {
                    console.log("savedTasks is not an array");
                    return [];
                }
            } catch (error) {
                console.log("Failed to parse string as:" + error);
                return [];
            }
        }
    });

    useEffect(() => {
        const taskStr = JSON.stringify(tasks);
        localStorage.setItem("tasks", taskStr);
    }, [tasks]);

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
            const nxtId = prev.reduce((max, prevTask) => (prevTask.id > max ? prevTask.id : max), 0);
            const newObj = {id: nxtId+1, title: title, done: false};

            return [...prevTask, newObj]
        })
    }

    return (
        <div>
            <Header name={"Console Wachia"}/>
            <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} addTask={addTask}/>
        </div>
    )
}
