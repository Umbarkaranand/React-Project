import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Store user input

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchTerm.trim()) {
      setCategory(searchTerm.toLowerCase()); // ✅ Update category
      setSearchTerm(""); // ✅ Clear input after search
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark">NewsBg</span>
        </a>
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
            {["general", "technology", "business", "science", "health", "entertainment"].map((cat) => (
              <li className="nav-item" key={cat}>
                <button className="nav-link btn btn-link text-light" onClick={() => setCategory(cat)}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
