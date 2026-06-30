import { client } from "@/sanity/client";
import EtkinliklerClient from "./EtkinliklerClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EtkinliklerPage() {
  const events = await client.fetch(`*[_type == "etkinlik"] | order(date asc)`);
  return <EtkinliklerClient initialEvents={events} />;
}
