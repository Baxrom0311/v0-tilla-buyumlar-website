"use client"

import { useState } from "react"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

const filters = ["Barchasi", "Uzuklar", "Sirg'alar", "Bilaguzuklar", "Zanjirlar", "To'plamlar"]

export function FeaturedProducts() {
  const [active, setActive] = useState("Barchasi")

  const visible = active === "Barchasi" ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-deep mb-2 sm:mb-3">
                Saralangan
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Mashhur buyumlar
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Mijozlarimiz tomonidan eng ko&apos;p tanlangan va eng yuqori baho olgan zargarlik buyumlari.
            </p>
          </div>

          {/* Filter chips - horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all border ${
                  active === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-foreground/20 hover:border-gold hover:bg-gold hover:text-ink h-12 px-6 sm:px-8 font-semibold tracking-wide bg-transparent text-sm"
          >
            Barcha mahsulotlarni ko&apos;rish
          </Button>
        </div>
      </div>
    </section>
  )
}
