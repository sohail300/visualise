"use client";

import type React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
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
import { MAX_IMAGE_SIZE } from "@/utils/sizesAllowed";

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

  const handleUploadImage = useCallback(async () => {
    setLoading(true);

    try {
      if (!image?.size) {
        return;
      }

      if (image?.size > MAX_IMAGE_SIZE) {
        toast({
          variant: "destructive",
          title: "Uh oh! The image is too large.",
          description: "Please upload an image smaller than 10MB.",
        });
        return;
      }

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
  }, [image, toast]);

  useEffect(() => {
    if (image && selectedFormat) {
      handleUploadImage();
    }
  }, [image, selectedFormat, handleUploadImage]);

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
    <div className="flex flex-col min-h-screen w-full px-4 sm:px-6 md:px-8 mt-12 md:mt-0">
      <div className="space-y-6 p-4 sm:p-6 border rounded-lg w-full ">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Upload & Fill Image
        </h1>

        {/* Image Upload Input */}
        <div className="flex flex-col space-y-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="cursor-pointer w-full lg:w-1/3 text-sm"
          />
          <p className="text-xs sm:text-sm text-gray-500">Max size: 10MB</p>
        </div>

        {/* Aspect Ratio Selection */}
        <Select onValueChange={setSelectedFormat}>
          <SelectTrigger className="w-full lg:w-1/3">
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
            <div className="w-full h-40 flex justify-center items-center">
              <Loader2 className="animate-spin w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          ) : (
            <div className="max-w-full mx-auto">
              {cloudinaryImage && (
                <div className="relative max-w-3xl overflow-hidden">
                  <CldImage
                    src={cloudinaryImage}
                    alt="image"
                    width={
                      socialFormats[
                        selectedFormat as keyof typeof socialFormats
                      ]?.width
                    }
                    height={
                      socialFormats[
                        selectedFormat as keyof typeof socialFormats
                      ]?.height
                    }
                    aspectRatio={
                      socialFormats[
                        selectedFormat as keyof typeof socialFormats
                      ]?.aspectRatio
                    }
                    fillBackground
                    className="rounded-lg w-full object-contain"
                    ref={imageRef}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {cloudinaryImage && (
          <div className="flex justify-start">
            <Button
              className="w-full sm:w-auto flex items-center gap-2 rounded-md px-4 py-2"
              onClick={handleDownloadImage}
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">
                Download Filled Image
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FillPage;
