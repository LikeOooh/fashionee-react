import './Icon.scss';

export function Icon({ name, className}) {
    return (
        <svg className={'icon' + (className ? ' ' + className : '')} >
            <use xlinkHref={`/__spritemap#sprite-${name}`} />
        </svg>
    );
}
