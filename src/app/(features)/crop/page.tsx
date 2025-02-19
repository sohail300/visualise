"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";

const CropPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>(
    "Instagram Square (1:1)"
  );
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const socialFormats = {
    "Instagram Square (1:1)": {
      width: 1080,
      height: 1080,
      aspectRatio: "1 / 1",
    },
    "Instagram Portrait (4:5)": {
      width: 1080,
      height: 1350,
      aspectRatio: "4 / 5",
    },
    "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16 / 9" },
    "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3 / 1" },
    "Facebook Cover (205:78)": {
      width: 820,
      height: 312,
      aspectRatio: "205 / 78",
    },
  };

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
        <h1 className="text-xl font-semibold">Upload & Crop Image</h1>

        {/* Image Upload Input */}
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer w-fit"
        />

        {/* Aspect Ratio Selection */}
        <Select onValueChange={setSelectedFormat}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select aspect ratio" />
          </SelectTrigger>
          <SelectContent>
            {Array.from(Object.keys(socialFormats)).map((key) => (
              <SelectItem key={key} value={key}>
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className=" max-w-4xl">
          {/* Image Preview */}
          {(croppedImage || image) && (
            <Image
              src={croppedImage ?? image ?? ""}
              alt="image"
              width={
                socialFormats[selectedFormat as keyof typeof socialFormats]
                  ?.width
              }
              height={
                socialFormats[selectedFormat as keyof typeof socialFormats]
                  ?.height
              }
              style={{
                aspectRatio:
                  socialFormats[selectedFormat as keyof typeof socialFormats]
                    ?.aspectRatio,
                objectFit: "cover",
              }}
              className="rounded-lg"
            />
          )}
        </div>

        {croppedImage && (
          <Button className="w-fit flex items-center gap-2 rounded-sm px-8">
            <Download className="h-5 w-5" />
            Download Cropped Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default CropPage;
