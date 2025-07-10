import './CustomList.scss'

export function CustomList({custList}) {
    return (
        <ul className="custom-list">
            {custList.map((item, index) => (<li key={index} className="custom-list__item"><a href="">{item}</a></li>))}
        </ul>
    )
}
