export type Category = {
  slug: string
  name: string
  description: string
  count: number
  icon: "ring" | "bracelet" | "earring" | "set" | "chain"
}

export const categories: Category[] = [
  {
    slug: "uzuk",
    name: "Uzuklar",
    description: "Nafis va klassik turdagi uzuklar kolleksiyasi",
    count: 42,
    icon: "ring",
  },
  {
    slug: "bilaguzuk",
    name: "Bilaguzuklar",
    description: "Qalin va mustahkam zanjirlar qo'l uchun",
    count: 28,
    icon: "bracelet",
  },
  {
    slug: "sirga",
    name: "Sirg'alar",
    description: "Yorqin va zamonaviy uslubdagi sirg'alar",
    count: 35,
    icon: "earring",
  },
  {
    slug: "komplekt",
    name: "To'plamlar",
    description: "To'ylar va tantanali kechalar uchun",
    count: 18,
    icon: "set",
  },
  {
    slug: "zanjir",
    name: "Zanjirlar",
    description: "Klassik va zamonaviy zanjirlar tanlovi",
    count: 31,
    icon: "chain",
  },
]

export type Product = {
  id: string
  name: string
  category: string
  price: number
  oldPrice?: number
  image: string
  proba: "585" | "750"
  weight: number
  rating: number
  reviews: number
  isNew?: boolean
  isHot?: boolean
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Brilliantli nikoh uzugi",
    category: "Uzuklar",
    price: 8_450_000,
    oldPrice: 9_900_000,
    image: "/products/ring-1.jpg",
    proba: "750",
    weight: 4.2,
    rating: 4.9,
    reviews: 124,
    isHot: true,
  },
  {
    id: "p2",
    name: "Zumrad va olmosli uzuk",
    category: "Uzuklar",
    price: 12_300_000,
    image: "/products/ring-2.jpg",
    proba: "750",
    weight: 5.8,
    rating: 4.8,
    reviews: 67,
    isNew: true,
  },
  {
    id: "p3",
    name: "Tilla zanjir kulon bilan",
    category: "Zanjirlar",
    price: 6_750_000,
    oldPrice: 7_500_000,
    image: "/products/necklace-1.jpg",
    proba: "585",
    weight: 8.4,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "p4",
    name: "Olmosli osma sirg'alar",
    category: "Sirg'alar",
    price: 5_200_000,
    image: "/products/earring-1.jpg",
    proba: "750",
    weight: 3.6,
    rating: 4.9,
    reviews: 142,
    isNew: true,
  },
  {
    id: "p5",
    name: "Tennis bilaguzuk olmoslar bilan",
    category: "Bilaguzuklar",
    price: 18_900_000,
    oldPrice: 21_500_000,
    image: "/products/bracelet-1.jpg",
    proba: "750",
    weight: 12.5,
    rating: 5.0,
    reviews: 38,
    isHot: true,
  },
  {
    id: "p6",
    name: "Klassik kuban zanjir",
    category: "Zanjirlar",
    price: 9_400_000,
    image: "/products/chain-1.jpg",
    proba: "585",
    weight: 14.2,
    rating: 4.6,
    reviews: 211,
  },
  {
    id: "p7",
    name: "To'y to'plami — 4 buyum",
    category: "To'plamlar",
    price: 24_500_000,
    oldPrice: 28_000_000,
    image: "/products/set-1.jpg",
    proba: "750",
    weight: 22.8,
    rating: 4.9,
    reviews: 54,
    isHot: true,
  },
  {
    id: "p8",
    name: "Halqa shaklidagi sirg'alar",
    category: "Sirg'alar",
    price: 3_850_000,
    image: "/products/earring-2.jpg",
    proba: "585",
    weight: 4.1,
    rating: 4.5,
    reviews: 96,
  },
]

export const flashSale = products.filter((p) => p.oldPrice).slice(0, 4)

export type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Madina Karimova",
    role: "Toshkent",
    quote:
      "Eshigimga keltirib berishdi, qadoqlash juda chiroyli edi. Uzukning sifati haqida gapirmasa ham bo'ladi — barmog'imda chaqnab turibdi!",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Akmal Yusupov",
    role: "Samarqand",
    quote:
      "Rafiqamga to'y sovg'asi sifatida to'plam oldim. Sertifikat bilan keldi, narxi do'kondagidan ham qulayroq bo'ldi. Rahmat!",
    rating: 5,
    initials: "AY",
  },
  {
    name: "Nilufar Tursunova",
    role: "Buxoro",
    quote:
      "3 yildan beri shu yerdan oldirib kelaman. Mijozlarga munosabat ajoyib, qaytarish va almashtirish ham juda oson tashkil etilgan.",
    rating: 5,
    initials: "NT",
  },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: "Buyumlarning sifati qanday tasdiqlanadi?",
    a: "Har bir buyum 585 yoki 750 proba muhri bilan keladi va davlat sertifikati hamda do'kon kafolatnomasi bilan birga taqdim etiladi.",
  },
  {
    q: "Yetkazib berish qancha vaqt oladi?",
    a: "Toshkent bo'ylab — 1–2 ish kuni, viloyatlarga — 2–4 ish kuni. 5 000 000 so'mdan yuqori xaridlar uchun yetkazib berish bepul.",
  },
  {
    q: "Buyumni qaytarish yoki almashtirish mumkinmi?",
    a: "Ha, sotib olingan kundan boshlab 14 kun davomida yorliqlari saqlanib qolgan holda qaytarish yoki almashtirish mumkin.",
  },
  {
    q: "Bo'lib-bo'lib to'lash imkoniyati bormi?",
    a: "Ha, 3, 6, 9 va 12 oyga 0% ustamasiz muddatli to'lov mavjud. Hujjatlardan faqat pasport talab qilinadi.",
  },
  {
    q: "Buyumlarni o'lchamga moslashtirish mumkinmi?",
    a: "Ustaxonamizda har qanday uzukni 24 soat ichida bepul o'lchamga moslashtirib beramiz.",
  },
]

export function formatSom(value: number) {
  return value.toLocaleString("ru-RU") + " so'm"
}
