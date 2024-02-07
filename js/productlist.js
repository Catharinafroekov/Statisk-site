const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
.then((res)=> res.json())
.then(showProducts);

function showProducts(products){
    products.forEach(showProduct);

}
function showProduct(product){
//fang template
const template=document.querySelector("#smallProductTemplate").content;
//lav en kopi
const copy = template.cloneNode(true);

//ændre indhold
copy.querySelector("a").textContent=product.productdisplayname;
copy.querySelector("p span").textContent=product.price;

if(product.soldout){
    //produkt udsolgt
    copy.querySelector("article").classList.add("udsolgt");
}
if(product.discount){
    //produkt udsolgt
    copy.querySelector("p").classList.add("tilbud", "nypris");
}

if (product.id) {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

copy.querySelector("a").href = `produkt.html?id=${product.id}`;

//append
document.querySelector("main").appendChild(copy);
}