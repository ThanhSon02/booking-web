import { NavLink } from 'react-router-dom';
import { Attractions, Car, Stays } from '../../assets/icons';
import './nav.scss';

function Nav() {
    return (
        <div className="nav">
            <ul className="nav-container">
                <li className="nav-item">
                    <NavLink to={'/'}>
                        <Stays />
                        <span>Lưu trú</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/car'}>
                        <Car />
                        <span>Thuê xe</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/attractions'}>
                        <Attractions />
                        <span>Địa điểm thăm quan</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
