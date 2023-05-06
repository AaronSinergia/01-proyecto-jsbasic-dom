const products = [
  {
    name: 'CAMISETA MANOWAR',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://srv.latostadora.com/image/manowar_logo_classic--id:85568e14-2ba5-4a4b-b728-cb8715937843;s:H_A1;b:f2f2f2;w:520;f:f;i:1356232387139135623201709261.jpg',
  },
  {
    name: 'CAMISETA MAIDEN',
    price: 30,
    stars: 2,
    reviews: 30,
    seller: 'Arkana',
    image:
      'https://wishiny.com/sites/default/files/heavy-metal-iron-maiden-tshirt-youth.jpg',
  },
  {
    name: 'CAMISETA ACDC',
    price: 20,
    stars: 3,
    reviews: 40,
    seller: 'Arkana',
    image: 'https://i.ebayimg.com/images/g/4Y4AAOSw6HJZyUaI/s-l500.jpg',
  },
  {
    name: 'CAMISETA SHAKIRA',
    price: 30,
    stars: 4,
    reviews: 50,
    seller: '3FLORES',
    image:
      'https://assets.printerval.com/2023/02/25/63f97ede75f3f6.98989631.jpg',
  },
  {
    name: 'CAMISETA DUALIPA',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: '3FLORES',
    image:
      'https://i.etsystatic.com/33950417/r/il/711799/3893165950/il_2000xN.3893165950_jzzn.jpg',
  },
  {
    name: 'CAMISETA AVATAR',
    price: 30,
    stars: 5,
    reviews: 2,
    seller: 'Arkana',
    image: 'https://m.media-amazon.com/images/I/51EdGEpBK2L._AC_UX342_.jpg',
  },
  {
    name: 'CAMISETA AEROSMITH',
    price: 20,
    stars: 4,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://made4rock.com/65-large_default/camiseta-mujer-aerosmith.jpg',
  },
  {
    name: 'CAMISETA BRUNO MARS',
    price: 30,
    stars: 4,
    reviews: 12,
    seller: '3FLORES',
    image:
      'https://srv.latostadora.com/image/bruno_mars--id:e75b5bee-2dd5-4dd3-a140-3bbe4b3c4bd6;s:H_A5;b:f2f2f2;w:520;f:f;i:135623513761135623201709265.jpg',
  },
  {
    name: 'CAMISETA BLIND GUARDIAN',
    price: 20,
    stars: 2,
    reviews: 2,
    seller: 'Arkana',
    image:
      'https://custom13.com/17727-large_default/camiseta-negra-blind-guardian.jpg',
  },
  {
    name: 'CAMISETA MICHAEL JACKSON',
    price: 20,
    stars: 1,
    reviews: 29,
    seller: '3FLORES',
    image:
      'https://micreacion.es/252-large_default/camiseta-michael-jackson.webp',
  },
];

const productList = document.createElement('div');

for (let i = 0; products.length; i++) {
  const productListing = products[i];
  const imageList = document.createElement('img');
  imageList.src = products.image;
  imageList.alt = name.title;
}
