const Nav = () => {
return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/brand_logo.png"}
                alt="Brand Logo"
              />
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Location
                  </a>
                </li>
              </ul>

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </nav>
);
};

export default Nav;  