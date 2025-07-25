import './Search.scss';
import {Icon} from "../icon/Icon.jsx";

export function Search({searchTerm, setSearchTerm}) {
    return (
        <div className="search">
            <label>
                <input type="text" placeholder="Search" className="input search-row" value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <Icon name="search" className="icon_search search-icon"/>
            </label>
        </div>

    )
}