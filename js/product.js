const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => {
    showProduct(data); // Remove the forEach loop
  });

function showProduct(product) {
  //fang template
  const template = document.querySelector("#singleProduct").content;
  //lav en kopi
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".pris span").textContent = product.price;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".vare").textContent = product.articletype;

  if (product.id) {
    copy.querySelector(
      ".produkt"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  }

  document.querySelector("main").appendChild(copy);
}
