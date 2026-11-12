// Vercel Function: /api/redirect → koober:// deep link (kept from the Next.js site).
export function GET() {
  return new Response(null, {
    status: 302,
    headers: { Location: 'koober://koob/25' }
  })
}
