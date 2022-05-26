import {NavLink} from "react-router-dom";
import search from '../img/search.png';

const Navbar = props => {
    return <div className='navbar'>
        <div className="container">
            <div className="navbar__rows">
                <div className="navbar__row">
                    <div className="navbar__logo">
                        movie
                    </div>
                </div>
                <div className="navbar__row">
                    <div className="navbar__buttons">
                        <NavLink className='navbar__button' to={`/about`}>About</NavLink>
                        <NavLink className='navbar__button' to={`/home`}>Home</NavLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Navbar