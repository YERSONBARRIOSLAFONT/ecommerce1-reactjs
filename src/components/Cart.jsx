import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger text-center" role="alert">
                            Tu carrito está vacío!
                        </div>
                        <Link to={"/"} className="btn btn-primary ">Volver a la página principal</Link>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn btn-danger" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead >
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td> <img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">$ {item.quantity * item.precio}</td>
                                    <td className="align-middle"><Link onClick={() => { removeItem(item.id) }} title="Eliminar Procucto"><img src={"images/trash.svg"} alt={"Eliminar Producto"} width={22} /></Link></td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center"><b>Total</b></td>
                                <td className="text-center"> <b>$ {sumTotal()}</b></td>
                                <td className="text-end" colSpan={5}><Link to={"/checkout"} className="btn btn-danger" title="Finalizar Compra">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart; 