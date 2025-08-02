import './Logo.scss';
import { Icon } from '../icon/Icon.jsx';

export function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <Icon name="logo" className="icon_logo" />
            </a>
        </div>
    );
}
