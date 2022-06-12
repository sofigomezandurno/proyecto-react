import React from "react";
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