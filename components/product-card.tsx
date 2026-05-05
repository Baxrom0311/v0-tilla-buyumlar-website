import Image from "next/image"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Product, formatSom } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null

  return (
    <article className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 hover:border-gold/30">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-1 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
              Yangi
            </span>
          )}
          {product.isHot && (
            <span className="px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider">
              Top
            </span>
          )}
          {discount && (
            <span className="px-2 py-1 rounded-full bg-gold text-ink text-[10px] font-bold uppercase tracking-wider">
              -{discount}%
            </span>
          )}
        </div>

        <button
          aria-label="Sevimlilarga qo'shish"
          className="absolute top-3 right-3 size-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground/70 hover:text-destructive hover:scale-110 transition-all shadow-sm"
        >
          <Heart className="size-4" />
        </button>

        <Button
          size="sm"
          className="absolute bottom-3 left-3 right-3 bg-foreground text-background hover:bg-gold hover:text-ink rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
        >
          <ShoppingBag className="size-3.5" />
          Savatchaga qo'shish
        </Button>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest">
          <span className="text-muted-foreground">{product.category}</span>
          <span className="text-gold-deep font-semibold">{product.proba} proba</span>
        </div>

        <h3 className="font-serif text-base font-semibold text-foreground line-clamp-2 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-gold text-gold" />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
          <span className="mx-1.5 text-border">|</span>
          <span>{product.weight} gr</span>
        </div>

        <div className="mt-auto pt-3 flex items-baseline gap-2">
          <span className="font-serif text-lg font-bold text-foreground">{formatSom(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatSom(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </article>
  )
}
