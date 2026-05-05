import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Mijozlar fikri</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Ishonchli mijozlar so'zlari
          </h2>
          <p className="mt-4 text-muted-foreground">
            25 mingdan ortiq mijozlarimizning haqiqiy va samimiy fikrlari.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className={`relative rounded-3xl p-7 sm:p-8 border transition-all hover:-translate-y-1 ${
                idx === 1
                  ? "bg-ink text-cream border-ink shadow-2xl"
                  : "bg-card border-border hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              <Quote
                className={`size-9 mb-4 ${idx === 1 ? "text-gold" : "text-gold/40"}`}
                strokeWidth={1.5}
              />

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>

              <blockquote
                className={`text-base leading-relaxed text-pretty ${
                  idx === 1 ? "text-cream/85" : "text-foreground/85"
                }`}
              >
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-7 pt-6 border-t border-border/50">
                <div
                  className={`size-11 rounded-full flex items-center justify-center font-serif font-semibold ${
                    idx === 1 ? "bg-gold text-ink" : "bg-gold/10 text-gold-deep"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className={`font-semibold text-sm ${idx === 1 ? "text-cream" : "text-foreground"}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs ${idx === 1 ? "text-cream/60" : "text-muted-foreground"}`}>
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
