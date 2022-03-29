// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { pid } = request.query
  response.redirect(302, 'koober://koob/' + pid)
}
