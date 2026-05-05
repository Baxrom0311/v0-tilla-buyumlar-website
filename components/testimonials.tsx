import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-deep mb-2 sm:mb-3">
            Mijozlar fikri
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Ishonchli mijozlar so&apos;zlari
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
            25 mingdan ortiq mijozlarimizning haqiqiy va samimiy fikrlari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className={`relative rounded-3xl p-6 sm:p-7 lg:p-8 border transition-all hover:-translate-y-1 ${
                idx === 1
                  ? "bg-ink text-cream border-ink shadow-2xl"
                  : "bg-card border-border hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              <Quote
                className={`size-7 sm:size-9 mb-3 sm:mb-4 ${idx === 1 ? "text-gold" : "text-gold/40"}`}
                strokeWidth={1.5}
              />

              <div className="flex items-center gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 sm:size-4 fill-gold text-gold" />
                ))}
              </div>

              <blockquote
                className={`text-sm sm:text-base leading-relaxed text-pretty ${
                  idx === 1 ? "text-cream/85" : "text-foreground/85"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-5 sm:mt-7 pt-5 sm:pt-6 border-t border-border/50">
                <div
                  className={`size-10 sm:size-11 shrink-0 rounded-full flex items-center justify-center font-serif font-semibold ${
                    idx === 1 ? "bg-gold text-ink" : "bg-gold/10 text-gold-deep"
                  }`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className={`font-semibold text-sm truncate ${idx === 1 ? "text-cream" : "text-foreground"}`}>
                    {t.name}
                  </div>
                  <div
                    className={`text-xs truncate ${idx === 1 ? "text-cream/60" : "text-muted-foreground"}`}
                  >
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
