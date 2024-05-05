// Coffee : price_1PCzXVSCoMblbDGHD6FxVcvT
// Sunglasses : price_1PCzYBSCoMblbDGHwzgtsSVC
// Camera : price_1PCzYPSCoMblbDGHzcGu58Yd

const productsArray = [
    {
        id: "price_1PCzXVSCoMblbDGHD6FxVcvT",
        title: "Coffee",
        price: 20
    },
    {
        id: "price_1PCzYBSCoMblbDGHwzgtsSVC",
        title: "Sunglasses",
        price: 1000
    },
    {
        id: "price_1PCzYPSCoMblbDGHzcGu58Yd",
        title: "Camera",
        price: 10000
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined){
        console.log("Product data does not exist for this ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };