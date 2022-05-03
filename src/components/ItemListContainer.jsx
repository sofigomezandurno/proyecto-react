import React from "react";
import {} from 'react-bootstrap';
import ItemList from './ItemList';



const ItemListContainer = ({regards}) => {
    return (
            <div className="border border-danger p-5"> {regards}
                <div className="border border-danger p-5">
                <ItemList/>
                </div>
            </div>
        )
};

export default ItemListContainer;