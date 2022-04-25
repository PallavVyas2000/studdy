import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/culogo.png';


const NavBar = () => {
    // const handleLogout = () => {
    //     localStorage.removeItem('token')
    // }
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand">
                        <img src={logo} height="40" alt="CloudBook" />
                    </Link>
                    <div className="d-flex align-items-center navtitle justify-content-center">
                        STUDDY
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <ul className="navbar-nav ms-md-auto gap-2">
                                <li className="nav-item rounded">
                                    <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill me-2"></i>Home</Link>
                                </li>
                                <li className="nav-item rounded">
                                    <Link className="nav-link" to="/about"><i className="bi bi-people-fill me-2"></i>About</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-md-auto gap-2">
                                {!localStorage.getItem('token') ?
                                    <form className="d-flex">
                                        <li className="nav-item rounded">
                                            <Link className="nav-link signuplink" to="/signup"><i className="bi bi-person-plus-fill me-2"></i>Sign Up</Link>
                                        </li>
                                        <li className="nav-item rounded">
                                            <Link className="nav-link" to="/login"><i className="bi bi-door-open me-2"></i>Log In</Link>
                                        </li>
                                    </form> :
                                    <li className="nav-item dropdown rounded">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person-circle me-2"></i>Profile</Link>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Account</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="dropdown-item" /*onClick={handleLogout}*/ to="/login">Logout</Link></li>
                                        </ul>
                                    </li>}
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
