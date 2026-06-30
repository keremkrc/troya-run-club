import { client } from "@/sanity/client";
import ShopShowcaseClient from "./ShopShowcaseClient";

export default async function ShopShowcase() {
  const products = await client.fetch(`*[_type == "urun"] | order(_createdAt desc)`);
  return <ShopShowcaseClient products={products} />;
}
