import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signup" class="nav-link active" aria-current="page">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link active" aria-current="page">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link active" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar