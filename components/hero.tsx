import Image from "next/image"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink text-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-jewelry.jpg"
          alt="Premium tilla buyumlar kolleksiyasi"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />
      </div>

      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:3px_3px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur text-[10px] sm:text-xs font-medium tracking-widest uppercase text-gold animate-shimmer">
              <Sparkles className="size-3 sm:size-3.5" />
              <span>Yangi 2026 kolleksiyasi</span>
            </div>

            <h1 className="mt-5 sm:mt-6 font-serif text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-7xl font-bold sm:leading-[1.05] tracking-tight text-balance">
              Har bir <em className="text-gold not-italic">tilla buyum</em>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              o&apos;zining hikoyasi bilan.
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-cream/70 leading-relaxed max-w-xl text-pretty">
              585 va 750 probali asl tilla buyumlar, brilliantli uzuklar, zarif zanjirlar va to&apos;plamlar — eng
              yaxshi ustalardan, eng qulay narxlarda.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-gold text-ink hover:bg-gold-deep h-12 px-6 sm:px-7 font-semibold text-sm tracking-wide shadow-lg shadow-gold/20 w-full sm:w-auto"
                asChild
              >
                <a href="#products">
                  Katalogni ko&apos;rish
                  <ArrowRight className="size-4 ml-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-cream/30 text-cream hover:bg-cream hover:text-ink h-12 px-6 sm:px-7 font-medium text-sm tracking-wide w-full sm:w-auto"
                asChild
              >
                <a href="#flash-sale">Aksiyalar — 30%</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-cream">12+</div>
                <div className="text-[10px] sm:text-xs text-cream/60 mt-1 leading-tight">Yillik tajriba</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-cream">25k+</div>
                <div className="text-[10px] sm:text-xs text-cream/60 mt-1 leading-tight">Mamnun mijoz</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-cream">150+</div>
                <div className="text-[10px] sm:text-xs text-cream/60 mt-1 leading-tight">Buyumlar turi</div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative ml-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-cream/10 bg-cream/[0.04] backdrop-blur-md overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/showcase-model.jpg"
                    alt="Premium zargarlik buyumlari"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                  {/* Floating rating card */}
                  <div className="absolute top-4 right-4 rounded-2xl bg-cream/95 text-ink backdrop-blur p-3 shadow-xl">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <div className="mt-1 text-xs font-semibold">4.9 / 5.0</div>
                    <div className="text-[10px] text-muted-foreground">2 540 baholash</div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Featured</div>
                    <div className="font-serif text-xl font-semibold text-cream">Imperial kolleksiya</div>
                    <div className="text-xs text-cream/70 mt-1">22 ta yangi model</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
