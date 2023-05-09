function showFilteredProducts(filteredProducts) {
  const productsContainers = document.querySelectorAll('.tshirt_search_list');
  productsContainers.forEach((container) => {
    container.innerHTML = ''; // Limpiar el contenedor antes de mostrar los nuevos productos

    filteredProducts.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'tshirt_photos';
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      productDiv.appendChild(image);
      container.appendChild(productDiv);
    });
  });
}
