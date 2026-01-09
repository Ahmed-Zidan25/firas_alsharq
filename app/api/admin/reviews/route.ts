import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function PATCH(request: Request) {
  const { id, approved } = await request.json();
  await sql`UPDATE reviews SET approved = ${approved} WHERE id = ${id}`;
  return new Response(JSON.stringify({ success: true }));
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await sql`DELETE FROM reviews WHERE id = ${id}`;
  return new Response(JSON.stringify({ success: true }));
}