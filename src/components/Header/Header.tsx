import "./Header.scss";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <span>HBO Max</span>
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
                                {/* <a className="nav-link active" aria-current="page" href="#">
                                    Movies
                                </a> */}
                                <Link className="nav-link active" to={"/movies"} >Movies</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    TV Shows
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
