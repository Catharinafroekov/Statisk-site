const url = "https://kea-alt-del.dk/t7/api/products?limit=10"
fetch(url)
.then((response)=> response.json())
.then((data)=> showProduct(data));

function showProduct(product){
    console.log(product);
    document.querySelector(".purchaseBox h2").textContent =
    product.productdisplayname;
    document.querySelector(".purchaseBox h3").textContent = product.brandname;
    document.querySelector("img").src= "https://kea-alt-del.dk/t7/images/webp/640/$(productid).webp"
}