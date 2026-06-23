export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Women' | 'Men' | 'New Arrivals';
  sizes: string[];
  colors: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Maasai Beaded Sandal',
    description: `Our signature women's sandal featuring traditional vibrant beadwork and genuine leather straps. Handcrafted by skilled Maasai artisans.`,
    price: 45.00,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/womens-sandals-1-9aac8a66-1782191903913.webp',
    category: 'Women',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Multi', 'Red', 'Blue'],
    stock: 15
  },
  {
    id: '2',
    name: `Men's Warrior Leather Slide`,
    description: `Rugged and comfortable men's leather slide with minimalist geometric bead accents. Durable sole for everyday wear.`,
    price: 55.00,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/mens-sandals-1-bf0adff0-1782191903274.webp',
    category: 'Men',
    sizes: ['41', '42', '43', '44', '45'],
    colors: ['Brown', 'Black'],
    stock: 10
  },
  {
    id: '3',
    name: 'Safari Sunset Beaded Thong',
    description: 'Elegant thong-style sandal with a sunset-inspired bead pattern. Perfect for summer outings and beach days.',
    price: 48.00,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/featured-sandals-1-128ad085-1782191905131.webp',
    category: 'Women',
    sizes: ['37', '38', '39', '40'],
    colors: ['Orange/Gold', 'Red/Black'],
    stock: 8
  },
  {
    id: '4',
    name: 'Heritage Cross-Strap Sandal',
    description: 'Cross-strap design with intricate blue and white beadwork representing the Maasai heritage.',
    price: 50.00,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/331ebd59-dcdd-47fa-8140-6f633b8827ba/womens-sandals-1-9aac8a66-1782191903913.webp',
    category: 'New Arrivals',
    sizes: ['36', '38', '40', '42'],
    colors: ['Blue', 'Black'],
    stock: 20
  }
];
