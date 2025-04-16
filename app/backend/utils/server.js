// backend/utils/server.js
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies as getCookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await getCookies() // <-- await is required in API routes
  return createServerComponentClient({ cookies: () => cookieStore })
}
