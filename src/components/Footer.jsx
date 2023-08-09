import logo from '../assets/sports_basketball_FILL0_wght400_GRAD0_opsz48.svg'
import logoYou from '../assets/icons8-youtube.svg'
import logoLink from '../assets/icons8-linkedin.svg'

export default function Footer() {
    return (
        <footer className="footer border-t border-gray-300">
            <div className="container">
                <nav className="nav nav-footer h-20 grid grid-cols-3 ">
                    <ul className="menu-footer flex gap-x-5 self-center">
                        <li className="menu__list">
                            <a href="" className="menu__link"> Shop</a>
                        </li>
                        <li className="menu__list">
                            <a href="" className="menu__link"> Games</a>
                        </li>
                        <li className="menu__list">
                            <a href="" className="menu__link"> About us</a>
                        </li>
                    </ul>

                    <div className="container-logo self-center justify-self-center">
                        <a href="#" className="logo  " >
                            <img src={logo} alt=" logo" className="logo_img" />
                        </a>
                    </div>

                    <ul className="socials justify-self-end  self-center flex flex-wrap">
                        <li className="item-social">
                            <a href="#" className="social">
                                <img src={logoYou} alt="you" className="backet-img w-6 h-6" />
                            </a>
                        </li>
                        <li className="item-social">
                            <a href="#" className="social">
                                <img src={logoLink} alt="linkedin" className="backet-img w-6 h-6" />
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
        </footer>
    );
}