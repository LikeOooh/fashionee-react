import {SelectItem} from "../select-item/SelectItem.jsx";

export function Colors({colors, selectedColors, changeSelectedColors}) {
    return (
        <div>
            <div className="h4">Colors</div>
            <div className="sidebar__colors">
                {colors.map((item) => (
                    <SelectItem key={item} value={item} isChecked={selectedColors.includes(item)}
                                changeSelection={changeSelectedColors}/>))}
            </div>
        </div>
    )
}