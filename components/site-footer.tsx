import Link from "next/link"
import { Facebook, Instagram, Send, Phone, MapPin, Mail } from "lucide-react"

const cols = [
  {
    title: "Katalog",
    links: ["Uzuklar", "Bilaguzuklar", "Sirg'alar", "Zanjirlar", "To'plamlar"],
  },
  {
    title: "Mijozlarga",
    links: [
      "Yetkazib berish",
      "To'lov turlari",
      "Qaytarish",
      "Bo'lib to'lash",
      "FAQ",
    ],
  },
  {
    title: "Kompaniya",
    links: ["Biz haqimizda", "Do'konlar", "Karyera", "Aloqa", "Maxfiylik"],
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-ink text-cream pt-14 sm:pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-10 sm:size-11 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="font-serif italic text-ink font-bold text-lg sm:text-xl leading-none">T</span>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-lg sm:text-xl font-bold tracking-wider">TILLA</div>
                <div className="text-[10px] tracking-[0.3em] text-cream/50 -mt-1">BUYUMLAR</div>
              </div>
            </Link>

            <p className="mt-4 sm:mt-5 text-sm text-cream/60 leading-relaxed max-w-sm">
              O&apos;zbekistondagi eng yirik premium zargarlik do&apos;koni. Asl tilla buyumlar, davlat sertifikati va
              ustaxona kafolati bilan.
            </p>

            <div className="mt-5 sm:mt-6 space-y-3">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-3 text-sm text-cream/80 hover:text-gold transition-colors"
              >
                <span className="size-9 shrink-0 rounded-full bg-cream/[0.06] flex items-center justify-center">
                  <Phone className="size-4 text-gold" />
                </span>
                +998 90 123 45 67
              </a>
              <a
                href="mailto:info@tillabuyumlar.uz"
                className="flex items-center gap-3 text-sm text-cream/80 hover:text-gold transition-colors break-all"
              >
                <span className="size-9 shrink-0 rounded-full bg-cream/[0.06] flex items-center justify-center">
                  <Mail className="size-4 text-gold" />
                </span>
                info@tillabuyumlar.uz
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/80">
                <span className="size-9 rounded-full bg-cream/[0.06] flex items-center justify-center shrink-0">
                  <MapPin className="size-4 text-gold" />
                </span>
                <span className="leading-relaxed pt-1">
                  Toshkent shahar, Amir Temur ko&apos;chasi 12, Chorsu savdo markazi, 2-qavat
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="font-serif text-xs sm:text-sm font-semibold tracking-widest uppercase text-cream mb-3 sm:mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Hours / Social */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xs sm:text-sm font-semibold tracking-widest uppercase text-cream mb-3 sm:mb-4">
              Ish vaqti
            </h4>
            <div className="text-sm text-cream/70 space-y-1">
              <div className="flex justify-between gap-3">
                <span className="text-cream/50">Du–Ju</span>
                <span>09:00–20:00</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-cream/50">Sha–Yak</span>
                <span>10:00–21:00</span>
              </div>
            </div>

            <h4 className="font-serif text-xs sm:text-sm font-semibold tracking-widest uppercase text-cream mt-6 sm:mt-8 mb-3 sm:mb-4">
              Ijtimoiy
            </h4>
            <div className="flex gap-2">
              {[Instagram, Facebook, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 rounded-full border border-cream/10 bg-cream/[0.04] flex items-center justify-center text-cream/70 hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                  aria-label="Ijtimoiy tarmoq"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 sm:pt-8">
          <p className="text-xs text-cream/40 order-2 sm:order-1">
            © 2026 Tilla Buyumlar. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/40 order-1 sm:order-2">
            <a href="#" className="hover:text-gold transition-colors">
              Foydalanish shartlari
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Maxfiylik
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
