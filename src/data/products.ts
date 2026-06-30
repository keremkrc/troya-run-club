import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "troya-run-club-custom-tshirt",
    name: "TROYA / KİŞİYE ÖZEL T-SHIRT (3D)",
    price: 1499,
    salePrice: 1199,
    image: "/product-custom-cover.jpg",
    category: "Üst Giyim",
    description: "Kişiye özel tasarım kısa kollu sıfır yaka t-shirt (100V1). Kendi 3 boyutlu tasarımınızı inceleyin.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    is3D: true,
    modelUrl: "https://tasarim.jrsw.com/studyo/avONmY9G",
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
