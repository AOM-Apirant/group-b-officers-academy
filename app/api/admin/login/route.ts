import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Basic validation
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Connect to database (currently not used but kept for future database operations)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { db } = await connectToDatabase();

    // Check admin credentials (in production, use environment variables)
    const adminCredentials = {
      username: process.env.ADMIN_USERNAME || "admin",
      password: process.env.ADMIN_PASSWORD || "admin123",
    };

    if (
      username !== adminCredentials.username ||
      password !== adminCredentials.password
    ) {
      return NextResponse.json(
        { error: "Invalid admin credentials" },
        { status: 401 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Admin login successful!",
        admin: {
          username: adminCredentials.username,
          role: "admin",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during admin login:", error);
    return NextResponse.json(
      { error: "Admin login failed. Please try again." },
      { status: 500 }
    );
  }
}
