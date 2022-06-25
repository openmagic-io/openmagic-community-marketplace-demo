export type listingType = {
  id: number;
  title: string;
  price: string;
  description: string;
  seller: string;
  imageSrc: string;
  listPublicly: boolean;
  communities: any[];
  listed: number
}

export const listings = <listingType[]> [
  {
    id: 1,
    title: 'Leather Long Wallet',
    price: '$75',
    description: "this is a test description",
    seller: "kesslykaes.eth",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    listPublicly: true,
    communities: [{ name: "PlantDAO"}],
    listed: 1656174140,
  },
  {
    id: 2,
    title: 'Leather Long Wallet',
    price: '$75',
    description: "this is a test description",
    seller: "kesslykaes.eth",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    listPublicly: true,
    communities: [],
    listed: 1656174140,
  },
]