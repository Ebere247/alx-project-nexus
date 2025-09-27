const fetcher = async (url: string) => {
  // prepend base URL if url starts with "/"
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const fullUrl = url.startsWith("/") ? `${baseUrl}${url}` : url;

  const res = await fetch(fullUrl);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default fetcher;
