import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    ///Consultar a Firestore por un ID
    useEffect (() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("Error! No se encontró el Documento");
            }
        });
    },[id]);

    return (
        <div className="container">
            <ItemDetail item={item}/> 
        </div>
    )
}

export default ItemDetailContainer;
