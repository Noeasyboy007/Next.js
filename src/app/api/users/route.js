import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectToMongoDB from "../../../helper/db";
import userModel from "../../../models/user";

// Connect to MongoDB
connectToMongoDB();

export async function GET() {
  try {
    const users = await userModel.find({});
    return NextResponse.json({ message: "Successfully get all User Data", data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving users", error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const userData = await req.json();
    
    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    
    // Replace the plain password with the hashed password
    userData.password = hashedPassword;

    const newUser = await userModel.create(userData);
    return NextResponse.json({ message: "User created successfully", data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 400 });
  }
}
