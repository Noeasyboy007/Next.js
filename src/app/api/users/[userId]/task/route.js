import { NextResponse } from 'next/server';
import connectToMongoDB from '../../../../../helper/db';
import taskModel from '../../../../../models/task';
import userModel from '../../../../../models/user';

// Connect to MongoDB
connectToMongoDB();

// Get a list of tasks by particular userId with user details
export async function GET(request, { params }) {
  const { userId } = params;
  
  try {
    // Fetch the user details
    const user = await userModel.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Fetch tasks associated with the user
    const tasks = await taskModel.find({ userId });

    // Return user details along with their tasks
    return NextResponse.json({
      message: "User tasks retrieved successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          about: user.about
        },
        tasks: tasks
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error retrieving user tasks",
      error: error.message
    }, { status: 500 });
  }
}




// Update task status by userId and taskId
export async function PATCH(request, { params }) {
  const { userId, taskId } = params;
  const { status } = await request.json();

  // Ensure the status value is valid
  const allowedStatuses = ["pending", "progress", "completed"];
  if (!allowedStatuses.includes(status)) {
    return NextResponse.json({ message: "Invalid status value" }, { status: 400 });
  }

  try {
    // Find the task and ensure it belongs to the user
    const task = await taskModel.findOne({ _id: taskId, userId });
    if (!task) {
      return NextResponse.json({ message: "Task not found or does not belong to user" }, { status: 404 });
    }

    // Update the task status
    task.status = status;
    await task.save();

    return NextResponse.json({
      message: "Task status updated successfully",
      data: {
        id: task._id,
        title: task.title,
        content: task.content,
        addedData: task.addedData,
        status: task.status,
        userId: task.userId
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error updating task status",
      error: error.message
    }, { status: 500 });
  }
}

