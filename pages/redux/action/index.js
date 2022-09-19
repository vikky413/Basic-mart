// For Add Cart 
export const addCart = (product) => {
    return  {
        type : "ADDITEM",
        payload : product 
    }
}

// For delete item for Cart 

export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload : product
    }
}