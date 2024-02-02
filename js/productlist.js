const url = "https://kea-alt-del.dk/t7/api/products?limit=10"
fetch(url)
.then((response)=> response.json())
.then((data)=> showProduct(data));