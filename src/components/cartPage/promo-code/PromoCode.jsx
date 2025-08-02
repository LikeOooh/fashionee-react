import { AuthContext } from '@/context/AuthContext.jsx';
import { Icon } from '@/components/ui/icon/Icon.jsx';
import { PROMO_CODES } from '@/constants/promoCodes.js';
import { UseNotification } from '@/hooks/useNotification.jsx';
import { useContext, useState } from 'react';
import './PromoCode.scss';
import { Notification } from '@/components/ui/notification/Notification.jsx';

export function PromoCode() {
    const [inputPromoCode, setInputPromoCode] = useState('');
    const { setPromoCode } = useContext(AuthContext);
    const { notification, showNotification } = UseNotification();

    const changePromoCode = () => {
        if (PROMO_CODES.includes(inputPromoCode.trim())) {
            setPromoCode(inputPromoCode);
            setInputPromoCode('');
            showNotification('Промокод применен. Скидка - 10%!');
        }
    };

    return (
        <div className="promo-code-wrapper">
            {notification && <Notification notification={notification} />}
            <div className="promo-code__info">
                <div className="title">You Have A Promo Code?</div>
                <div className="promo-code__description">
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <div className="promo-code">
                <input
                    type="text"
                    name="promo-code"
                    value={inputPromoCode}
                    className="input"
                    placeholder="Enter promo code"
                    onChange={(e) => setInputPromoCode(e.target.value)}
                />
                <div className="button-wrapper promo-code-button-wrapper">
                    <button className="button promo-code-button" onClick={changePromoCode}>
                        <Icon name="arrow" className="icon_medium" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
        </div>
    );
}
