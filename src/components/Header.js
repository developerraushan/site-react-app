import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to = "/" style={{ textDecoration: 'none' }}>
                    <span className="navbar-brand">Bug Tracker</span>
                </Link>
                <button className="navbar-toggler" type = "button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to = "/add" style={{ textDecoration: 'none' }}>
                            <span className="nav-link active" aria-current = "page">Add Bug</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
