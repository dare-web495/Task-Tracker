import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const savedTasks = localStorage.getItem(key);
        if (savedTasks === null) {
            return initialValue;
        } else {
            try {
                const array = JSON.parse(savedTasks);
                if (Array.isArray(array)) {
                    return array;
                } else {
                    console.log("savedTasks is not an array");
                    return initialValue;
                }
            } catch (error) {
                console.log("Failed to parse string as:" + error);
                return initialValue;
            }
        }
    });

    useEffect(() => {
        const taskStr = JSON.stringify(value);
        localStorage.setItem(key, taskStr);
    }, [key, value]);

    return [value, setValue];
}
