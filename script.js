function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    let name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "inline-block";
    } else {
      product.style.display = "none";
    }
  });
}
