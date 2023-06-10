import { Link } from 'react-router-dom';
import { Logo, User } from '../../assets/icons';
import './header.scss';
import { Button } from 'antd/es/radio';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <Link to={'/'} className="logo">
                    <Logo width="120" height="20" />
                </Link>
                <div className="login-icon">
                    <div className="mobile">
                        <User />
                    </div>
                    <div className="desktop btn-header-container">
                        <div className="btn-wrap">
                            <Button className="btn">Đăng ký</Button>
                        </div>
                        <div className="btn-wrap">
                            <Button className="btn">Đăng nhập</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
