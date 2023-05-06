const products = [
  {
    name: 'CAMISETA VOLBEAT',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwb5025a4c/images/5/0/8/0/508086wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA GHOST',
    price: 30,
    stars: 2,
    reviews: 30,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw6ad69033/images/5/5/1/3/551305wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA ACDC',
    price: 20,
    stars: 3,
    reviews: 40,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfc245659/images/3/8/8/9/388944wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA QUEEN',
    price: 30,
    stars: 4,
    reviews: 50,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf3c76927/images/3/9/4/5/394536wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA LINKIN PARK',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwab11aec9/images/5/4/9/5/549530wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA DISTURBED',
    price: 30,
    stars: 5,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfeec6cb9/images/4/8/2/2/482259wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA NIRVANA',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwfa3e1c8b/images/3/6/5/2/365218wa-emp.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA METALLICA',
    price: 30,
    stars: 4,
    reviews: 12,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf6bbaf67/images/5/5/1/9/551914wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA BLIND GUARDIAN',
    price: 20,
    stars: 2,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw83eb9ed8/images/3/8/2/7/382709wa.jpg?sfrm=png',
  },
  {
    name: 'CAMISETA RAMMSTEIN',
    price: 20,
    stars: 1,
    reviews: 29,
    seller: '3FLORES',
    image:
      'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3282e4d6/images/5/2/1/2/521273wa.jpg?sfrm=png',
  },
];

for (let i = 0; products.length; i++) {
  const productListing = products[i];
  const sectionSearchTshirt = document.querySelector('.tshirt_search_list');
  const imageList = document.createElement('img');
  imageList.classList.add('tshirt_photos');
  imageList.src = productListing.image;
  imageList.alt = productListing.name;
  sectionSearchTshirt.appendChild(imageList);
  document.body.appendChild(sectionSearchTshirt);
}
