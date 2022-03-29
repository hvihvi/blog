// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(302).json({
    body: 'hello world',
    location: 'koober://koob/25',
    query: request.query,
    cookies: request.cookies
  })
}
