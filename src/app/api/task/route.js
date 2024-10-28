import { NextResponse } from 'next/server';
import connectToMongoDB from '../../../helper/db';
import taskModel from '../../../models/task';

// Connect to MongoDB
connectToMongoDB();

// GET all tasks
export async function GET() {
    try {
        const tasks = await taskModel.find({});

        if (tasks.length === 0) {
            return NextResponse.json(
                { message: "No tasks found", data: [] },
                { status: 200 }
            );
        }

        return NextResponse.json({ message: "Successfully retrieved all tasks", data: tasks }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error retrieving tasks", error: error.message }, { status: 500 });
    }
}

// POST a new task
export async function POST(req) {
    try {
        const taskData = await req.json();

        // Create a new task
        const newTask = await taskModel.create(taskData);
        return NextResponse.json({ message: "Task created successfully", data: newTask }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating task", error: error.message }, { status: 400 });
    }
}
