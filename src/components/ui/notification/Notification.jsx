import './Notification.scss';

export function Notification({ notification }) {
    if (!notification) return null;

    return <div className="notification">{notification}</div>;
}
