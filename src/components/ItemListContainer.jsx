import React from "react";
import {} from 'react-bootstrap';
import ItemList from './ItemList';



const ItemListContainer = ({regards}) => {
    return (
            <div> {regards}
                <div>
                <ItemList/>
                </div>
            </div>
        )
};

export default ItemListContainer;