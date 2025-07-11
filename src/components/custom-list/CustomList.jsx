import './CustomList.scss'

export function CustomList({custList, className=""}) {
    return (
        <ul className={"custom-list" + (className ? " "  + className : "")}>
            {custList.map((item, index) => (<li key={index} className="custom-list__item"><a href="">{item}</a></li>))}
        </ul>
    )
}
