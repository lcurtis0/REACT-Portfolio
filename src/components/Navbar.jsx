

import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/About"
                    // In our case we will not have a Home page but land on About instead

                    // How this works is if the page is current then 'nav-link-active' meaning show that specific page and if not 'nav-link' meaning just have it as a link in the nav'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}

                >
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    )
}


export default Navbar;