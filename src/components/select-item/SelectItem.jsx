import './SelectItem.scss'

export function SelectItem({value, isChecked, changeSelection} ) {
    return (
        <div className="select-item" onClick={() => changeSelection(value)}>
            <input type="checkbox" className={"select-item__checkbox" + (isChecked ? " checked" : "" )} id={value} name={value}/>
            <label htmlFor={value} className="select-item__name">{value}</label>
        </div>
    )
}