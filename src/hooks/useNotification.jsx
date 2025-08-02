import { useState } from 'react';

export function UseNotification() {
    const [notification, setNotification] = useState('');

    const showNotification = (message) => {
        setNotification(message);
        const timer = setTimeout(() => {
            setNotification('');
        }, 3000);
        return () => clearInterval(timer);
    };

    return { notification, showNotification };
}
