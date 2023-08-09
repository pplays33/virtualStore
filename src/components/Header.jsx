
import logo from '../assets/sports_basketball_FILL0_wght400_GRAD0_opsz48.svg'
import basket from '../assets/shopping_basket_FILL0_wght400_GRAD0_opsz48.svg'

export default function Header(){

    return(
        <>
            <header className='header  border-b border-solid border-gray-500'>
                <div className="container ">
                    <nav className="nav h-20 flex flex-wrap justify-between items-center ">
                        <button className="header__burger-btn">
                            <span></span><span></span><span></span>
                        </button>
                        <ul className="menu flex gap-x-5">
                            <li className="menu__list">
                                <a href="" className="menu__link"> Shop</a>
                            </li>
                            <li className="menu__list">
                                <a href="" className="menu__link"> Games</a>
                            </li>
                            <li className="menu__list">
                                <a href="" className="menu__link"> Metaverse</a>
                            </li>
                        </ul>
                        <a href="#" className="logo " >
                            <img src={logo} alt=" logo" className="logo_img" />
                        </a>

                        <a href="#" className="basket relative">
                            <img src={basket} alt=" logo" className="backet-img" />
                            <span className=' absolute top-0 right-0 text-sm w-4 h-4
                             flex justify-center items-center
                            bg-sky-300 rounded-full'> 3 </span>
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );

}