import { useState } from "react";
import TaskItem from "./TaskItem";

function Dropdown({setIsOpen, setFilterList}) {
    const handleSelect = (selected) => {
        setFilterList(selected);
        setIsOpen(false);
    }

    return (
        <div className="dropdown-menu">
            <button onClick={() => handleSelect("All")} className="dropdown-option">All</button>
            <button onClick={() => handleSelect("Active")} className="dropdown-option">Active</button>
            <button onClick={() => handleSelect("Completed")} className="dropdown-option">Completed</button>
        </div>
    );
}

export default function TaskList({tasks, toggleDone, deleteTask, addTask}) {
    const [title, setTitle] = useState("");

    const saveTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = title.trim();
        if (trimmed === "") {
            alert("Must input a task");
            return;
        }
        addTask(trimmed);
        setTitle("");
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const [filterdList, setFilterList] = useState("All");
    const filtered = tasks.filter((task) => {
        if (filterdList === "Active") return task.done === false;
        if (filterdList === "Completed") return task.done === true;
        return true;
    });

    const noOfTasks = tasks.filter(task => task.done === false).length;
    
    return (
        
        <div>
            <div className="input-div">
                <form onSubmit={handleSubmit}>
                    <input className="task-input" type="text" placeholder="Enter task..." value={title} onChange={saveTitle}/>
                    <button className="task-add-btn">Add</button>
                </form>
                
            </div>

            <div className="task-lst-row-1">
                <div className="row2">
                    <div className="task-list-lbl">
                        Task List
                    </div>

                    <div className="filter-icon">
                        <button className="filter-btn" onClick={() => toggleDropdown()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#302e2e"><path d="M603.5-193.5Q560-237 560-300t43.5-106.5Q647-450 710-450t106.5 43.5Q860-363 860-300t-43.5 106.5Q773-150 710-150t-106.5-43.5Zm156-57Q780-271 780-300t-20.5-49.5Q739-370 710-370t-49.5 20.5Q640-329 640-300t20.5 49.5Q681-230 710-230t49.5-20.5ZM160-260v-80h320v80H160Zm-16.5-293.5Q100-597 100-660t43.5-106.5Q187-810 250-810t106.5 43.5Q400-723 400-660t-43.5 106.5Q313-510 250-510t-106.5-43.5Zm156-57Q320-631 320-660t-20.5-49.5Q279-730 250-730t-49.5 20.5Q180-689 180-660t20.5 49.5Q221-590 250-590t49.5-20.5ZM480-620v-80h320v80H480Zm230 320ZM250-660Z"/></svg>
                            <span className="filter-keyword">Filter</span>
                        </button>
                        <button className="filtered-category">{filterdList}</button>

                    </div>
                    
                </div>
            </div>
            <div className="filter-option-div">
                {isOpen && <Dropdown setFilterList={setFilterList} setIsOpen={setIsOpen}/>}
            </div>
            

            { tasks.length > 0 ? (
                <ul>
                    {filtered.map(task=>(
                        <li key={task.id}><TaskItem task={task} toggleDone={toggleDone} deleteTask={deleteTask}/></li>
                    ))}
                </ul>
            ) : (<div>List is empty</div>) }

            <div>
                {noOfTasks} tasks left
            </div>

        </div>
    );
}