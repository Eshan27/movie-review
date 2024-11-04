import clientPromise from "@/lib/mongodb";
import { compare } from 'bcrypt';

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db('WorthAShareDB');
    const users = db.collection('users');

    // Check if user exists
    const user = await users.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    // Send success response if credentials are correct
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
