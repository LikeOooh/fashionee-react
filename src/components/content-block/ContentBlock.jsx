import './ContentBlock.scss';
import {Icon} from "../icon/Icon.jsx";

export function ContentBlock({ pageName, setPageName, pageNames}) {

    return (
        <div className="content-block">
            <div className="content-block__site-description">
                <Icon name="vector-object-354" className="icon_vector-object-354"/>
                <div className="content-block__wrapper">
                    <div className="content-block__site-name">{pageName}</div>
                    <div className="content-block__breadcrumbs">
                        <ul className="content-block__crumb-list">
                            <li className="content-block__crumb-vertical-line"></li>
                            {pageNames?.map((p) => (<li key={p} className={p === pageName ? "content-block__crumb active" : "content-block__crumb"} onClick={() => setPageName(p)}>{p}</li>))}
                        </ul>
                    </div>
                    <div className="content-block__horizontal-line"></div>
                </div>
            </div>
            <div className="content-block__site-image"></div>
        </div>
    )
}