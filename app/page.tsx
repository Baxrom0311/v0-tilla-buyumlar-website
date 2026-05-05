import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { FlashSale } from "@/components/flash-sale"
import { Advantages } from "@/components/advantages"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FlashSale />
      <Advantages />
      <Testimonials />
      <FaqSection />
      <Newsletter />
      <SiteFooter />
    </main>
  )
}
