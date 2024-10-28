import { useState, useCallback } from "react";
import { useSnackbar } from "notistack";

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
    const { enqueueSnackbar } = useSnackbar();
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    const updateLocalStorage = useCallback((newValue) => {
        setValue((prevValue) => {
            if (prevValue !== newValue) {
                localStorage.setItem(key, JSON.stringify(newValue));
                enqueueSnackbar("Saved to local storage!", { variant: "success" });
            }
            return newValue;
        });
    }, [key, enqueueSnackbar]);

    const clearValue = useCallback(() => {
        localStorage.removeItem(key);
        setValue(initialValue); // Reset to initial value in state as well
        enqueueSnackbar("Cleared from local storage!", { variant: "info" });
    }, [key, initialValue, enqueueSnackbar]);

    return [value, updateLocalStorage, clearValue];
}
