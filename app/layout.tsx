import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jensen Pompes - Site en Construction",
  description: "Spécialiste des pompes à eau - Notre nouveau site arrive bientôt",
    generator: 'SOFIMED GROUPE'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          // Countdown Timer
          const countDownDate = new Date();
          countDownDate.setDate(countDownDate.getDate() + 45); // 30 days from now
          
          const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            if (distance < 0) {
              clearInterval(countdown);
              document.getElementById("days").innerHTML = "00";
              document.getElementById("hours").innerHTML = "00";
              document.getElementById("minutes").innerHTML = "00";
              document.getElementById("seconds").innerHTML = "00";
            }
          }, 1000);
        `,
          }}
        />
      </body>
    </html>
  )
}
