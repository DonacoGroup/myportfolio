function Header() {
    function toggleMenu(){}
    return (
        <header id="topnav" className="defaultscroll sticky">
            <div className="container">

                <a className="logo" href="#">
        <span className="logo-light-mode">
        <img src="assets/images/expose8_oy.png" className="l-dark" height="24" alt=""/>
        <img src="assets/images/expose8_wy.png" className="l-light" height="24" alt=""/>
        </span>
                    <img src="assets/images/expose8_wy.png" height="24" className="logo-dark-mode" alt=""/>
                </a>

                <div className="menu-extras d-none">
                    <div className="menu-item">

                        <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>

                    </div>
                </div>


                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0 d-none">
                        <a href="https://www.gitlab.com/donacosarl/expose8/releases" target="_blank">
                            <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-primary"><i
                                data-feather="gitlab" className="fea icon-sm"></i></span></div>
                            <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><i
                                data-feather="gitlab" className="fea icon-sm"></i></span></div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>

    );
}

export default Header;