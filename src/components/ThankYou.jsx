import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger text-center" role="alert">
                        <h1>Gracias po tu compra!</h1>
                        <p>Tu número de compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-primary ">Volver a la página principal</Link>
                </div>
            </div>
        </div >
    )
}

export default ThankYou;