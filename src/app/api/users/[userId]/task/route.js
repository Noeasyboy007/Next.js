// api/users/[userId]/task
import { NextResponse } from 'next/server';
import connectToMongoDB from '../../../../../helper/db';
import taskModel from '../../../../../models/task';

// Connect to MongoDB
connectToMongoDB();

// Get a list of tasks for a specific userId
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const tasks = await taskModel.find({ userId });
    if (tasks.length === 0) {
      return NextResponse.json({ message: "No tasks found for this user" }, { status: 404 });
    }
    return NextResponse.json({ message: "Tasks Get successfully", data: tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving tasks", error: error.message }, { status: 500 });
  }
}

