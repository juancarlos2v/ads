export const Header = () => {

    const header = "https://raw.githubusercontent.com/gcba/Obelisco-V2/a9f1f6d58f0277896f2abf958148b5a20f089ada/app/public/images"

    return (
        <>
            <header className="o-header navbar" role="banner">
                <a href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                </a>
                <div className="container header-container">
                    <a href="/" className="navbar-brand">
                        <img className="d-none d-xl-block" src={`${header}/logo_ba.svg`} alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
                        <img className="d-xl-none" src={`${header}/logo_ba_mobile.svg`} alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
                    </a>
                    <div className="navbar-login-mobile">
                        <a
                            className="btn btn-lg btn-icon btn-outline-tertiary"
                            href="#"
                            target="_blank"
                        >
                            <span className="material-symbols-rounded" aria-hidden="true">person</span>
                            <span className="btn-text">Ingresar</span>
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent6"
                        aria-controls="navbarContent6"
                        aria-expanded="false"
                        aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent6">
                        <div className="navbar-content">
                            <div className="navbar-login">
                                <a
                                    className="btn btn-lg btn-outline-tertiary"
                                    href="#"
                                    target="_blank"
                                >
                                    <span className="material-symbols-rounded" aria-hidden="true">person</span>
                                    <span className="btn-text">Juan Carlos Vilcherrez</span>
                                </a>
                            </div>
                        </div>
                        <div className="navbar-content-extended">
                            <nav>
                                <p className="navbar-sections-title">Secciones</p>
                                <ul className="nav nav-pills nav-sections">
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-lg" href="/nuevo-sitio">
                                            <span>Nuevo sitio</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-lg" href="#">
                                            <span>Sincronización</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">

                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="btn btn-dropdown btn-dropdown-border btn-lg"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span className="btn-dropdown-text ellipsis-1">Administrador</span>
                                                <span
                                                    className="material-symbols-rounded btn-dropdown-icon"
                                                    aria-label="hidden"
                                                >
                                                    expand_more
                                                </span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    <span className="item-text">Usuarios</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="item-text">Auditoria</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header-backdrop"></div>
            </header>


        </>
    )
}
