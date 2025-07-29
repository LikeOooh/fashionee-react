import './CustomList.scss'

export function CustomList({custList, isActive = "All", onClick, className}) {
    return (
        <ul className={"custom-list" + (className ? " " + className : "") }>
            {custList.map((element) => (
                <li key={element} className={"custom-list__item" + (isActive === element ? " active" : "")} onClick={() => onClick(element)}>{element}</li>))}
        </ul>
    )
}
