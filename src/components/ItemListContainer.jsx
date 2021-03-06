import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore } from "../services/getFirestore"
import ItemList from './ItemList'
import './styles/ItemListContainer.css'
import loading_icon from '../images/loading.gif'

function ItemListContainer() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    
    useEffect(() => {

        const db = getFirestore()

            const dbQuery = (category) 
            ? db.collection("items").where("category", "==", category).get()
            : db.collection("items").get()
            dbQuery
            .then(res => {
                setProduct(res.docs.map( prod => ({id: prod.id, ...prod.data()})))
            })
            .catch(err => console.log("Error", err))
            .finally(() => setLoading(false))
    },[category])
    
    return (
        <div className="item-list-container">
            {(loading)
            ?   <div className="loading">
                    <img src={loading_icon} alt="Cargando productos" />
                </div>    
            :   <ItemList items={product}/>}
        </div>
    )  
}

export default ItemListContainer