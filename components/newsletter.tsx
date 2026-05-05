"use client"

import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section id="newsletter" className="py-14 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-ink text-cream p-6 sm:p-10 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 size-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:4px_4px]" />

          <div className="relative grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gold/30 bg-gold/10 text-[10px] sm:text-xs font-medium tracking-widest uppercase text-gold">
                <Mail className="size-3 sm:size-3.5" />
                Yangiliklar va aksiyalar
              </div>
              <h2 className="mt-4 sm:mt-5 font-serif text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
                Eng yaxshi takliflar — birinchi navbatda sizga
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-cream/70 max-w-lg text-pretty">
                Yangi kolleksiyalar, maxsus aksiyalar va eksklyuziv chegirmalardan birinchilardan bo&apos;lib xabardor
                bo&apos;ling. Spamsiz, faqat foydali xabarlar.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubscribed(true)
              }}
              className="lg:col-span-5 flex flex-col gap-3 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 sm:p-1.5 sm:rounded-full sm:bg-cream/[0.06] sm:border sm:border-cream/10 sm:backdrop-blur">
                <Input
                  type="email"
                  required
                  placeholder="Email manzilingiz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-cream/[0.06] sm:bg-transparent border border-cream/10 sm:border-0 text-cream placeholder:text-cream/40 focus-visible:ring-0 h-12 sm:h-11 px-4 rounded-full sm:rounded-full text-sm w-full"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-gold text-ink hover:bg-gold-deep h-12 sm:h-11 px-5 sm:px-6 font-semibold whitespace-nowrap text-sm w-full sm:w-auto"
                >
                  <Send className="size-4" />
                  Obuna bo&apos;lish
                </Button>
              </div>
              {subscribed ? (
                <p className="text-xs text-gold pl-2">Rahmat! Tez orada xabar yuboramiz.</p>
              ) : (
                <p className="text-xs text-cream/50 pl-2 leading-relaxed">
                  Obuna bo&apos;lib, siz bizning maxfiylik shartlarimizga rozilik bildirasiz.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
