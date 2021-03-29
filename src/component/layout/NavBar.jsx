import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = ({ changeCategory, auth }) => {
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
  const history = useHistory();

  const handleSignOut = () => {
    auth.signOut();
    history.go(0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        <img
          src="https://i.imgur.com/KfhxVhr.png"
          alt="Logo"
          style={{ width: "75px", height: "30px" }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {list.map((category) => {
            return (
              <li className="nav-item" key={category}>
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => changeCategory(category.toLowerCase())}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <div className=" my-2 my-lg-0 mr-3">
          {auth.currentUser ? (
            <>
              <ul className="navbar-nav">
                <li className="nav-item  my-auto mr-3">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => changeCategory("favorite")}
                  >
                    Favorite
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        auth.currentUser.photoURL ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdPVbEQ79YJIsiWVgwDFP-GCElWP75bHIEjG5gfPPo_sqFFX6cvjEmQXSnieXABzqGhE&usqp=CAU"
                      }
                      width="40"
                      height="40"
                      className="rounded-circle"
                    />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleSignOut}
                    >
                      Log Out
                    </a>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-decoration-none text-muted mx-3"
              >
                Sign Up
              </Link>

              <Link to="/signin" className="btn btn-outline-light mx-3">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
