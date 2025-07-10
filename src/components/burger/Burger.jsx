import './Burger.scss'

export function Burger() {
    return (
        <>
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label className="burger" htmlFor="burger-checkbox"></label>
        </>
    )
}