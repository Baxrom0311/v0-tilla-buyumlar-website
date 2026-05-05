"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Flame, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { flashSale, formatSom } from "@/lib/data"

function useCountdown(targetMs: number) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const remaining = Math.max(0, targetMs - now)
  const days = Math.floor(remaining / 86_400_000)
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000)
  const minutes = Math.floor((remaining % 3_600_000) / 60_000)
  const seconds = Math.floor((remaining % 60_000) / 1000)
  return { days, hours, minutes, seconds }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function FlashSale() {
  // 3 days from initial render
  const [target] = useState(() => Date.now() + 3 * 24 * 60 * 60 * 1000)
  const { days, hours, minutes, seconds } = useCountdown(target)

  return (
    <section id="flash-sale" className="py-20 sm:py-24 bg-ink text-cream relative overflow-hidden">
      {/* Decorative gold light */}
      <div className="absolute -top-32 -left-32 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-xs font-medium tracking-widest uppercase text-gold">
              <Flame className="size-3.5" />
              Cheklangan vaqt aksiyasi
            </div>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Flash savdo — <span className="text-gold">30% gacha</span> chegirma
            </h2>
            <p className="mt-4 text-cream/70 max-w-md leading-relaxed text-pretty">
              Eng sevimli buyumlaringizni yanada qulay narxda qo'lga kiriting. Aksiya cheklangan miqdordagi
              mahsulotlarga taalluqlidir.
            </p>

            {/* Countdown */}
            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
              {[
                { label: "Kun", value: days },
                { label: "Soat", value: hours },
                { label: "Daqiqa", value: minutes },
                { label: "Soniya", value: seconds },
              ].map((it) => (
                <div
                  key={it.label}
                  className="rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur p-3 sm:p-4 text-center"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold tabular-nums">
                    {pad(it.value)}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-cream/60 mt-1">{it.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-8 rounded-full bg-gold text-ink hover:bg-gold-deep h-12 px-7 font-semibold tracking-wide"
            >
              Aksiyaga shoshiling
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>

          {/* Sale products */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {flashSale.map((p, idx) => {
              const discount = Math.round((1 - p.price / (p.oldPrice ?? p.price)) * 100)
              return (
                <div
                  key={p.id}
                  className={`relative rounded-2xl overflow-hidden border border-cream/10 bg-cream/[0.04] group ${
                    idx === 0 ? "row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                  }`}
                >
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gold text-ink text-xs font-bold">
                    -{discount}%
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-gold/80 mb-1">{p.category}</div>
                    <div className="font-serif text-sm sm:text-base font-semibold line-clamp-1">{p.name}</div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="font-bold text-cream text-sm">{formatSom(p.price)}</span>
                      {p.oldPrice && (
                        <span className="text-[11px] text-cream/50 line-through">{formatSom(p.oldPrice)}</span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
