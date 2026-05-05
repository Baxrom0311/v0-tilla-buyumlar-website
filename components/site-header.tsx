"use client"

import Link from "next/link"
import { Heart, Search, ShoppingBag, User, Menu, Phone } from "lucide-react"
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <div className="size-9 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep flex items-center justify-center shadow-md shadow-gold/30">
                <span className="font-serif italic text-ink font-bold text-lg leading-none">T</span>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold tracking-wider text-foreground">TILLA</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground -mt-1">BUYUMLAR</div>
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
          <div className="flex items-center gap-1">
            <a
              href="tel:+998901234567"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-3"
            >
              <Phone className="size-4 text-gold" />
              <span>+998 90 123 45 67</span>
            </a>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Qidirish">
              <Search className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Sevimlilar">
              <Heart className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex" aria-label="Profil">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative" aria-label="Savatcha">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-gold text-ink text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              aria-label="Menyu"
              onClick={() => setOpen((o) => !o)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
