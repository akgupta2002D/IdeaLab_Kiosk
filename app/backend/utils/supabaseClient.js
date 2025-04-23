/**
 * @file        backend/utils/supabaseClient.js
 * @description Utility module for initializing and exporting a Supabase client instance.
 *
 * @dependencies
 * - @supabase/supabase-js (createClient)
 *
 * @environmentVariables
 * - NEXT_PUBLIC_SUPABASE_URL: The base URL of the Supabase instance.
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: The public anonymous key for accessing the Supabase instance.
 *
 * @exports
 * - supabase: An initialized Supabase client instance for interacting with the database.
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
