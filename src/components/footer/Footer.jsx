import './Footer.scss';
import { Icon } from '../icon/Icon.jsx';
import { Logo } from '../logo/Logo.jsx';
import { FindUs } from '../find-us/FindUs.jsx';
import { CustomList } from '../custom-list/CustomList.jsx';

export function Footer() {
    const about = ['About us', 'Collections', 'Shop', 'Blog', 'Contact us'];
    const usefulLinks = ['Privacy Policy', 'Terms of use', 'Support', 'Shipping details', 'FAQs'];

    return (
        <div className="container">
            <footer className="footer">
                <Icon name="vector-object-130" className="icon_vector-object-130" />
                <Icon name="vector-object-290" className="icon_vector-object-290" />

                <div className="footer__info">
                    <div className="footer__info-column column-1">
                        <Logo />
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <FindUs />
                    </div>
                    <div className="footer__info-column column-2">
                        <div className="title h5">About</div>
                        <CustomList custList={about} />
                    </div>
                    <div className="footer__info-column column-3">
                        <div className="title h5">Useful links</div>
                        <CustomList custList={usefulLinks} onClick />
                    </div>
                    <div className="footer__info-column column-4">
                        <div className="title h5">Newsletter</div>
                        <div className="newsletter-text">
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className="newsletter-form">
                            <form action="">
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="input newsletter-email"
                                    />
                                    <Icon name="send" className="icon_large icon_send" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div>© All right reserved. Fashionee 2020</div>
                    <div className="footer__payment-methods-container">
                        <div>Payment methods:</div>
                        <div className="footer__payment-methods">
                            <Icon name="visa" className="icon_payment-method" />
                            <Icon name="mastercard" className="icon_payment-method" />
                            <Icon name="paypal" className="icon_payment-method" />
                            <Icon name="payoneer" className="icon_payment-method" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
