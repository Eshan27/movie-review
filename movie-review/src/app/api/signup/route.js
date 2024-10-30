import clientPromise from "@/lib/mongodb";
import { hash } from 'bcrypt';

export async function POST(req) {
    try {
      const client = await clientPromise;
      const db = client.db('WorthAShareDB');
      const users = db.collection('users');
  
      const { firstName, lastName, email, password } = await req.json();
  
      // Check if user already exists
      const userExists = await users.findOne({ email });
      if (userExists) {
        return new Response(JSON.stringify({ error: 'User already exists' }), { status: 409 });
      }
  
      // Hash the password before storing it
      const hashedPassword = await hash(password, 10);
  
      // Store user in the database
      const result = await users.insertOne({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
  
      return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
  }