import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  // xoa theo path hay theo tag
  const { type, value } = await request.json();

  if (type === "path") {
    revalidatePath(value);
    return NextResponse.json({
      success: true,
    });
  }

  if (type === "tags") {
    revalidateTag(value);
    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json({
    status: 500,
    success: false,
  });
};
