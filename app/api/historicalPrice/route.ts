// // import { NextRequest } from "next/server";

// export async function GET() {
//   const url =
//     "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=8LL2fsCzkr0lE7LHVZdWf7WiQ1owyG8Z";
//   const res = await fetch(url);

//   if (!res.ok) {
//     return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
//       status: 500,
//     });
//   }

//   const data = await res.json();
//   // Define the type for historical items
//   interface HistoricalItem {
//     date: string;
//     close: number;
//     // Add other known properties if needed, or remove the index signature if not required
//   }
//   // data.historical is the array you want

//   const historical = Array.isArray(data.historical)
//     ? data.historical.map((item: HistoricalItem) => ({
//         date: item.date,
//         close: item.close,
//       }))
//     : [];

//   return new Response(JSON.stringify(historical), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }
