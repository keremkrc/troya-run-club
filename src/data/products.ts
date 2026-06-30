import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "troya-run-club-tshirt",
    name: "TROYA / TSHIRT",
    price: 1199,
    salePrice: 899,
    image: "/product-tshirt.jpg",
    category: "Üst Giyim",
    description: "Hızlı kuruyan performans teknolojisi ile Çanakkale'nin enerjisini taşıyan özel tasarım koşu tişörtü. Unisex kesim, %88 Polyester %12 Elastane.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "troya-run-club-hoodie",
    name: "TROYA / HOODIE",
    price: 1999,
    salePrice: 1499,
    image: "/product-hoodie.jpg",
    category: "Üst Giyim",
    description: "Antik Truva'nın bronz renklerinden ilham alan premium hoodie. French Terry iç doku, oversize kesim, Türkiye'de üretim.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "troya-run-club-cap",
    name: "TROYA / ŞAPKA",
    price: 499,
    image: "/product-tshirt.jpg",
    category: "Aksesuar",
    description: "UV korumalı, nefes alabilir dokuma şapka. Lacivert/bronz renk seçeneği. Ayarlanabilir kemer.",
    sizes: ["Tek Beden"],
  },
];
