export async function GET() {
  const res = await fetch(" http://localhost:5000/api/profile");

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }

  const data = await res.json();
  const firstItem = Array.isArray(data) ? data[0] : null;

  return new Response(JSON.stringify(firstItem), {
    headers: { "Content-Type": "application/json" },
  });
}
