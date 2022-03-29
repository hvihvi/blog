// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.redirect(302, 'koober://koob/25')
}
