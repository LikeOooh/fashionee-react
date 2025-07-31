import { CustomList } from '../custom-list/CustomList.jsx';

export function Categories({ categories, categorySelection, setCategorySelection }) {
    return (
        <div>
            <div className="h4">Categories</div>
            <CustomList
                custList={categories}
                isActive={categorySelection}
                onClick={setCategorySelection}
                className="sidebar-list"
            />
        </div>
    );
}
