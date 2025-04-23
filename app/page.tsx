import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Mail, Phone, MapPin, Clock, AlertCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import NewsletterForm from './components/NewsletterForm'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="container max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              {/* <div className="flex items-center gap-2">
                <Droplet className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold">AquaTech Solutions</h1>
              </div> */}

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">Site en Construction</h2>
                </div>
                <p className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Notre nouveau site arrive bientôt
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Nous travaillons actuellement sur notre nouveau site web pour vous offrir une meilleure expérience.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl font-bold text-blue-600" id="days">
                      00
                    </div>
                    <div className="text-sm text-muted-foreground">Jours</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl font-bold text-blue-600" id="hours">
                      00
                    </div>
                    <div className="text-sm text-muted-foreground">Heures</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl font-bold text-blue-600" id="minutes">
                      00
                    </div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl font-bold text-blue-600" id="seconds">
                      00
                    </div>
                    <div className="text-sm text-muted-foreground">Secondes</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Inscrivez-vous à notre newsletter pour être informé du lancement :
                </p>
                <NewsletterForm />
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Contactez-nous</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">+212 5 222 414 44</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">info@jensenpompes.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Bd de Boured, Casablanca 20250</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Lun-Ven: 8h-18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-blue-100/50 p-4 sm:p-8 lg:p-12">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-blue-50 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div className="absolute inset-4 sm:inset-8 lg:inset-12 rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/logo.png?height=400&width=400"
                  alt="Pompe à eau"
                  width={500}
                  height={500}
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jensen Pompes. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
