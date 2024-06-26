import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            React Playground
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wheelpicker">
                  Phone number picker
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/button">
                  Catch The Button
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/slider">
                  Funny Slider
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
