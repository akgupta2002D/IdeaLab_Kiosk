/**
 * @file        backend/utils/server.js
 * @description Utility function to create a Supabase server-side client using Next.js cookies.
 *
 * @dependencies
 * - @supabase/auth-helpers-nextjs (createServerComponentClient)
 * - next/headers (cookies)
 *
 *
 * @notes
 * - The `cookies` function retrieves cookies from the Next.js headers.
 * - This utility is designed for server-side usage in Next.js applications.
 */


import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies as getCookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await getCookies() // <-- await is required in API routes
  return createServerComponentClient({ cookies: () => cookieStore })
}
