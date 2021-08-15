function Footer() {
    return (
        <footer className="footer bg-light">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-12 py-lg-5">
        <div className="footer-py-60 text-center">
        <a href="#" className="logo-footer">
        <img src="assets/images/expose8_oy.png" height="32" alt="" />
        </a>
        <p className="mt-4 para-desc mx-auto">Expose your talent with a modern and simple personal web portfolio that you can deploy or host anywhere.</p>
    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-none">
        <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="gitlab" className="fea icon-sm fea-social"></i></a></li>
    <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social"></i></a></li>
    <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social"></i></a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>

    <div className="footer-py-30 footer-bar bg-footer bg-orange">
        <div className="container text-center">
        <div className="row justify-content-center">
        <div className="col-12">
        <div className="text-center">
        <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Expose8. Built by <a href="https://www.donacosarl.com/" target="_blank" className="text-reset d-none">DONACO SARL</a>DONACO SARL.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </footer>

);
}

export default Footer;