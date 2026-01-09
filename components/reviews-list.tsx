"use client"; // Keep this here!
import { useEffect, useState } from "react";

// Use 'export default' specifically
export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch('/api/admin/fetch-all')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid gap-4">
       {/* Your reviews mapping code */}
    </div>
  );
}