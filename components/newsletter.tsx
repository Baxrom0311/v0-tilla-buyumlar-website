"use client"

import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section id="newsletter" className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-cream p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 size-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:4px_4px]" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-xs font-medium tracking-widest uppercase text-gold">
                <Mail className="size-3.5" />
                Yangiliklar va aksiyalar
              </div>
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Eng yaxshi takliflar — birinchi navbatda sizga
              </h2>
              <p className="mt-4 text-cream/70 max-w-lg text-pretty">
                Yangi kolleksiyalar, maxsus aksiyalar va eksklyuziv chegirmalardan birinchilardan bo'lib xabardor
                bo'ling. Spamsiz, faqat foydali xabarlar.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubscribed(true)
              }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-full bg-cream/[0.06] border border-cream/10 backdrop-blur">
                <Input
                  type="email"
                  required
                  placeholder="Email manzilingiz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 text-cream placeholder:text-cream/40 focus-visible:ring-0 h-11 px-4"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-gold text-ink hover:bg-gold-deep h-11 px-6 font-semibold whitespace-nowrap"
                >
                  <Send className="size-4" />
                  Obuna bo'lish
                </Button>
              </div>
              {subscribed ? (
                <p className="text-xs text-gold pl-2">Rahmat! Tez orada xabar yuboramiz.</p>
              ) : (
                <p className="text-xs text-cream/50 pl-2">
                  Obuna bo'lib, siz bizning maxfiylik shartlarimizga rozilik bildirasiz.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
