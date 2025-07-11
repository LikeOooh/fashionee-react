import './SelectItem.scss'

export function SelectItem({value, isChecked, ...props} ) {
    return (
        <div className="select-item" {...props}>
            <input type="scheckbox" className={"select-item__checkbox" + (isChecked ? " checked" : "" )} id={value} name={value}
                   value={value}/>
            <label htmlFor={value} className="select-item__name">{value}</label>
        </div>
    )
}