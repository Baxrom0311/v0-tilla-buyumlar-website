import { categories } from "@/lib/data"
import { ArrowUpRight, Circle, Gem, Sparkles, Crown, Link2 } from "lucide-react"

const iconMap = {
  ring: Circle,
  bracelet: Link2,
  earring: Sparkles,
  set: Crown,
  chain: Gem,
}

export function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Kolleksiyalar</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Mukammal toifalar
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Har bir lahzaga mos buyum — kundalik nafislikdan tortib, bayramona dabdabaligacha. Toifalardan tanlang.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon]
            const isFeatured = idx === 0
            return (
              <a
                key={cat.slug}
                href="#products"
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 ${
                  isFeatured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="size-11 rounded-xl bg-gold/10 text-gold-deep flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-gold transition-colors" />
                </div>

                <div className="mt-8 sm:mt-10">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-gold-deep font-medium">
                    <span className="size-1 rounded-full bg-gold" />
                    {cat.count} ta buyum
                  </div>
                </div>

                {/* Subtle decorative ring */}
                <div className="absolute -bottom-12 -right-12 size-32 rounded-full border border-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-8 -right-8 size-24 rounded-full border border-gold/15 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
