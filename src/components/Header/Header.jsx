import { Logo } from '../../assets/icons';

function Header() {
    return (
        <div className="header">
            <div className="container py-3 px-4-5">
                <div className="d-flex align-items-center">
                    <div className="col">
                        <Logo />
                    </div>
                    <div className="col d-flex justify-content-end gap-4">
                        <button type="button" className="btn">
                            Đăng ký
                        </button>
                        <button type="button" className="btn">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
