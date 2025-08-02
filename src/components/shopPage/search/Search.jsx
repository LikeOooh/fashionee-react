import { Icon } from '@/components/ui/icon/Icon.jsx';
import './Search.scss';

export function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="search">
            <label>
                <input
                    type="text"
                    placeholder="Search"
                    className="input search-row"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon name="search" className="icon_search search-icon" />
            </label>
        </div>
    );
}
