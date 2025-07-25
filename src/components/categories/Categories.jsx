import {CustomList} from "../custom-list/CustomList.jsx";

export function Categories({categories, selectedCategory, changeSelectedCategory}) {
    return (
        <div>
            <div className="h4">Categories</div>
            <CustomList custList={categories} isActive={selectedCategory} onClick={changeSelectedCategory}
                        className="sidebar-list"/>
        </div>
    )
}