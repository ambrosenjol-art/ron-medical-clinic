import { blogPosts } from "@/data/content";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ posts: blogPosts });
}
