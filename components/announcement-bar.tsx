import { Truck, Shield, Sparkles, Gem } from "lucide-react"

const items = [
  { icon: Truck, text: "5 mln so'mdan yuqori xaridlarga bepul yetkazish" },
  { icon: Shield, text: "Davlat sertifikati va do'kon kafolatnomasi" },
  { icon: Sparkles, text: "0% ustama bilan 12 oygacha muddatli to'lov" },
  { icon: Gem, text: "585 va 750 probali asl tilla buyumlar" },
]

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream overflow-hidden border-b border-gold/20">
      <div className="flex items-center gap-8 sm:gap-12 py-2 sm:py-2.5 whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs tracking-wide">
              <Icon className="size-3 sm:size-3.5 text-gold shrink-0" />
              <span className="text-cream/80">{item.text}</span>
              <span className="text-gold/40">•</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
