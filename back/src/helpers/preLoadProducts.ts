import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string[];
  categoryId: number;
  stock: number;
}
const productsToPreLoad: IProduct[] = [
  {
    name: "Expedition Backpack",
    price: 129,
    description:
      "Designed for outdoor enthusiasts, our expedition backpack combines durability and comfort for all your adventures.",
    image: [
      "https://m.media-amazon.com/images/I/81M1wDX0t-L._SL1500_.jpg",
      "https://i5.walmartimages.com/seo/60L-Hiking-Backpack-Water-resistant-Climbing-Camping-Backpack-Travel-Daypack-with-Rain-Cover_3436ab90-8031-4362-a3a6-4b52ba170545.8886edba066f915fa1741a6a9b4e5329.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "https://m.media-amazon.com/images/I/71qztXoJ2GL._SL1500_.jpg",
    ], // Replace with actual image URL

    categoryId: 1, // Example category ID for outdoor products
    stock: 15,
  },

  {
    name: "All-Terrain Hiking Boots",
    price: 149,
    description:
      "Conquer any terrain with our rugged all-terrain hiking boots, built for durability and comfort.",
    image: [
      "https://dms.deckers.com/tevaus/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f3f3f3/w_1110/v1702577380/catalog/images/transparent/1106832-DTT_1.png?_s=RAABAB0",
      "https://dms.deckers.com/tevaus/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f3f3f3/w_1110/v1711577829/catalog/images/transparent/1116631-TTRP_1.png?_s=RAABAB0",
      "https://cdn11.bigcommerce.com/s-8p220y2h7i/images/stencil/1000x1000/products/68369/67477/4__96017.1659460182.jpg?c=2",
    ], // Replace with actual image URL

    categoryId: 2,
    stock: 20,
  },
  {
    name: "Portable Camping Stove",
    price: 79,
    description:
      "Cook up a storm in the great outdoors with our portable camping stove, compact and efficient.",
    image: [
      "https://m.media-amazon.com/images/I/61CxGaz8oRL.jpg",
      "https://m.media-amazon.com/images/I/61b+DnmrOoL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71Co87Wvr8L._AC_UF894,1000_QL80_.jpg",
    ], // Replace with actual image URL

    categoryId: 3,
    stock: 10,
  },
  {
    name: "Outdoor Waterproof Tent",
    price: 299,
    description:
      "Sleep comfortably under the stars with our spacious waterproof tent, perfect for any weather conditions.",
    image: [
      "https://assets.wfcdn.com/im/11592796/compr-r85/1476/147653518/outdoor-camping-tent-with-sleeping-bag-and-air-mattress.jpg",
      "https://i.ebayimg.com/thumbs/images/g/A7kAAOSwt31kSKAy/s-l1200.jpg",
      "https://multimedia.bbycastatic.ca/multimedia/products/500x500/158/15859/15859506.jpeg",
    ], // Replace with actual image URL

    categoryId: 4,
    stock: 8,
  },
  {
    name: "Adventure Backpacking Kit",
    price: 399,
    description:
      "Gear up for your next adventure with our comprehensive backpacking kit,everything you need for the journey ahead.",
    image: [
      "https://m.media-amazon.com/images/I/813TbZ433PL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/81pL681iVdL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/81ptJf6UadL._AC_UF1000,1000_QL80_.jpg",
    ], // Replace with actual image URL

    categoryId: 5,
    stock: 12,
  },
  {
    name: "Compact Camping Lantern",
    price: 49,
    description:
      "Illuminate your campsite with our compact camping lantern, providing bright and reliable light in a portable design.",
    image: [
      "https://m.media-amazon.com/images/I/71v21cgCpHL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51saeI+tXjL.jpg",
      "https://m.media-amazon.com/images/I/41fstGSc2yL._SL500_.jpg",
    ], // Replace with actual image URL

    categoryId: 6,
    stock: 20,
  },
  {
    name: "Fishing Rod and Tackle Kit",
    price: 149,
    description:
      "Enjoy fishing expeditions with our fishing rod and tackle kit, designed for both novice and seasoned anglers.",
    image: [
      "https://m.media-amazon.com/images/I/71cxu6hz+6L._AC_UF894,1000_QL80_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71KH9yV480L._AC_UL600_SR600,600_.jpg",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/fishing-rod/e/t/u/210-feeder-set-abirs-original-imagp6zzu8bh2gzj.jpeg?q=20&crop=false",
    ], // Replace with actual image URL

    categoryId: 7,
    stock: 18,
  },
  {
    name: "Insulated Camping Mug",
    price: 29,
    description:
      "Keep your beverages hot or cold during your outdoor adventures with our insulated camping mug, designed for durability and practicality.",
    image: [
      "https://www.treklightgear.com/cdn/shop/files/camping-is-for-lovers-enamel-mug-trek-light-gear.jpg?v=1693944439",
      "https://www.parksproject.us/cdn/shop/files/NationalParksIconicEnamelMug_StudioProduct_Q42023_001.jpg?v=1700597661",
      "https://www.parksproject.us/cdn/shop/products/Iconic-NP-Enamel-Mug-Parks-Project-1_1600x.jpg?v=1700508692",
    ], // Replace with actual image URL

    categoryId: 8,
    stock: 25,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
