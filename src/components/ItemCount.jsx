import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock-quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);       
    }
    
    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                            <button type="button" className="btn btn-primary">{counter}</button>
                            <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    {vendido ? <Link to={"/cart"} className="btn btn-primary">Finalizar Compra</Link> :<button className="Basic outlined example btn btn-primary" onClick={() => {addToCart(counter)}}>Agregar al Carrito</button>}
                    </div>
            </div>
        </div>
    )
}

export default ItemCount;
