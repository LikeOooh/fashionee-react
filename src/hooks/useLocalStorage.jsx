import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    //localStorage.clear();
    const [storedValue, setStoredValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
