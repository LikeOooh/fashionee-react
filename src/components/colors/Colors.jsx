import './Colors.scss';
import { SelectItem } from '../select-item/SelectItem.jsx';

export function Colors({ colors, colorsSelection, changeSelectedColors }) {
    return (
        <div>
            <div className="h4">Colors</div>
            <div className="colors">
                {colors.map((color) => (
                    <SelectItem
                        key={color}
                        value={color}
                        isChecked={colorsSelection.includes(color)}
                        changeSelection={changeSelectedColors}
                    />
                ))}
            </div>
        </div>
    );
}
