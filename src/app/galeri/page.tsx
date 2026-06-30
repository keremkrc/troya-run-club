import { client } from "@/sanity/client";
import GaleriClient from "./GaleriClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function GaleriPage() {
  const items = await client.fetch(`*[_type == "galeri"] | order(date desc)`);
  return <GaleriClient galleryItems={items} />;
}
