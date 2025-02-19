"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";

const RemoveBGPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-0 w-full">
      <div className="space-y-4 p-6 border rounded-lg w-full">
        <h1 className="text-xl font-semibold">Remove Background</h1>

        {/* Image Upload Input */}
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer w-fit"
        />

        <div className=" max-w-4xl">
          {/* Image Preview */}
          {(croppedImage ?? image) && (
            <Image
              width={1080}
              height={1080}
              src={croppedImage ?? image ?? ""}
              alt="image"
              className="rounded-lg object-cover"
            />
          )}
        </div>

        {croppedImage && (
          <Button className="w-fit flex items-center gap-2 rounded-sm px-8">
            <Download className="h-5 w-5" />
            Download Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default RemoveBGPage;
