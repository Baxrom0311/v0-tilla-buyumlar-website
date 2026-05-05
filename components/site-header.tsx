"use client"

import Link from "next/link"
import { Heart, Search, ShoppingBag, User, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Katalog", href: "#products" },
  { label: "Aksiyalar", href: "#flash-sale" },
  { label: "Do'konlar", href: "#footer" },
  { label: "Aloqa", href: "#footer" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 py-3 sm:py-4 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0">
            <div className="relative">
              <div className="size-8 sm:size-9 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep flex items-center justify-center shadow-md shadow-gold/30">
                <span className="font-serif italic text-ink font-bold text-base sm:text-lg leading-none">T</span>
              </div>
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-serif text-base sm:text-lg font-bold tracking-wider text-foreground">TILLA</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground -mt-1">BUYUMLAR</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            <a
              href="tel:+998901234567"
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-3"
            >
              <Phone className="size-4 text-gold" />
              <span>+998 90 123 45 67</span>
            </a>
            <Button variant="ghost" size="icon" className="rounded-full size-9 sm:size-10 hidden sm:flex" aria-label="Qidirish">
              <Search className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full size-9 sm:size-10 hidden sm:flex" aria-label="Sevimlilar">
              <Heart className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full size-9 sm:size-10 hidden md:flex" aria-label="Profil">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full size-9 sm:size-10 relative" aria-label="Savatcha">
              <ShoppingBag className="size-5" />
              <span className="absolute top-0.5 right-0.5 size-4 rounded-full bg-gold text-ink text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full size-9 sm:size-10 lg:hidden"
              aria-label="Menyu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 border-t border-border pt-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-border">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 text-sm font-medium text-gold"
              >
                <Phone className="size-4" />
                +998 90 123 45 67
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
