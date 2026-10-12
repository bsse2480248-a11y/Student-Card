
function Navbar({ search, onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white directory-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">
          StudentPortal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {["Dashboard", "Students", "Courses", "Reports"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-wrap align-items-center gap-2 navbar-tools">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button"
              >
                Settings
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#profile">Profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#preferences">
                    Preferences
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="input-group input-group-sm search-group"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search students..."
                value={search}
                onChange={(event) => onSearch(event.target.value)}
                aria-label="Search students"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
