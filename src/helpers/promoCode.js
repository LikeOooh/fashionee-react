import { PROMO_CODES } from '@/constants/promoCodes.js';

export const changePromoCode = (value, setPromoCode) => {
    if (PROMO_CODES.include(value.trim())) {
        setPromoCode(value);
    }
};
