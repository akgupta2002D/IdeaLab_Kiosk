// app/api/staff/route.js
import { NextResponse } from 'next/server'
import { createClient } from '../../backend/utils/server'

export async function GET() {
  const supabase = await createClient() // <-- important!
  
  const { data: Staff, error } = await supabase
    .from('Staff')
    .select('*')

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(Staff)
}
