"use client";

import type React from "react";
import { useEffect, useState, useCallback } from "react";
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
import { getCldVideoUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { MAX_VIDEO_SIZE } from "@/utils/sizesAllowed";

const VideoPreviewsPage = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [maxClips, setMaxClips] = useState<string | null>(null);
  const [minClipLength, setMinClipLength] = useState<string | null>(null);
  const [cloudinaryVideo, setCloudinaryVideo] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [videoUploading, setVideoUploading] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const [maxClipsArray] = useState<string[]>(["3", "6", "9"]);
  const [minClipLengthArray] = useState<string[]>(["1", "3", "5"]);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    if (file) {
      setVideo(file);
    }
  };

  const handleUploadVideo = useCallback(async () => {
    setVideoUploading(true);
    setPreviewUrl(null);
    try {
      if (!video?.size) {
        return;
      }

      if (video?.size > MAX_VIDEO_SIZE) {
        toast({
          variant: "destructive",
          title: "Uh oh! The video is too large.",
          description: "Please upload a video smaller than 50MB.",
        });
        return;
      }

      toast({
        title: "Please wait till the video uploads!",
        description: "This might take a few seconds.",
        style: {
          backgroundColor: "#dff0e0",
          borderColor: "#7f9f7f",
          color: "#388e3c",
        },
      });
      const formData = new FormData();
      formData.append("file", video as File);

      const response = await axios.post("/api/video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        console.log(response);
        setCloudinaryVideo(response.data.public_url);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong while uploading the video.",
      });
    } finally {
      setVideoUploading(false);
    }
  }, [video, toast]);

  const getPreviewUrl = useCallback(() => {
    setLoading(true);
    try {
      const url = getCldVideoUrl({
        src: cloudinaryVideo as string,
        rawTransformations: [
          `e_preview:duration_${duration}:max_seg_${maxClips}:min_seg_dur_${minClipLength}`,
        ],
      });
      console.log(url);
      setPreviewUrl(url);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong while transforming the video.",
      });
    } finally {
      setLoading(false);
    }
  }, [cloudinaryVideo, duration, maxClips, minClipLength, toast]);

  useEffect(() => {
    if (video) {
      handleUploadVideo();
    }
  }, [video, handleUploadVideo]);

  useEffect(() => {
    if (cloudinaryVideo && duration && maxClips && minClipLength) {
      getPreviewUrl();
    }
  }, [cloudinaryVideo, duration, maxClips, minClipLength, getPreviewUrl]);

  const handleDownloadVideo = () => {
    if (!previewUrl) {
      return;
    }

    fetch(previewUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${video?.name}_preview.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="flex flex-col min-h-screen w-full px-4 sm:px-6 md:px-8 mt-12 md:mt-0">
      <div className="space-y-6 p-4 sm:p-6 border rounded-lg w-full ">
        <h1 className="text-xl sm:text-2xl font-semibold">Upload Video</h1>

        {/* Video Upload Input */}
        <div className="flex flex-col space-y-2">
          <Input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="cursor-pointer w-full lg:w-1/3 text-sm"
          />
          <p className="text-xs sm:text-sm text-gray-500">Max size: 50MB</p>
        </div>

        <div className="w-full">
          {videoUploading ? (
            <div className="w-full h-40 flex justify-center items-center">
              <Loader2 className="animate-spin w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          ) : (
            <div className="max-w-full">
              {cloudinaryVideo && (
                <div className="space-y-4">
                  <Input
                    type="number"
                    placeholder="Enter Duration in seconds"
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="cursor-pointer w-full lg:w-1/3 sm:w-72"
                  />

                  <Select onValueChange={setMaxClips}>
                    <SelectTrigger className="w-full lg:w-1/3 sm:w-72">
                      <SelectValue placeholder="Select Max Clips" />
                    </SelectTrigger>
                    <SelectContent>
                      {maxClipsArray.map((key) => (
                        <SelectItem key={key} value={key}>
                          {key}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setMinClipLength}>
                    <SelectTrigger className="w-full lg:w-1/3 sm:w-72">
                      <SelectValue placeholder="Select Min Clip Length" />
                    </SelectTrigger>
                    <SelectContent>
                      {minClipLengthArray.map((key) => (
                        <SelectItem key={key} value={key}>
                          {key}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-full">
          {loading ? (
            <div className="w-full h-40 flex justify-center items-center">
              <Loader2 className="animate-spin w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              {previewUrl && (
                <video
                  src={previewUrl}
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="flex justify-start">
            <Button
              className="w-full sm:w-auto flex items-center gap-2 rounded-md px-4 py-2"
              onClick={handleDownloadVideo}
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">
                Download Preview Video
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPreviewsPage;
