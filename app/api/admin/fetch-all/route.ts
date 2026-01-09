import postgres from 'postgres';
const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function GET() {
  const reviews = await sql`SELECT * FROM reviews ORDER BY id DESC`;
  return new Response(JSON.stringify(reviews));
}