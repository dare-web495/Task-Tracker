import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

const lst = [
        { id: 1, title: "Learn React", done: false },
        { id: 2, title: "Learn Django", done: false },
        { id: 3, title: "Learn HTML", done: true },
        { id: 4, title: "Learn Swift", done: true }
    ];

export default function App() {
    return (
        <div>
            <Header />
            <TaskList props={<TaskItem list={lst}/>}/>
        </div>
    )
}
