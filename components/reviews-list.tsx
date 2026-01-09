"use client";

import { useEffect, useState } from "react";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Relative URL works fine on the client side
    fetch('/api/admin/fetch-all')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div className="grid gap-4">
      {reviews.map((review: any) => (
        <div key={review.id} className="p-4 border rounded shadow-sm">
          <h3 className="font-bold">{review.name}</h3>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}