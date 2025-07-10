import './ContentBlock.scss';
import {Showcase} from "../showcase/Showcase.jsx";
import {Icon} from "../icon/Icon.jsx";

export function ContentBlock({page}) {
    return (
        <div className="content-block">
            <div className="content-block__site-description">
                <Icon name="vector-object-354" className="icon_vector-object-354"/>
                <div className="content-block__wrapper">
                    <div className="content-block__site-name">{page}</div>
                    <div className="content-block__breadcrumbs">
                        <ul className="content-block__crumb-list">
                            <li className="content-block__crumb-vertical-line"></li>
                            <li className="content-block__crumb">Home</li>
                            <li className="content-block__crumb-active">{page}</li>
                        </ul>
                    </div>
                    <div className="content-block__horizontal-line"></div>
                </div>
            </div>
            <div className="content-block__site-image"></div>
        </div>
    )
}