import Link from "next/link"
import { Facebook, Instagram, MessageCircle} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialMediaProps {
  variant?: "default" | "large" | "minimal"
  showLabels?: boolean
  className?: string
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1757AxaraS/",
    icon: Facebook,
    color: "hover:bg-blue-600",
    description: "Follow us for daily updates and product showcases",
  },
  {
    name: "Instagram",
    href: "https://help.instagram.com/1731078377046291",
    icon: Instagram,
    color: "hover:bg-pink-600",
    description: "See our beautiful produce and behind-the-scenes content",
  },
  ]
  
export default function SocialMedia({ variant = "default", showLabels = false, className = "" }: SocialMediaProps) {
  if (variant === "large") {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:border-primary">
                <div
                  className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors ${social.color}`}
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{social.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{social.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }

  if (variant === "minimal") {
    return (
      <div className={`flex space-x-2 ${className}`}>
        {socialLinks.slice(0, 4).map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-colors ${social.color}`}
              title={social.name}
            >
              <Icon className="h-4 w-4 text-primary-foreground" />
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
            <Button
              variant="outline"
              size={showLabels ? "default" : "icon"}
              className={`transition-colors ${social.color} hover:text-white border-border`}
            >
              <Icon className="h-4 w-4" />
              {showLabels && <span className="ml-2">{social.name}</span>}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}

export { socialLinks }