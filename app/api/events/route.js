// app/api/events/route.js
import { NextResponse } from 'next/server';
import { createClient } from '../../backend/utils/server';

/**
 * @file        route.js
 * @description API route for managing Events (GET, POST, PUT, DELETE)
 *
 * @dependencies
 * - Supabase server client (createClient)
 * - Next.js Response (NextResponse)
 *
 * @notes
 * - Handles full CRUD for public.Events table
 */

export async function GET() {
  const supabase = await createClient();
  const { data: Events, error } = await supabase.from('Events').select('*');

  if (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(Events);
}

export async function POST(req) {
  const supabase = await createClient();
  const body = await req.json();

  const { data, error } = await supabase.from('Events').insert([body]);

  if (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(req) {
  const supabase = await createClient();
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json({ error: 'Missing event ID' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('Events')
    .update(body)
    .eq('id', body.id);

  if (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(req) {
  const supabase = await createClient();
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'Missing event ID' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('Events')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Deleted successfully', data });
}
