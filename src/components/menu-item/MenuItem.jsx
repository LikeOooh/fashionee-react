import './MenuItem.scss';
import { Icon } from '../icon/Icon.jsx';

export function MenuItem({ title, icon, isActive, ...props }) {
    return (
        <div className={'menu-item' + (isActive ? ' active' : '')} {...props}>
            <span>{title}</span>
            {icon &&
                (isActive ? (
                    <Icon name="chevron-down-pink" className="icon_xsmall" />
                ) : (
                    <>
                        <Icon name="chevron-down-pink" className="icon_xsmall icon_hover" />
                        <Icon name="chevron-down" className="icon_xsmall icon_default" />
                    </>
                ))}
        </div>
    );
}
