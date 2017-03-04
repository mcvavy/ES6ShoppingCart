let productData = [];

let productDatas = JSON.parse(localStorage.getItem("Cart"));
if (!productDatas) productData = [];
else {
    productDatas.forEach((item, position) => {
        productData.push(item);
    });
}


export { productData }
