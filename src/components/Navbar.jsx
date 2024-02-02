import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <div className="row ">
            <div className="col-md-12 mb-4">
                <nav className="navbar navbar-expand-lg">
                    <div>
                    </div>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={"images/Logo-blanco.png"} alt={"Logo Code"} width={140} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" href="/la-escuela">La escuela</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/programacion"}> Programación</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/otros"}>Tendencia</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/contacto"}>Contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" col-md-6  d-flex justify-content-center align-self-center">
                        <CartWidget />
                    </div>
                </nav>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Navbar;