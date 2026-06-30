import { client } from "@/sanity/client";
import ProductClient from "./ProductClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60;

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = await client.fetch(`*[_type == "urun" && _id == $slug][0]`, { slug: resolvedParams.slug });

  return <ProductClient product={product} />;
}
