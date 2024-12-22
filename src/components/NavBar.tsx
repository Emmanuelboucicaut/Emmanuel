import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark position-fixed w-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="navbar-brand fs-1">
            Emmanuel Boucicaut
          </a>
        </motion.div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mt-2 m-2">
              <div>
                <a
                  href="https://www.linkedin.com/in/emmanuel-boucicaut-42322281/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
              </div>
            </li>
            <li className="nav-item mt-2 m-2">
              <div>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="fab fa-github" style={{ fontSize: "30px" }}></i>
                </a>
              </div>
            </li>
            <li className="nav-item mt-2 m-2">
              <div>
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i
                    className="fab fa-facebook"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
