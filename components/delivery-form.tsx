"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function DeliveryForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    currentAddress: "",
    destination: "",
    furnitureDescription: "",
    deliveryTime: "",
    needsWrapping: false,
    needsAssembly: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "الاسم مطلوب"
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب"
    if (!/^[0-9]{9,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "رقم هاتف صحيح مطلوب"
    }
    if (!formData.currentAddress.trim()) newErrors.currentAddress = "العنوان الحالي مطلوب"
    if (!formData.destination.trim()) newErrors.destination = "العنوان المراد النقل إليه مطلوب"
    if (!formData.furnitureDescription.trim()) newErrors.furnitureDescription = "وصف الأثاث مطلوب"
    if (!formData.deliveryTime.trim()) newErrors.deliveryTime = "وقت التوصيل مطلوب"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsAppMessage = () => {
    const message = `*طلب توصيل جديد من فراس الشرق* 📦

👤 *الاسم:* ${formData.fullName}
📱 *الهاتف:* ${formData.phone}
📍 *العنوان الحالي:* ${formData.currentAddress}
📍 *العنوان المراد النقل إليه:* ${formData.destination}
🪑 *وصف الأثاث:* ${formData.furnitureDescription}
⏰ *الوقت المراد التوصيل:* ${formData.deliveryTime}
${formData.needsWrapping ? "📦 *يحتاج إلى تغليف واحترافي* ✓" : ""}
${formData.needsAssembly ? "🔧 *يحتاج إلى فرش واستقرار بعد النقل* ✓" : ""}

---
تم الطلب عبر موقع فراس الشرق`

    return encodeURIComponent(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    const whatsappMessage = generateWhatsAppMessage()
    const whatsappNumber = "966542100371" // رقم واتس اب فراس الشرق
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        phone: "",
        currentAddress: "",
        destination: "",
        furnitureDescription: "",
        deliveryTime: "",
        needsWrapping: false,
        needsAssembly: false,
      })
      setIsSubmitted(false)
      setErrors({})
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-green-50 border-2 border-green-200">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-2">تم إرسال الطلب بنجاح!</h3>
            <p className="text-green-700">سيتم فتح الواتس اب الآن لتأكيد طلبك. شكراً لاختيارك فراس الشرق.</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground">معلومات شخصية</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-semibold">
                الاسم الكامل *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                className={`text-right ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold">
                رقم الهاتف *
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="05xxxxxxxxx"
                type="tel"
                className={`text-right ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground">معلومات النقل</h3>

          <div className="space-y-2">
            <Label htmlFor="currentAddress" className="text-sm font-semibold">
              العنوان الحالي (مكان الاستلام) *
            </Label>
            <Textarea
              id="currentAddress"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              placeholder="أدخل العنوان الحالي بالتفصيل"
              rows={3}
              className={`text-right ${errors.currentAddress ? "border-red-500" : ""}`}
            />
            {errors.currentAddress && <p className="text-red-500 text-sm">{errors.currentAddress}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-semibold">
              العنوان المراد النقل إليه (الوجهة) *
            </Label>
            <Textarea
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="أدخل عنوان الوجهة بالتفصيل"
              rows={3}
              className={`text-right ${errors.destination ? "border-red-500" : ""}`}
            />
            {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
          </div>
        </div>

        {/* Furniture & Time */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground">تفاصيل النقل</h3>

          <div className="space-y-2">
            <Label htmlFor="furnitureDescription" className="text-sm font-semibold">
              وصف الأثاث المراد نقله *
            </Label>
            <Textarea
              id="furnitureDescription"
              name="furnitureDescription"
              value={formData.furnitureDescription}
              onChange={handleChange}
              placeholder="مثال: سرير + دولاب + طاولة طعام + ..."
              rows={3}
              className={`text-right ${errors.furnitureDescription ? "border-red-500" : ""}`}
            />
            {errors.furnitureDescription && <p className="text-red-500 text-sm">{errors.furnitureDescription}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryTime" className="text-sm font-semibold">
              متى تريد التوصيل؟ *
            </Label>
            <Input
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              placeholder="مثال: غداً الساعة 10 صباحاً"
              className={`text-right ${errors.deliveryTime ? "border-red-500" : ""}`}
            />
            {errors.deliveryTime && <p className="text-red-500 text-sm">{errors.deliveryTime}</p>}
          </div>
        </div>

        {/* Additional Services */}
        <div className="space-y-4 bg-card p-4 rounded-lg">
          <h3 className="text-lg font-bold text-foreground">خدمات إضافية</h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="needsWrapping"
                checked={formData.needsWrapping}
                onCheckedChange={(checked) => handleCheckboxChange("needsWrapping", checked as boolean)}
              />
              <Label htmlFor="needsWrapping" className="font-medium cursor-pointer text-base">
                تغليف احترافي للأثاث
              </Label>
            </div>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="needsAssembly"
                checked={formData.needsAssembly}
                onCheckedChange={(checked) => handleCheckboxChange("needsAssembly", checked as boolean)}
              />
              <Label htmlFor="needsAssembly" className="font-medium cursor-pointer text-base">
                فرش واستقرار الأثاث بعد النقل
              </Label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary-light text-white font-bold h-12 text-base"
        >
          {isLoading ? "جاري الإرسال..." : "إرسال الطلب عبر الواتس اب"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          عند الضغط على الزر سيتم فتح الواتس اب مع رسالتك الكاملة
        </p>
      </form>
    </Card>
  )
}
