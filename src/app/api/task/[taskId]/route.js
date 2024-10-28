import { NextResponse } from 'next/server';
import connectToMongoDB from '../../../../helper/db';
import taskModel from '../../../../models/task';

// Connect to MongoDB
connectToMongoDB();

// Get task by id
export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await taskModel.findById(taskId);
    if (!task) {
      return NextResponse.json({ message: "Task not found or Enter a Right Task Id" }, { status: 404 });
    }
    return NextResponse.json({ message: "Task Get successfully", data: task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving task", error: error.message }, { status: 500 });
  }
}


// Update task by id
export async function PUT(request, { params }) {
  const { taskId } = params;
  try {
    const updatedData = await request.json();
    const updatedTask = await taskModel.findByIdAndUpdate(taskId, updatedData, { new: true });
    if (!updatedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Task updated successfully", data: updatedTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating task", error: error.message }, { status: 500 });
  }
}

// Delete task by id
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    const deletedTask = await taskModel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Task deleted successfully", data: deletedTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting task", error: error.message }, { status: 500 });
  }
}
