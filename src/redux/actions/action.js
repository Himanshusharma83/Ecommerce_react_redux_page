export const Add = (item) => {
    return{
        type:"ADD_CART",
        payload:item
    }
}
//REMOVE_ITEM
export const DLT = (id) => {
    return {
        type:"RMV_CART",
        payload:id
    }
}

//REMOVE_INDIVIDUALLY_ITEM

export const  REMOVE = (iteam) => {
    return {
        type:"RMV_ONE",
        payload:iteam
    }
}