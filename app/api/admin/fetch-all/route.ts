const fetchReviews = async () => {
  try {
    // Use the environment variable, falling back to relative path for client-side
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const res = await fetch(`${baseUrl}/api/admin/fetch-all`);
    
    if (!res.ok) throw new Error("Failed to fetch");
    
    const data = await res.json();
    setReviews(data);
    setLoading(false);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};