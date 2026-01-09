// app/page.tsx
export const dynamic = 'force-dynamic'; // Correct for server components

import ReviewsList from "@/components/reviews-list";
// ... other imports

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ... other components */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">آراء عملائنا</h2>
          <ReviewsList />
        </div>
      </section>
      {/* ... footer */}
    </main>
  );
}