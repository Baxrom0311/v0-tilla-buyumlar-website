import { Award, Truck, RefreshCcw, CreditCard, BadgeCheck, Headphones } from "lucide-react"

const items = [
  {
    icon: Award,
    title: "Asl probali tilla",
    desc: "585 va 750 probali, davlat sertifikati bilan tasdiqlangan.",
  },
  {
    icon: Truck,
    title: "Bepul yetkazib berish",
    desc: "5 mln so'mdan yuqori xaridlar uchun butun O'zbekiston bo'ylab.",
  },
  {
    icon: RefreshCcw,
    title: "14 kun ichida qaytarish",
    desc: "Buyum o'zgarmagan holda — pulingizni qaytarib beramiz.",
  },
  {
    icon: CreditCard,
    title: "0% muddatli to'lov",
    desc: "12 oygacha ustamasiz, faqat pasportingizni olib keling.",
  },
  {
    icon: BadgeCheck,
    title: "Ustaxona kafolati",
    desc: "Tozalash va o'lchamga moslashtirish — birinchi yili bepul.",
  },
  {
    icon: Headphones,
    title: "24/7 yordam markazi",
    desc: "Mutaxassis maslahatchi yordami har qachon, har joyda.",
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-14 sm:py-20 lg:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-deep mb-2 sm:mb-3">
            Nima uchun biz
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Sizga ishonch beradigan sabablar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div
                key={it.title}
                className="bg-card p-5 sm:p-7 lg:p-8 flex flex-col gap-2.5 sm:gap-3 transition-colors hover:bg-secondary/50"
              >
                <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-gold/10 text-gold-deep flex items-center justify-center">
                  <Icon className="size-4 sm:size-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mt-1 sm:mt-2">
                  {it.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
