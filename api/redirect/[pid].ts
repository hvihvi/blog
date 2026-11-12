// Vercel Function: /api/redirect/:pid → koober://koob/:pid (kept from the Next.js site).
export function GET(request: Request) {
  const pid = new URL(request.url).pathname.split('/').pop() ?? ''
  return new Response(null, {
    status: 302,
    headers: { Location: 'koober://koob/' + encodeURIComponent(pid) }
  })
}
