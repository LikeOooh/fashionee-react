import './Colors.scss';
import {SelectItem} from "../select-item/SelectItem.jsx";

export function Colors({colors, colorsSelection, changeSelectedColors}) {
    return (
        <div>
            <div className="h4">Colors</div>
            <div className="colors">
                {colors.map((item) => (
                    <SelectItem key={item} value={item} isChecked={colorsSelection.includes(item)}
                                changeSelection={changeSelectedColors}/>))}
            </div>
        </div>
    )
}