"use client"

import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SocialMedia() {
  const socialLinks = [
    {
     /*  name: "فيسبوك", */
      icon: Facebook,
      url: "https://www.facebook.com/share/1757AxaraS/",
      color: "hover:text-blue-600",
    },
    
    {
      /* name: "إنستجرام", */
      icon: Instagram,
      url: "https://help.instagram.com/1731078377046291",
      color: "hover:text-pink-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">تابعنا على وسائل التواصل</h2>
          <p className="text-center text-muted-foreground mb-12">
            تواصل معنا عبر منصات التواصل الاجتماعي للحصول على آخر المستجدات والعروض
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex items-center justify-center cursor-pointer transform group-hover:scale-105">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent
                        className={`w-10 h-10 text-primary transition-colors duration-300 ${social.color}`}
                      />
                      <span className="font-semibold text-sm text-foreground">{social.name}</span>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
