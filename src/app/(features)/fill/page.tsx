"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Download, Loader2 } from "lucide-react";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import { socialFormats } from "@/utils/socialFormats";
import "react-loading-skeleton/dist/skeleton.css";
import { useToast } from "@/hooks/use-toast";

const FillPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [cloudinaryImage, setCloudinaryImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    console.log(file);
    if (file) {
      setImage(file);
    }
  };

  const handleUploadImage = async () => {
    setLoading(true);
    try {
      toast({
        title: "Please wait till the image loads!",
        description: "This might take a few seconds.",
        style: {
          backgroundColor: "#dff0e0",
          borderColor: "#7f9f7f",
          color: "#388e3c",
        },
      });
      const formData = new FormData();
      formData.append("file", image as File);

      const response = await axios.post("/api/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        console.log(response);
        toast({
          title: "Please wait while the image transforms!",
          description: "This might take a few seconds.",
          style: {
            backgroundColor: "#dff0e0",
            borderColor: "#7f9f7f",
            color: "#388e3c",
          },
        });
        setCloudinaryImage(response.data.public_url);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (image && selectedFormat) {
      handleUploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, selectedFormat]);

  const handleDownloadImage = () => {
    if (!imageRef.current || !selectedFormat) {
      return;
    }

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${image?.name}_${selectedFormat.toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
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
        <p className="text-sm text-gray-500">Max size: 25MB</p>

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

        <div className="w-full">
          {loading ? (
            <div className=" w-full h-20 flex justify-center items-center">
              <Loader2 className="animate-spin w-12 h-12" />
            </div>
          ) : (
            <div className="max-w-full">
              {cloudinaryImage && (
                <CldImage
                  src={cloudinaryImage}
                  alt="image"
                  width={
                    socialFormats[selectedFormat as keyof typeof socialFormats]
                      ?.width
                  }
                  height={
                    socialFormats[selectedFormat as keyof typeof socialFormats]
                      ?.height
                  }
                  aspectRatio={
                    socialFormats[selectedFormat as keyof typeof socialFormats]
                      ?.aspectRatio
                  }
                  fillBackground
                  className="rounded-lg"
                  ref={imageRef}
                />
              )}
            </div>
          )}
        </div>

        {cloudinaryImage && (
          <Button
            className="w-fit flex items-center gap-2 rounded-sm px-8"
            onClick={handleDownloadImage}
          >
            <Download className="h-5 w-5" />
            Download Cropped Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default FillPage;
