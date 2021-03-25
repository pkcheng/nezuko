const list = [
  "Basic",
  "Blocks",
  "Tools",
  "Defence",
  "Mechanism",
  "Food",
  "Other",
  "Dye",
  "Wool",
  "Brewing",
];

const NavBar = ({ changeCategory }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark nav-custom">
      <a className="navbar-brand" href=".">
        <img
          src="https://i.imgur.com/KfhxVhr.png"
          alt="Logo"
          style={{ width: "75px", height: "30px" }}
        />
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <ul className="navbar-nav">
            {list.map((item) => {
              return (
                <li className="nav-item active mx-2" key={item}>
                  <a
                    className="nav-item nav-link active"
                    href="#"
                    onClick={() => changeCategory(item.toLowerCase())}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
};

export default NavBar;
