import './FindUs.scss'

export function FindUs() {
    return (
        <div className="find-us">
            <div className="find-us__text">Find us here:</div>
            <div className="find-us__links">
                <div className="find-us__link"><a href="">FB</a></div>
                <div className="find-us__line"></div>
                <div className="find-us__link"><a href="">TW</a></div>
                <div className="find-us__line"></div>
                <div className="find-us__link"><a href="">INS</a></div>
                <div className="find-us__line"></div>
                <div className="find-us__link"><a href="">PT</a></div>
            </div>
        </div>
    )
}