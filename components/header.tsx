"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "عنا", href: "/about" },
    { label: "خدماتنا", href: "/#services" },
    { label: "البوم الصور", href: "/gallery" },
    { label: "تواصل معنا", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="فراس الشرق" width={50} height={50} className="h-12 w-auto" />
            <span className="hidden sm:inline font-bold text-lg text-primary">فراس الشرق</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary-light text-white">
              <Link href="/delivery-request">اطلب توصيل</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary-light text-white mt-2">
              <Link href="/delivery-request">اطلب توصيل</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
