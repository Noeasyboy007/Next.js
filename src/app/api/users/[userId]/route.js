// pages/api/users/[userId]/route.js
import { NextResponse } from 'next/server';
import connectToMongoDB from "../../../../helper/db";
import userModel from "../../../../models/user";

export async function GET(req, { params }) {
  const { userId } = params || {};

  // Get a user by ID
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json({ message: 'User retrieved successfully.', data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to retrieve user: ${error.message}` }, { status: 500 });
  }

};




// PUT: Update user by ID
export async function PUT(req, { params }) {
  const { userId } = params;
  try {
    const userData = await req.json();
    const updatedUser = await userModel.findByIdAndUpdate(userId, userData, { new: true });
    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json({ message: 'User updated successfully.', data: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to update user: ${error.message}` }, { status: 500 });
  }
}


// DELETE: Remove user by ID
export async function DELETE(req, { params }) {
  const { userId } = params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json({ message: 'User deleted successfully.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to delete user: ${error.message}` }, { status: 500 });
  }
}