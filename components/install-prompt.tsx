"use client"

import { useEffect, useState } from "react"
import { Download, X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

const DISMISS_KEY = "tilla-pwa-install-dismissed"

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Check if already installed (running in standalone)
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error iOS Safari
      window.navigator.standalone === true
    if (standalone) {
      setIsInstalled(true)
      return
    }

    // Check dismissed within last 7 days
    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY)
      if (dismissedAt) {
        const days = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24)
        if (days < 7) return
      }
    } catch {}

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show after a small delay so it doesn't hijack initial paint
      setTimeout(() => setVisible(true), 2500)
    }

    const installedHandler = () => {
      setIsInstalled(true)
      setVisible(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handler)
    window.addEventListener("appinstalled", installedHandler)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
      window.removeEventListener("appinstalled", installedHandler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const choice = await deferredPrompt.userChoice
    if (choice.outcome === "accepted") {
      setVisible(false)
      setDeferredPrompt(null)
    } else {
      handleDismiss()
    }
  }

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {}
    setVisible(false)
  }

  if (isInstalled || !visible || !deferredPrompt) return null

  return (
    <div
      role="dialog"
      aria-labelledby="install-title"
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-md animate-in slide-in-from-bottom-4 duration-500 md:bottom-6 md:left-auto md:right-6"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary" />
        <div className="flex items-start gap-4 p-5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Smartphone className="size-6" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 id="install-title" className="font-serif text-lg font-semibold text-foreground">
              Ilovani o&apos;rnating
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              TILLA BUYUMLAR ilovasini telefoningizga o&apos;rnating — tezroq ishlash, oflayn rejim va tezkor xabarnomalar.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Button onClick={handleInstall} size="sm" className="gap-2">
                <Download className="size-4" aria-hidden="true" />
                O&apos;rnatish
              </Button>
              <Button onClick={handleDismiss} size="sm" variant="ghost">
                Keyinroq
              </Button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Yopish"
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
