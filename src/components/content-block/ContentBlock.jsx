import './ContentBlock.scss';
import AuthContext from "../../context/AuthContext.jsx";
import {useContext} from "react";
import {Icon} from "../icon/Icon.jsx";

export function ContentBlock({ pages}) {
    const {page, setPage} = useContext(AuthContext);

    return (
        <div className="content-block">
            <div className="content-block__site-description">
                <Icon name="vector-object-354" className="icon_vector-object-354"/>
                <div className="content-block__wrapper">
                    <div className="content-block__site-name">{page}</div>
                    <div className="content-block__breadcrumbs">
                        <ul className="content-block__crumb-list">
                            <li className="content-block__crumb-vertical-line"></li>
                            {pages?.map((item) => (<li key={item} className={item === page ? "content-block__crumb active" : "content-block__crumb"} onClick={() => setPage(item)}>{item}</li>))}
                        </ul>
                    </div>
                    <div className="content-block__horizontal-line"></div>
                </div>
            </div>
            <div className="content-block__site-image"></div>
        </div>
    )
}