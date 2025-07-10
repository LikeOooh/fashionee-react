import './MenuItem.scss'
import {Icon} from "../icon/Icon.jsx";


export function MenuItem({title, icon, isAactive, ...props}) {
    //const [active, setActive] = useState(isAactive);
    return (
        <div className={"menu-item" + (isAactive ? " active" : "")} {...props} >
            <span>{title}</span>
            {icon && (
                isAactive ?
                    < Icon name="chevron-down-pink" className="icon_xsmall"/> : <>
                        <Icon name="chevron-down-pink" className="icon_xsmall icon_hover"/>
                        <Icon name="chevron-down" className="icon_xsmall icon_default"/>
                    </>
            )
            }
        </div>
    )
}