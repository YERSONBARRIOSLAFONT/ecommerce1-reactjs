import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    //Consultar coleccion de productos
    useEffect (() => {
        const db =  getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) =>({id: doc.id, ...doc.data()})));
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container py-5">
            <div className="row">
                {loading ? <Loading/> : <ItemList items={items}/> }
            </div>
        </div>
    )
}

export default ItemListContainer;