const products = [
  {
    name: 'CAMISETA VOLBEAT',
    price: 10,
    stars: 4,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwb5025a4c/images/5/0/8/0/508086wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA GHOST',
    price: 20,
    stars: 2,
    reviews: 30,
    seller: 'UniShirt',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw6ad69033/images/5/5/1/3/551305wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA ACDC',
    price: 30,
    stars: 3,
    reviews: 40,
    seller: 'RockSpain',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfc245659/images/3/8/8/9/388944wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA QUEEN',
    price: 40,
    stars: 4,
    reviews: 50,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf3c76927/images/3/9/4/5/394536wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA LINKIN PARK',
    price: 10,
    stars: 4,
    reviews: 2,
    seller: 'UniShirt',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwab11aec9/images/5/4/9/5/549530wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA DISTURBED',
    price: 20,
    stars: 5,
    reviews: 2,
    seller: 'RockSpain',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfeec6cb9/images/4/8/2/2/482259wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA NIRVANA',
    price: 10,
    stars: 4,
    reviews: 2,
    seller: 'RockSpain',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfa3e1c8b/images/3/6/5/2/365218wa-emp.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA METALLICA',
    price: 20,
    stars: 4,
    reviews: 12,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf6bbaf67/images/5/5/1/9/551914wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA BLIND GUARDIAN',
    price: 30,
    stars: 2,
    reviews: 2,
    seller: 'UniShirt',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw83eb9ed8/images/3/8/2/7/382709wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA RAMMSTEIN',
    price: 40,
    stars: 1,
    reviews: 29,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3282e4d6/images/5/2/1/2/521273wa.jpg?sfrm=png',
  },
];

// BOX SELLER
const producSpecificationList = document.querySelector(
  'section.filtros_busqueda'
);
const sellerBox = document.createElement('select');
sellerBox.className = 'sellers';

const sellerNameDisabledBox = document.createElement('option');
sellerNameDisabledBox.defaultSelected = true;
sellerNameDisabledBox.disabled = true;
sellerNameDisabledBox.textContent = 'Marca';
sellerBox.appendChild(sellerNameDisabledBox);

for (let i = 6; i < products.length; i++) {
  const sellersList = products[i];
  const sellerBoxDropdown = document.createElement('option');
  sellerBoxDropdown.value = 'Seller';
  sellerBoxDropdown.textContent = sellersList.seller;
  producSpecificationList.appendChild(sellerBox);
  sellerBox.appendChild(sellerBoxDropdown);
  document.body.appendChild(producSpecificationList);
}

// BOX PRICE
const priceBox = document.createElement('select');
priceBox.className = 'price';

const priceDisabledBox = document.createElement('option');
priceDisabledBox.defaultSelected = true;
priceDisabledBox.disabled = true;
priceDisabledBox.textContent = 'Precio';
priceBox.appendChild(priceDisabledBox);

for (let i = 6; i < products.length; i++) {
  const priceList = products[i];
  const priceBoxDropdown = document.createElement('option');
  priceBoxDropdown.value = 'Price';
  priceBoxDropdown.textContent = priceList.price;
  producSpecificationList.appendChild(priceBox);
  priceBox.appendChild(priceBoxDropdown);
  document.body.appendChild(producSpecificationList);
}

// PHOTO T-SHIRTS STOCK
for (let i = 0; i < products.length; i++) {
  const productListing = products[i];
  const sectionSearchTshirt = document.querySelector('.tshirt_search_list');
  const imageList = document.createElement('img');
  imageList.classList.add('tshirt_photos');
  imageList.src = productListing.image;
  imageList.alt = productListing.name;
  sectionSearchTshirt.appendChild(imageList);
  document.body.appendChild(sectionSearchTshirt);
}
