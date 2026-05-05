import Image from "next/image"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Product, formatSom } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null

  return (
    <article className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 hover:border-gold/30">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-foreground text-background text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
              Yangi
            </span>
          )}
          {product.isHot && (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-destructive text-destructive-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
              Top
            </span>
          )}
          {discount && (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-gold text-ink text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
              -{discount}%
            </span>
          )}
        </div>

        <button
          aria-label="Sevimlilarga qo'shish"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 size-7 sm:size-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground/70 hover:text-destructive hover:scale-110 transition-all shadow-sm"
        >
          <Heart className="size-3.5 sm:size-4" />
        </button>

        <Button
          size="sm"
          className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-foreground text-background hover:bg-gold hover:text-ink rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-xs"
        >
          <ShoppingBag className="size-3.5" />
          <span className="hidden sm:inline">Savatchaga qo&apos;shish</span>
          <span className="sm:hidden">Qo&apos;shish</span>
        </Button>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2 flex-1">
        <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[11px] uppercase tracking-widest">
          <span className="text-muted-foreground truncate">{product.category}</span>
          <span className="text-gold-deep font-semibold shrink-0">{product.proba}</span>
        </div>

        <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground line-clamp-2 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground">
          <Star className="size-3 sm:size-3.5 fill-gold text-gold" />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
          <span className="mx-1 sm:mx-1.5 text-border">|</span>
          <span className="truncate">{product.weight}gr</span>
        </div>

        <div className="mt-auto pt-2 sm:pt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="font-serif text-base sm:text-lg font-bold text-foreground">{formatSom(product.price)}</span>
          {product.oldPrice && (
            <span className="text-[11px] sm:text-xs text-muted-foreground line-through">
              {formatSom(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
