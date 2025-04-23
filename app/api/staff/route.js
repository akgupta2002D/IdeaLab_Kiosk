/**
 * @file        staff/route.js
 * @description API route handlers for Staff table (GET, POST, PUT, DELETE)
 *
 * @dependencies
 * - Next.js (NextResponse)
 * - Supabase client (createClient from backend/utils/server)
 *
 * @notes
 * - Assumes 'Staff' table exists with a unique 'id' field
 */

import { NextResponse } from 'next/server'
import { createClient } from '../../backend/utils/server'


export async function GET() {
  const supabase = await createClient()
  const { data: Staff, error } = await supabase.from('Staff').select('*')

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(Staff)
}

export async function POST(req) {
  const supabase = await createClient()
  const body = await req.json()

  const { data, error } = await supabase.from('Staff').insert([body])

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}

export async function PUT(req) {
  const supabase = await createClient()
  const body = await req.json()

  if (!body.id) {
    return NextResponse.json({ error: 'Missing staff ID' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('Staff')
    .update(body)
    .eq('id', body.id)

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(req) {
  const supabase = await createClient()
  const { id } = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'Missing staff ID' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('Staff')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Deleted successfully', data })
}
