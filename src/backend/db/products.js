import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    discountPercentage: 6.18,
    rating: 3.9,
    stock: 15,
    brand: "HP Pavilion",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    _id: uuid(),
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    discountPercentage: 6.18,
    rating: 3.5,
    stock: 9,
    brand: "HP Pavilion",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    discountPercentage: 6.18,
    rating: 4.2,
    stock: 8,
    brand: "HP Pavilion",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    discountPercentage: 6.18,
    rating: 3.2,
    stock: 19,
    brand: "HP Pavilion",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    discountPercentage: 6.18,
    rating: 3.9,
    stock: 23,
    brand: "HP Pavilion",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    discountPercentage: 6.18,
    rating: 4.2,
    stock: 48,
    brand: "HP Pavilion",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    discountPercentage: 6.18,
    rating: 3.4,
    stock: 19,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    discountPercentage: 6.18,
    rating: 4.1,
    stock: 27,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    discountPercentage: 6.18,
    rating: 3.5,
    stock: 29,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    discountPercentage: 6.18,
    rating: 4.4,
    stock: 13,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "electronics",
    usedFor: 'electronics',
    thumbnail: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95% Cotton, 5% Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck, Fashion Tees, The fabric is soft and has some stretch. Season: Spring, Summer, Autumn, Winter.",
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "womens-clothing",
    usedFor: 'womens',
    thumbnail: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/1/3.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/2/1.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 3.7,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/4/2.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/5/3.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    usedFor: 'electronics',
    thumbnail: "https://i.postimg.cc/yddH62tW/mac-1.jpg",
    images: [
      'https://i.postimg.cc/yddH62tW/mac-1.jpg',
      'https://i.postimg.cc/z3mZjvBR/mack-2.jpg',
      'https://i.postimg.cc/kM22fHGn/mack-3.jpg',
      'https://i.postimg.cc/HWFVKt8b/mack-4.jpg',
      'https://i.postimg.cc/Y0LBYYpH/mack-5.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "Asus Tuf Gaming",
    description: "Asus Tuf Gaming (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    usedFor: 'electronics',
    thumbnail: "https://i.postimg.cc/T3z03bsb/asus-1.jpg",
    images: [
      'https://i.postimg.cc/T3z03bsb/asus-1.jpg',
      'https://i.postimg.cc/d3Vmxjhb/asus-2.jpg',
      'https://i.postimg.cc/Gh9xPzwY/asus-3.jpg',
      'https://i.postimg.cc/d3NmPZdL/asus-4.jpg',
      'https://i.postimg.cc/Y2dxmZVM/asus-5.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    usedFor: 'electronics',
    thumbnail: "https://i.postimg.cc/6QThc0GF/dell-1.webp",
    images: [
      'https://i.postimg.cc/6QThc0GF/dell-1.webp',
      'https://i.postimg.cc/SRb7ybtp/dell-2.jpg',
      'https://i.postimg.cc/2yddy9PL/dell-3.jpg',
      'https://i.postimg.cc/mrqy5HYk/dell-4.jpg',
      'https://i.postimg.cc/RFHL5ZdR/dell-5.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    usedFor: 'electronics',
    thumbnail: "https://m.media-amazon.com/images/I/51DlM6OUjiL._SX679_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    usedFor: 'electronics',
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
    ]
  },
  {
    _id: uuid(),
    title: "perfume Oil",
    description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
      "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Fog Scent Xpressio Perfume",
    description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/13/1.jpg",
      "https://i.dummyjson.com/data/products/13/2.png",
      "https://i.dummyjson.com/data/products/13/3.jpg",
      "https://i.dummyjson.com/data/products/13/4.jpg",
      "https://i.dummyjson.com/data/products/13/thumbnail.webp"
    ]
  },
  {
    _id: uuid(),
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/14/1.jpg",
      "https://i.dummyjson.com/data/products/14/2.jpg",
      "https://i.dummyjson.com/data/products/14/3.jpg",
      "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Eau De Perfume Spray",
    description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/15/1.jpg",
      "https://i.dummyjson.com/data/products/15/2.jpg",
      "https://i.dummyjson.com/data/products/15/3.jpg",
      "https://i.dummyjson.com/data/products/15/4.jpg",
      "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Hyaluronic Acid Serum",
    description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Tree Oil 30ml",
    description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
      "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Oil Free Moisturizer 100ml",
    description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/18/1.jpg",
      "https://i.dummyjson.com/data/products/18/2.jpg",
      "https://i.dummyjson.com/data/products/18/3.jpg",
      "https://i.dummyjson.com/data/products/18/4.jpg",
      "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Skin Beauty Serum.",
    description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/19/1.jpg",
      "https://i.dummyjson.com/data/products/19/2.jpg",
      "https://i.dummyjson.com/data/products/19/3.png",
      "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Freckle Treatment Cream- 15gm",
    description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/20/1.jpg",
      "https://i.dummyjson.com/data/products/20/2.jpg",
      "https://i.dummyjson.com/data/products/20/3.jpg",
      "https://i.dummyjson.com/data/products/20/4.jpg",
      "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
    brand: "Saaf & Khaas",
    category: "groceries",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
    images: [
      "https://i.dummyjson.com/data/products/21/1.png",
      "https://i.dummyjson.com/data/products/21/2.jpg",
      "https://i.dummyjson.com/data/products/21/3.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: "Bake Parlor Big",
    category: "groceries",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/22/1.jpg",
      "https://i.dummyjson.com/data/products/22/2.jpg",
      "https://i.dummyjson.com/data/products/22/3.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Orange Essence Food Flavou",
    description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    discountPercentage: 8.04,
    rating: 4.85,
    stock: 26,
    brand: "Baking Food Items",
    category: "groceries",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/23/1.jpg",
      "https://i.dummyjson.com/data/products/23/2.jpg",
      "https://i.dummyjson.com/data/products/23/3.jpg",
      "https://i.dummyjson.com/data/products/23/4.jpg",
      "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "cereals muesli fruit nuts",
    description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: "fauji",
    category: "groceries",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/24/1.jpg",
      "https://i.dummyjson.com/data/products/24/2.jpg",
      "https://i.dummyjson.com/data/products/24/3.jpg",
      "https://i.dummyjson.com/data/products/24/4.jpg",
      "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    discountPercentage: 13.58,
    rating: 4.87,
    stock: 47,
    brand: "Dry Rose",
    category: "groceries",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/25/1.png",
      "https://i.dummyjson.com/data/products/25/2.jpg",
      "https://i.dummyjson.com/data/products/25/3.png",
      "https://i.dummyjson.com/data/products/25/4.jpg",
      "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Plant Hanger For Home",
    description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    discountPercentage: 17.86,
    rating: 4.08,
    stock: 131,
    brand: "Boho Decor",
    category: "home-decoration",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/26/1.jpg",
      "https://i.dummyjson.com/data/products/26/2.jpg",
      "https://i.dummyjson.com/data/products/26/3.jpg",
      "https://i.dummyjson.com/data/products/26/4.jpg",
      "https://i.dummyjson.com/data/products/26/5.jpg",
      "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Flying Wooden Bird",
    description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: "Flying Wooden",
    category: "home-decoration",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/27/1.jpg",
      "https://i.dummyjson.com/data/products/27/2.jpg",
      "https://i.dummyjson.com/data/products/27/3.jpg",
      "https://i.dummyjson.com/data/products/27/4.jpg",
      "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    ]
  },
  {
    _id: uuid(),
    title: "3D Embellishment Art Lamp",
    description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: 20,
    discountPercentage: 16.49,
    rating: 4.82,
    stock: 54,
    brand: "LED Lights",
    category: "home-decoration",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/28/1.jpg",
      "https://i.dummyjson.com/data/products/28/2.jpg",
      "https://i.dummyjson.com/data/products/28/3.png",
      "https://i.dummyjson.com/data/products/28/4.jpg",
      "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Handcraft Chinese style",
    description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    discountPercentage: 15.34,
    rating: 4.44,
    stock: 7,
    brand: "luxury palace",
    category: "home-decoration",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/29/1.jpg",
      "https://i.dummyjson.com/data/products/29/2.jpg",
      "https://i.dummyjson.com/data/products/29/3.webp",
      "https://i.dummyjson.com/data/products/29/4.webp",
      "https://i.dummyjson.com/data/products/29/thumbnail.webp"
    ]
  },
  {
    _id: uuid(),
    title: "Key Holder",
    description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "Golden",
    category: "home-decoration",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Mornadi Velvet Bed",
    description: "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
    price: 40,
    discountPercentage: 17,
    rating: 4.16,
    stock: 140,
    brand: "Furniture Bed Set",
    category: "furniture",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/31/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/31/1.jpg",
      "https://i.dummyjson.com/data/products/31/2.jpg",
      "https://i.dummyjson.com/data/products/31/3.jpg",
      "https://i.dummyjson.com/data/products/31/4.jpg",
      "https://i.dummyjson.com/data/products/31/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Sofa for Coffe Cafe",
    description: "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 50,
    discountPercentage: 15.59,
    rating: 4.74,
    stock: 30,
    brand: "Ratttan Outdoor",
    category: "furniture",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/32/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/32/1.jpg",
      "https://i.dummyjson.com/data/products/32/2.jpg",
      "https://i.dummyjson.com/data/products/32/3.jpg",
      "https://i.dummyjson.com/data/products/32/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "3 Tier Corner Shelves",
    description: "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
    price: 700,
    discountPercentage: 17,
    rating: 4.31,
    stock: 106,
    brand: "Kitchen Shelf",
    category: "furniture",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/33/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/33/1.jpg",
      "https://i.dummyjson.com/data/products/33/2.jpg",
      "https://i.dummyjson.com/data/products/33/3.jpg",
      "https://i.dummyjson.com/data/products/33/4.jpg",
      "https://i.dummyjson.com/data/products/33/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Plastic Table",
    description: "V\ufeffery good quality plastic table for multi purpose now in reasonable price",
    price: 50,
    discountPercentage: 4,
    rating: 4.01,
    stock: 136,
    brand: "Multi Purpose",
    category: "furniture",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/34/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/34/1.jpg",
      "https://i.dummyjson.com/data/products/34/2.jpg",
      "https://i.dummyjson.com/data/products/34/3.jpg",
      "https://i.dummyjson.com/data/products/34/4.jpg",
      "https://i.dummyjson.com/data/products/34/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "3 DOOR PORTABLE",
    description: "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
    price: 41,
    discountPercentage: 7.98,
    rating: 4.06,
    stock: 68,
    brand: "AmnaMart",
    category: "furniture",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/35/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/35/1.jpg",
      "https://i.dummyjson.com/data/products/35/2.jpg",
      "https://i.dummyjson.com/data/products/35/3.jpg",
      "https://i.dummyjson.com/data/products/35/4.jpg",
      "https://i.dummyjson.com/data/products/35/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Sleeve Shirt Womens",
    description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
    price: 90,
    discountPercentage: 10.89,
    rating: 4.26,
    stock: 39,
    brand: "Professional Wear",
    category: "tops",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/rp72Z66X/red-top-1.jpg",
    images: [
      "https://i.postimg.cc/3rXQ1bnV/red-top-2.jpg",
      "https://i.postimg.cc/xT9D4yZC/red-top-3.jpg",
      "https://i.postimg.cc/L6vKKgdV/red-top-4.jpg",
      "https://i.postimg.cc/7hnvLf5w/red-top-5.jpg",

    ]
  },
  {
    _id: uuid(),
    title: "ank Tops for Womens/Girls",
    description: "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
    price: 50,
    discountPercentage: 12.05,
    rating: 4.52,
    stock: 107,
    brand: "Soft Cotton",
    category: "tops",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/sgpWgzcK/pink-top-1.jpg",
    images: [
      "https://i.postimg.cc/sgpWgzcK/pink-top-1.jpg",
      "https://i.postimg.cc/s2shBLHz/pink-top-2.jpg",
      "https://i.postimg.cc/cJh8fcPn/pink-top-3.jpg",
      "https://i.postimg.cc/LXsgD1M0/pink-top-4.jpg",
      "https://i.postimg.cc/wvbyGjqx/pink-top-5.jpg"

    ]
  },
  {
    _id: uuid(),
    title: "sublimation plain kids tank",
    description: "sublimation plain kids tank tops wholesale",
    price: 100,
    discountPercentage: 11.12,
    rating: 4.8,
    stock: 20,
    brand: "Soft Cotton",
    category: "tops",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/T3jmQxBF/blue-top-1.jpg",
    images: [
      "https://i.postimg.cc/SKy9v5hs/blue-top-2.jpg",
      "https://i.postimg.cc/GpqDwQLj/blue-top-3.jpg",
      "https://i.postimg.cc/KzjMZM4h/blue-top-4.jpg",

    ]
  },
  {
    _id: uuid(),
    title: "Women Sweaters Wool",
    description: "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
    price: 600,
    discountPercentage: 17.2,
    rating: 4.55,
    stock: 55,
    brand: "Top Sweater",
    category: "tops",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/jdjtMYC2/orange-top-1.jpg",
    images: [
      "https://i.postimg.cc/jdjtMYC2/orange-top-1.jpg",
      "https://i.postimg.cc/y8MK6Jj3/orange-top-2.jpg",
      "https://i.postimg.cc/t4ZyHd3H/orange-top-3.jpg",
      "https://i.postimg.cc/HLbgrpvZ/orange-top-4.jpg",
      "https://i.postimg.cc/Y9kwgJJp/orange-top-5.jpg",
    ]
  },
  {
    _id: uuid(),
    title: "women winter clothes",
    description: "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
    price: 57,
    discountPercentage: 13.39,
    rating: 4.91,
    stock: 84,
    brand: "Top Sweater",
    category: "tops",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/VNmswrDs/yellow-top-1.jpg",
    images: [
      'https://i.postimg.cc/VNmswrDs/yellow-top-1.jpg',
      'https://i.postimg.cc/3Rb32L7W/yellow-top-2.jpg',
      'https://i.postimg.cc/sxQsmpDm/yellow-top-3.jpg',
      'https://i.postimg.cc/W342DBBQ/yellow-top-4.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "red saaree",
    description: "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
    price: 55,
    discountPercentage: 15.05,
    rating: 4.65,
    stock: 21,
    brand: "RED MICKY MOUSE..",
    category: "womens-saaree",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/Kztd8Jzd/red-saaree-1.jpg",
    images: [
      'https://i.postimg.cc/Kztd8Jzd/red-saaree-1.jpg',
      'https://i.postimg.cc/Hn2RQnbz/red-saaree-2.jpg',
      'https://i.postimg.cc/vZDkVQT7/red-saaree-3.jpg',
      'https://i.postimg.cc/J4pS0yr4/red-saaree-4.jpg',
      'https://i.postimg.cc/rFVvqGLP/red-saaree-5.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "Stiched Kurta plus trouser",
    description: "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
    price: 80,
    discountPercentage: 15.37,
    rating: 4.05,
    stock: 148,
    brand: "Digital Printed",
    category: "womens-saaree",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/wBp5dVCt/black-saaaree-5.jpg",
    images: [
      'https://i.postimg.cc/wBp5dVCt/black-saaaree-5.jpg',
      'https://i.postimg.cc/d1Q8h0tw/black-saaree-1.jpg',
      'https://i.postimg.cc/Y2s1SMcB/black-saaree-3.jpg',
      'https://i.postimg.cc/kGBKyhbH/black-saree-2.jpg',
      'https://i.postimg.cc/qqSnDXcv/blacksaaree-4.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "frock gold printed",
    description: "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
    price: 600,
    discountPercentage: 15.55,
    rating: 4.31,
    stock: 150,
    brand: "Ghazi Fabric",
    category: "womens-saaree",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/dtR8vXY8/blue-saaree-1.jpg",
    images: [
      'https://i.postimg.cc/dtR8vXY8/blue-saaree-1.jpg',
      'https://i.postimg.cc/vZ3fxVDT/blue-saaree-2.jpg',
      'https://i.postimg.cc/N0FT6jr4/blue-saaree-3.jpg',
      'https://i.postimg.cc/bwz1vTy4/blue-saaree-4.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "Ladies Multicolored Dress",
    description: "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
    price: 79,
    discountPercentage: 16.88,
    rating: 4.03,
    stock: 2,
    brand: "Ghazi Fabric",
    category: "womens-saaree",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/bwy3BH0h/graan-saaree-1.jpg",
    images: [
      'https://i.postimg.cc/bwy3BH0h/graan-saaree-1.jpg',
      'https://i.postimg.cc/ZnzLFrYX/green-saaree-2.jpg',
      'https://i.postimg.cc/jj9c2ppx/green-saaree-3.jpg',
      'https://i.postimg.cc/wjw08yFs/green-saaree-4.jpg',
      'https://i.postimg.cc/k4bcbjCx/green-saaree-5.jpg'
    ]
  },
  {
    _id: uuid(),
    title: "Malai Maxi Dress",
    description: "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
    price: 50,
    discountPercentage: 5.07,
    rating: 4.67,
    stock: 96,
    brand: "IELGY",
    category: "womens-saaree",
    usedFor: 'womens',
    thumbnail: "https://i.postimg.cc/htS3qTHt/light-blue-saaree-1.jpg",
    images: [
      'https://i.postimg.cc/htS3qTHt/light-blue-saaree-1.jpg',
      'https://i.postimg.cc/LsWyf7hJ/light-blue-saaree-2.jpg',
      'https://i.postimg.cc/Gpt74r30/light-blue-saaree-3.jpg',
      'https://i.postimg.cc/tTVBz5V2/light-blue-saaree-4.jpg'

    ]
  },
  {
    _id: uuid(),
    title: "women's shoes",
    description: "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
    price: 40,
    discountPercentage: 16.96,
    rating: 4.14,
    stock: 72,
    brand: "IELGY fashion",
    category: "womens-shoes",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/46/1.webp",
    images: [
      "https://i.dummyjson.com/data/products/46/1.webp",
      "https://i.dummyjson.com/data/products/46/2.jpg",
      "https://i.dummyjson.com/data/products/46/3.jpg",
      "https://i.dummyjson.com/data/products/46/4.jpg",
      "https://i.dummyjson.com/data/products/46/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Sneaker shoes",
    description: "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
    price: 120,
    discountPercentage: 10.37,
    rating: 4.19,
    stock: 50,
    brand: "Synthetic Leather",
    category: "womens-shoes",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/47/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/47/1.jpg",
      "https://i.dummyjson.com/data/products/47/2.jpg",
      "https://i.dummyjson.com/data/products/47/3.jpg",
      "https://i.dummyjson.com/data/products/47/thumbnail.jpeg"
    ]
  },
  {
    _id: uuid(),
    title: "Women Strip Heel",
    description: "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
    price: 40,
    discountPercentage: 10.83,
    rating: 4.02,
    stock: 25,
    brand: "Sandals Flip Flops",
    category: "womens-shoes",
    usedFor: 'womens',
    thumbnail: "https://m.media-amazon.com/images/I/61GdGz90MhL._UY695_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/48/1.jpg",
      "https://i.dummyjson.com/data/products/48/2.jpg",
      "https://i.dummyjson.com/data/products/48/3.jpg",
      "https://i.dummyjson.com/data/products/48/4.jpg",
      "https://i.dummyjson.com/data/products/48/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Chappals & Shoe Ladies Metallic",
    description: "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
    price: 23,
    discountPercentage: 2.62,
    rating: 4.72,
    stock: 107,
    brand: "Maasai Sandals",
    category: "womens-shoes",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/49/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/49/1.jpg",
      "https://i.dummyjson.com/data/products/49/2.jpg",
      "https://i.dummyjson.com/data/products/49/3.webp",
      "https://i.dummyjson.com/data/products/49/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Women Shoes",
    description: "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
    price: 36,
    discountPercentage: 16.87,
    rating: 4.33,
    stock: 46,
    brand: "Arrivals Genuine",
    category: "womens-shoes",
    usedFor: 'womens',
    thumbnail: "https://m.media-amazon.com/images/I/61Y5dnHCkiL._UY695_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/50/1.jpeg",
      "https://i.dummyjson.com/data/products/50/2.jpg",
      "https://i.dummyjson.com/data/products/50/3.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "half sleeves T shirts",
    description: "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
    price: 23,
    discountPercentage: 12.76,
    rating: 4.26,
    stock: 132,
    brand: "Vintage Apparel",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/51/2.jpg",
    images: [
      "https://i.dummyjson.com/data/products/51/1.png",
      "https://i.dummyjson.com/data/products/51/2.jpg",
      "https://i.dummyjson.com/data/products/51/3.jpg",
      "https://i.dummyjson.com/data/products/51/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "FREE FIRE T Shirt",
    description: "quality and professional print - It doesn't just look high quality, it is high quality.",
    price: 10,
    discountPercentage: 14.72,
    rating: 4.52,
    stock: 128,
    brand: "FREE FIRE",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/52/3.jpg",
    images: [
      "https://i.dummyjson.com/data/products/52/1.png",
      "https://i.dummyjson.com/data/products/52/2.png",
      "https://i.dummyjson.com/data/products/52/3.jpg",
      "https://i.dummyjson.com/data/products/52/4.jpg",
      "https://i.dummyjson.com/data/products/52/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "printed high quality T shirts",
    description: "Brand: vintage Apparel ,Export quality",
    price: 35,
    discountPercentage: 7.54,
    rating: 4.89,
    stock: 6,
    brand: "Vintage Apparel",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/53/1.webp",
      "https://i.dummyjson.com/data/products/53/2.jpg",
      "https://i.dummyjson.com/data/products/53/3.jpg",
      "https://i.dummyjson.com/data/products/53/4.jpg",
      "https://i.dummyjson.com/data/products/53/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Pubg Printed Graphic T-Shirt",
    description: "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
    price: 46,
    discountPercentage: 16.44,
    rating: 4.62,
    stock: 136,
    brand: "The Warehouse",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/54/1.jpg",
      "https://i.dummyjson.com/data/products/54/2.jpg",
      "https://i.dummyjson.com/data/products/54/3.jpg",
      "https://i.dummyjson.com/data/products/54/4.jpg",
      "https://i.dummyjson.com/data/products/54/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Money Heist Printed Summer T Shirts",
    description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
    price: 66,
    discountPercentage: 15.97,
    rating: 4.9,
    stock: 122,
    brand: "The Warehouse",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/55/4.jpg",
    images: [
      "https://i.dummyjson.com/data/products/55/1.jpg",
      "https://i.dummyjson.com/data/products/55/2.webp",
      "https://i.dummyjson.com/data/products/55/3.jpg",
      "https://i.dummyjson.com/data/products/55/4.jpg",
      "https://i.dummyjson.com/data/products/55/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    discountPercentage: 6.18,
    rating: 4.2,
    stock: 3,
    brand: "Raymond",
    category: "mens-clothing",
    usedFor: 'mens',
    thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    _id: uuid(),
    title: "Sneakers Joggers Shoes",
    description: "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
    price: 40,
    discountPercentage: 12.57,
    rating: 4.38,
    stock: 6,
    brand: "Sneakers",
    category: "mens-shoes",
    usedFor: 'mens',
    thumbnail: "https://m.media-amazon.com/images/I/71VgSPTxPnL._UL1500_.jpg",
    images: [
      "https://cdn.shopify.com/s/files/1/2575/9828/products/2083ffa20fe76cf9cc4023261c9bddac_1904x.progressive_8a775a60-5ac4-40f9-a003-671c72800c3a_grande.jpg?v=1606494245",
      "https://i.ebayimg.com/images/g/zmMAAOSwgr9jDM6H/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/4KQAAOSwT9liusn6/s-l500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDPr1hGzyDhDUc_NtNw198bfcg0UDV-5TH5VUrFLAq_63YFwPsGCkoMckp1xjz_L4SQHa6tO94oM&usqp=CAU&ec=48665699",
      "https://i.dummyjson.com/data/products/56/5.jpg",
      "https://i.dummyjson.com/data/products/56/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Loafers for men",
    description: "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
    price: 47,
    discountPercentage: 10.91,
    rating: 4.91,
    stock: 20,
    brand: "Rubber",
    category: "mens-shoes",
    usedFor: 'mens',
    thumbnail: "https://5.imimg.com/data5/CY/QJ/MY-25539252/leather-shoes-for-men-leather-loafer-shoes-lo33-black-1000x1000.png",
    images: [
      "https://m.media-amazon.com/images/I/41upWLHyU-L.jpg",
      "https://m.media-amazon.com/images/I/71adfun8YuL._UY625_.jpg",
      "https://5.imimg.com/data5/FY/QY/EA/SELLER-51594600/mens-loafers-shoes-1000x1000.jpg",
      "https://i.dummyjson.com/data/products/57/4.jpg",
      "https://i.dummyjson.com/data/products/57/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "formal offices shoes",
    description: "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
    price: 57,
    discountPercentage: 12,
    rating: 4.41,
    stock: 68,
    brand: "The Warehouse",
    category: "mens-shoes",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/58/1.jpg",
      "https://i.dummyjson.com/data/products/58/2.jpg",
      "https://i.dummyjson.com/data/products/58/3.jpg",
      "https://i.dummyjson.com/data/products/58/4.jpg",
      "https://i.dummyjson.com/data/products/58/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Spring and summershoes",
    description: "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
    price: 20,
    discountPercentage: 8.71,
    rating: 4.33,
    stock: 137,
    brand: "Sneakers",
    category: "mens-shoes",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/59/3.jpg",
    images: [
      "https://i.dummyjson.com/data/products/59/1.jpg",
      "https://i.dummyjson.com/data/products/59/2.jpg",
      "https://i.dummyjson.com/data/products/59/3.jpg",
      "https://i.dummyjson.com/data/products/59/4.jpg",
      "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Stylish Casual Jeans Shoes",
    description: "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
    price: 58,
    discountPercentage: 7.55,
    rating: 4.55,
    stock: 129,
    brand: "Sneakers",
    category: "mens-shoes",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/60/1.jpg",
      "https://i.dummyjson.com/data/products/60/2.jpg",
      "https://i.dummyjson.com/data/products/60/3.jpg",
      "https://i.dummyjson.com/data/products/60/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Leather Straps Wristwatch",
    description: "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
    price: 120,
    discountPercentage: 7.14,
    rating: 4.63,
    stock: 91,
    brand: "Naviforce",
    category: "mens-watches",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/61/1.jpg",
      "https://i.dummyjson.com/data/products/61/2.png",
      "https://i.dummyjson.com/data/products/61/3.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Waterproof Leather Brand Watch",
    description: "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
    price: 46,
    discountPercentage: 3.15,
    rating: 4.05,
    stock: 95,
    brand: "SKMEI 9117",
    category: "mens-watches",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/62/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/62/1.jpg",
      "https://i.dummyjson.com/data/products/62/2.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Royal Blue Premium Watch",
    description: "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
    price: 50,
    discountPercentage: 2.56,
    rating: 4.89,
    stock: 142,
    brand: "SKMEI 9117",
    category: "mens-watches",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/63/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/63/1.jpg",
      "https://i.dummyjson.com/data/products/63/2.jpg",
      "https://i.dummyjson.com/data/products/63/3.png",
      "https://i.dummyjson.com/data/products/63/4.jpeg"
    ]
  },
  {
    _id: uuid(),
    title: "Leather Strap Skeleton Watch",
    description: "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
    price: 46,
    discountPercentage: 10.2,
    rating: 4.98,
    stock: 61,
    brand: "Strap Skeleton",
    category: "mens-watches",
    usedFor: 'mens',
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKOX3svFY6fPNE1n2kXkBZfmtMhBdcNr0QXij5_tv0WvI5EDB3nnPcAWxKuSpKLhn8ez0YTzp8ho&usqp=CAU&ec=48665699",
    images: [
      "https://www.pngitem.com/pimgs/m/490-4909977_cartier-mens-watch-hd-png-download.png",
      "https://images.squarespace-cdn.com/content/v1/54661df4e4b0c1af99306b69/1521317205943-WPJB1A5469GUFPBG3NNN/Rotary+Rose+Gold+Cambridge+Gents+Chronograph+Quart.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKOX3svFY6fPNE1n2kXkBZfmtMhBdcNr0QXij5_tv0WvI5EDB3nnPcAWxKuSpKLhn8ez0YTzp8ho&usqp=CAU&ec=48665699",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LLYhCUQkL15pRDAd4JUerOLgAZjwoQ17OXs0MgNmm3hUQEhiIBDskzcT4tuyofNLFI4e3rrO4Hw&usqp=CAU&ec=48665699"
    ]
  },
  {
    _id: uuid(),
    title: "Stainless Steel Wrist Watch",
    description: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    price: 47,
    discountPercentage: 17.79,
    rating: 4.79,
    stock: 94,
    brand: "Stainless",
    category: "mens-watches",
    usedFor: 'mens',
    thumbnail: "https://i.dummyjson.com/data/products/65/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/65/1.jpg",
      "https://i.dummyjson.com/data/products/65/2.webp",
      "https://i.dummyjson.com/data/products/65/3.jpg",
      "https://i.dummyjson.com/data/products/65/4.webp",
      "https://i.dummyjson.com/data/products/65/thumbnail.webp"
    ]
  },
  {
    _id: uuid(),
    title: "Steel Analog Couple Watches",
    description: "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
    price: 35,
    discountPercentage: 3.23,
    rating: 4.79,
    stock: 24,
    brand: "Eastern Watches",
    category: "womens-watches",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/66/1.jpg",
      "https://i.dummyjson.com/data/products/66/2.jpg",
      "https://i.dummyjson.com/data/products/66/3.jpg",
      "https://i.dummyjson.com/data/products/66/4.JPG",
      "https://i.dummyjson.com/data/products/66/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Fashion Magnetic Wrist Watch",
    description: "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    price: 60,
    discountPercentage: 16.69,
    rating: 4.03,
    stock: 46,
    brand: "Eastern Watches",
    category: "womens-watches",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/67/1.jpg",
      "https://i.dummyjson.com/data/products/67/2.jpg",
      "https://i.dummyjson.com/data/products/67/3.jpg",
      "https://i.dummyjson.com/data/products/67/4.jpg",
      "https://i.dummyjson.com/data/products/67/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Stylish Luxury Digital Watch",
    description: "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
    price: 57,
    discountPercentage: 9.03,
    rating: 4.55,
    stock: 77,
    brand: "Luxury Digital",
    category: "womens-watches",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/68/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/68/1.jpg",
      "https://i.dummyjson.com/data/products/68/2.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Golden Watch Pearls Bracelet Watch",
    description: "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
    price: 47,
    discountPercentage: 17.55,
    rating: 4.77,
    stock: 89,
    brand: "Watch Pearls",
    category: "womens-watches",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/69/1.jpg",
      "https://i.dummyjson.com/data/products/69/2.jpg",
      "https://i.dummyjson.com/data/products/69/3.webp",
      "https://i.dummyjson.com/data/products/69/4.jpg",
      "https://i.dummyjson.com/data/products/69/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Stainless Steel Women",
    description: "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
    price: 35,
    discountPercentage: 8.98,
    rating: 4.08,
    stock: 111,
    brand: "Bracelet",
    category: "womens-watches",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/70/1.jpg",
      "https://i.dummyjson.com/data/products/70/2.jpg",
      "https://i.dummyjson.com/data/products/70/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Women Shoulder Bags",
    description: "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
    price: 46,
    discountPercentage: 14.65,
    rating: 4.71,
    stock: 17,
    brand: "LouisWill",
    category: "girls-frock",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/71/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/71/1.jpg",
      "https://i.dummyjson.com/data/products/71/2.jpg",
      "https://i.dummyjson.com/data/products/71/3.webp",
      "https://i.dummyjson.com/data/products/71/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Handbag For Girls",
    description: "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
    price: 23,
    discountPercentage: 17.5,
    rating: 4.91,
    stock: 27,
    brand: "LouisWill",
    category: "girls-frock",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/72/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/72/1.jpg",
      "https://i.dummyjson.com/data/products/72/2.png",
      "https://i.dummyjson.com/data/products/72/3.webp",
      "https://i.dummyjson.com/data/products/72/4.jpg",
      "https://i.dummyjson.com/data/products/72/thumbnail.webp"
    ]
  },
  {
    _id: uuid(),
    title: "Fancy hand clutch",
    description: "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
    price: 44,
    discountPercentage: 10.39,
    rating: 4.18,
    stock: 101,
    brand: "Bracelet",
    category: "girls-frock",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/73/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/73/1.jpg",
      "https://i.dummyjson.com/data/products/73/2.webp",
      "https://i.dummyjson.com/data/products/73/3.jpg",
      "https://i.dummyjson.com/data/products/73/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Leather Hand Bag",
    description: "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.",
    price: 57,
    discountPercentage: 11.19,
    rating: 4.01,
    stock: 43,
    brand: "Copenhagen Luxe",
    category: "girls-frock",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/74/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/74/1.jpg",
      "https://i.dummyjson.com/data/products/74/2.jpg",
      "https://i.dummyjson.com/data/products/74/3.jpg",
      "https://i.dummyjson.com/data/products/74/4.jpg",
      "https://i.dummyjson.com/data/products/74/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Seven Pocket Women Bag",
    description: "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
    price: 68,
    discountPercentage: 14.87,
    rating: 4.93,
    stock: 13,
    brand: "Steal Frame",
    category: "girls-frock",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/75/1.jpg",
      "https://i.dummyjson.com/data/products/75/2.jpg",
      "https://i.dummyjson.com/data/products/75/3.jpg",
      "https://i.dummyjson.com/data/products/75/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Silver Ring Set Women",
    description: "Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious",
    price: 70,
    discountPercentage: 13.57,
    rating: 4.61,
    stock: 51,
    brand: "Darojay",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/76/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/76/1.jpg",
      "https://i.dummyjson.com/data/products/76/2.jpg",
      "https://i.dummyjson.com/data/products/76/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Rose Ring",
    description: "Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable",
    price: 100,
    discountPercentage: 3.22,
    rating: 4.21,
    stock: 149,
    brand: "Copenhagen Luxe",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/77/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/77/1.jpg",
      "https://i.dummyjson.com/data/products/77/2.jpg",
      "https://i.dummyjson.com/data/products/77/3.jpg",
      "https://i.dummyjson.com/data/products/77/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Rhinestone Korean Style Open Rings",
    description: "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women",
    price: 30,
    discountPercentage: 8.02,
    rating: 4.69,
    stock: 9,
    brand: "Fashion Jewellery",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/78/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/78/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Elegant Female Pearl Earrings",
    description: "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set",
    price: 30,
    discountPercentage: 12.8,
    rating: 4.74,
    stock: 16,
    brand: "Fashion Jewellery",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/79/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/79/1.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Chain Pin Tassel Earrings",
    description: "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)",
    price: 45,
    discountPercentage: 17.75,
    rating: 4.59,
    stock: 9,
    brand: "Cuff Butterfly",
    category: "womens-jewellery",
    usedFor: 'womens',
    thumbnail: "https://i.dummyjson.com/data/products/80/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/80/1.jpg",
      "https://i.dummyjson.com/data/products/80/2.jpg",
      "https://i.dummyjson.com/data/products/80/3.png",
      "https://i.dummyjson.com/data/products/80/4.jpg",
      "https://i.dummyjson.com/data/products/80/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Round Silver Frame Sun Glasses",
    description: "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,",
    price: 19,
    discountPercentage: 10.1,
    rating: 4.94,
    stock: 78,
    brand: "Designer Sun Glasses",
    category: "sunglasses",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/81/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/81/1.jpg",
      "https://i.dummyjson.com/data/products/81/2.jpg",
      "https://i.dummyjson.com/data/products/81/3.jpg",
      "https://i.dummyjson.com/data/products/81/4.webp",
      "https://i.dummyjson.com/data/products/81/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Kabir Singh Square Sunglass",
    description: "Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass",
    price: 50,
    discountPercentage: 15.6,
    rating: 4.62,
    stock: 78,
    brand: "Designer Sun Glasses",
    category: "sunglasses",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/82/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/82/1.jpg",
      "https://i.dummyjson.com/data/products/82/2.webp",
      "https://i.dummyjson.com/data/products/82/3.jpg",
      "https://i.dummyjson.com/data/products/82/4.jpg",
      "https://i.dummyjson.com/data/products/82/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Wiley X Night Vision Yellow Glasses",
    description: "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches",
    price: 30,
    discountPercentage: 6.33,
    rating: 4.97,
    stock: 115,
    brand: "mastar watch",
    category: "sunglasses",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/83/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/83/1.jpg",
      "https://i.dummyjson.com/data/products/83/2.jpg",
      "https://i.dummyjson.com/data/products/83/3.jpg",
      "https://i.dummyjson.com/data/products/83/4.jpg",
      "https://i.dummyjson.com/data/products/83/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Square Sunglasses",
    description: "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059",
    price: 28,
    discountPercentage: 13.89,
    rating: 4.64,
    stock: 64,
    brand: "mastar watch",
    category: "sunglasses",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/84/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/84/1.jpg",
      "https://i.dummyjson.com/data/products/84/2.jpg",
      "https://i.dummyjson.com/data/products/84/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "LouisWill Men Sunglasses",
    description: "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers",
    price: 50,
    discountPercentage: 11.27,
    rating: 4.98,
    stock: 92,
    brand: "LouisWill",
    category: "sunglasses",
    usedFor: 'beauty',
    thumbnail: "https://i.dummyjson.com/data/products/85/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/85/1.jpg",
      "https://i.dummyjson.com/data/products/85/2.jpg",
      "https://i.dummyjson.com/data/products/85/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "lighting ceiling kitchen",
    description: "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
    price: 30,
    discountPercentage: 14.89,
    rating: 4.83,
    stock: 96,
    brand: "lightingbrilliance",
    category: "lighting",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/96/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/96/1.jpg",
      "https://i.dummyjson.com/data/products/96/2.jpg",
      "https://i.dummyjson.com/data/products/96/3.jpg",
      "https://i.dummyjson.com/data/products/96/4.jpg",
      "https://i.dummyjson.com/data/products/96/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Metal Ceramic Flower",
    description: "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
    price: 35,
    discountPercentage: 10.94,
    rating: 4.93,
    stock: 146,
    brand: "Ifei Home",
    category: "lighting",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/97/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/97/1.jpg",
      "https://i.dummyjson.com/data/products/97/2.jpg",
      "https://i.dummyjson.com/data/products/97/3.jpg",
      "https://i.dummyjson.com/data/products/97/4.webp",
      "https://i.dummyjson.com/data/products/97/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "3 lights lndenpant kitchen islang",
    description: "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
    price: 34,
    discountPercentage: 5.92,
    rating: 4.99,
    stock: 44,
    brand: "DADAWU",
    category: "lighting",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/98/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/98/1.jpg",
      "https://i.dummyjson.com/data/products/98/2.jpg",
      "https://i.dummyjson.com/data/products/98/3.jpg",
      "https://i.dummyjson.com/data/products/98/4.jpg",
      "https://i.dummyjson.com/data/products/98/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "American Vintage Wood Pendant Light",
    description: "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
    price: 46,
    discountPercentage: 8.84,
    rating: 4.32,
    stock: 138,
    brand: "Ifei Home",
    category: "lighting",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/99/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/99/1.jpg",
      "https://i.dummyjson.com/data/products/99/2.jpg",
      "https://i.dummyjson.com/data/products/99/3.jpg",
      "https://i.dummyjson.com/data/products/99/4.jpg",
      "https://i.dummyjson.com/data/products/99/thumbnail.jpg"
    ]
  },
  {
    _id: uuid(),
    title: "Crystal chandelier maria theresa for 12 light",
    description: "Crystal chandelier maria theresa for 12 light",
    price: 47,
    discountPercentage: 16,
    rating: 4.74,
    stock: 133,
    brand: "YIOSI",
    category: "lighting",
    usedFor: 'home',
    thumbnail: "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/100/1.jpg",
      "https://i.dummyjson.com/data/products/100/2.jpg",
      "https://i.dummyjson.com/data/products/100/3.jpg",
      "https://i.dummyjson.com/data/products/100/thumbnail.jpg"
    ]
  }
];
