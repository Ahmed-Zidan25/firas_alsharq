import Header from "@/components/header"
import DeliveryForm from "@/components/delivery-form"
import Footer from "@/components/footer"

export const metadata = {
  title: "طلب توصيل - فراس الشرق",
  description: "اطلب خدمة نقل أثاث من فراس الشرق",
}

export default function DeliveryRequestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-12 md:py-16 bg-gradient-to-b from-card to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">طلب توصيل</h1>
            <p className="text-lg text-muted-foreground mb-8">
              ملء النموذج أدناه سيساعدنا في تقديم أفضل خدمة لك. سنتواصل معك عبر الواتس اب بأسرع وقت
            </p>
            <DeliveryForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
