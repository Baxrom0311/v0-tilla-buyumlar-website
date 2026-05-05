"use client"

import { faqs } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-deep mb-2 sm:mb-3">
              Yordam
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Tez-tez beriladigan savollar
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground text-pretty">
              Eng ko&apos;p so&apos;raladigan savollarga javoblar. Agar javobini topa olmasangiz — bizga yozing.
            </p>
            <a
              href="tel:+998901234567"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-deep hover:text-gold"
            >
              <HelpCircle className="size-4" />
              Boshqa savol bormi? +998 90 123 45 67
            </a>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-2.5 sm:space-y-3">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-card border border-border rounded-2xl px-4 sm:px-6 data-[state=open]:border-gold/40 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-serif text-sm sm:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-5 gap-3">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
