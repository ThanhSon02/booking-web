function Nav() {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                        Lưu trú
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Thuê xe
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Địa điểm thăm quan
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
