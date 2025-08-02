import { Icon } from '@/components/ui/icon/Icon.jsx';
import './Logo.scss';

export function Logo() {
    return (
        <div className="logo">
            <a href="/fashionee-react/">
                <Icon name="logo" className="icon_logo" />
            </a>
        </div>
    );
}
