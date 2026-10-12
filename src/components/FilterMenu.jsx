export default function FilterMenu({setIsOpen, setFilterList}) {
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