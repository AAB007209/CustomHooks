import { useState, useCallback } from "react";

function getSavedValue(key, initialValue) {
    try {
        const savedValue = JSON.parse(localStorage.getItem(key));
        if (savedValue !== null) return savedValue;
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
    }

    return initialValue instanceof Function ? initialValue() : initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    const updateLocalStorage = useCallback((newValue) => {
        setValue((prevValue) => {
            if (prevValue !== newValue) {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
            return newValue;
        });
    }, [key]);

    const clearValue = useCallback(() => {
        localStorage.removeItem(key);
        setValue(initialValue); // Reset to initial value in state as well
    }, [key, initialValue]);

    return [value, updateLocalStorage, clearValue];
}
