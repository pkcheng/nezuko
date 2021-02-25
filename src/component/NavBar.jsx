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
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark nav-custom">
      <a className="navbar-brand" href="#">
        <img
          src="https://i.imgur.com/KfhxVhr.png"
          alt="Logo"
          style={{ width: "75px", height: "30px" }}
        />
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {list.map((item) => {
            return (
              <a
                className="nav-item nav-link active"
                href="#"
                onClick={() => changeCategory(item.toLowerCase())}
                key={item}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
