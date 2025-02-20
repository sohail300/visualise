"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Loader2 } from "lucide-react";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import "react-loading-skeleton/dist/skeleton.css";
import { useToast } from "@/hooks/use-toast";
import { MAX_IMAGE_SIZE } from "@/utils/sizesAllowed";

const RemoveBGPage = () => {
  const [image, setImage] = useState<File | null>(null);
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
  };

  useEffect(() => {
    if (image) {
      handleUploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleDownloadImage = () => {
    if (!imageRef.current) {
      return;
    }

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${image?.name}_removebg.png`;
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

        <div className=" w-full">
          {loading ? (
            <div className=" w-full h-20 flex justify-center items-center">
              <Loader2 className="animate-spin w-12 h-12" />
            </div>
          ) : (
            <div className="max-w-3xl">
              {cloudinaryImage && (
                <CldImage
                  src={cloudinaryImage}
                  alt="image"
                  width={250}
                  height={100}
                  removeBackground
                  className="rounded-lg h-fit"
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

export default RemoveBGPage;
