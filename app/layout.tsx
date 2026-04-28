import { AppToaster } from "@/components/ui/toast"

import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"

import "./globals.css"

export const metadata = {
  title: "De Standaard Artikelen - UX/UI Analyse",
  description: "Een verzameling van artikelen uit De Standaard, geanalyseerd en gepresenteerd volgens UX/UI-principes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <GlobalNavbar />

        <main className="min-h-screen pt-20 pb-32">
          {children}
        </main>

        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>

        <AppToaster />
      </body>
    </html>
  )
}
