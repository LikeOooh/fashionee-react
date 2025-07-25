import './CustomList.scss'

export function CustomList({custList, isActive = "All", onClick, className}) {
    return (
        <ul className={"custom-list" + (className ? " " + className : "") }>
            {custList.map((item) => (
                <li key={item} className={"custom-list__item" + (isActive === item ? " active" : "")} onClick={() => onClick(item)}>{item}</li>))}
        </ul>
    )
}
