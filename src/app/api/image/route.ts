import cloudinary from "@/utils/config";
import { UploadApiResponse } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest) {
  try {
    const formData = await Request.formData();

    const file = formData.get("file") as File;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<UploadApiResponse | undefined>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "image", folder: "visualise/images/" },
            (error, uploadResult) => {
              if (error) reject(error);
              return resolve(uploadResult);
            }
          )
          .end(buffer);
      }
    );

    return NextResponse.json({
      status: 201,
      public_url: uploadResult?.public_id,
    });
  } catch (error) {
    console.log("[CROP - POST] Error: " + error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
