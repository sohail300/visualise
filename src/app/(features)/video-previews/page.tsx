"use client";

import React, { useEffect, useState } from "react";
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

  const handleUploadVideo = async () => {
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
          description: "Please upload an image smaller than 50MB.",
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
  };

  function getPreviewUrl() {
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
        title: "Uh oh! Something went wrong while transformingthe video.",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (video) {
      handleUploadVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  useEffect(() => {
    if (cloudinaryVideo && duration && maxClips && minClipLength) {
      getPreviewUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudinaryVideo, duration, maxClips, minClipLength]);

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
    <div className="flex flex-col min-h-screen p-0 w-full">
      <div className="space-y-4 p-6 border rounded-lg w-full">
        <h1 className="text-xl font-semibold">Upload Video</h1>

        {/* Video Upload Input */}
        <Input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="cursor-pointer w-fit"
        />
        <p className="text-sm text-gray-500">Max size: 50MB</p>

        <div className=" w-full">
          {videoUploading ? (
            <div className=" w-full h-20 flex justify-center items-center">
              <Loader2 className="animate-spin w-12 h-12" />
            </div>
          ) : (
            <div className="max-w-full">
              {cloudinaryVideo && (
                <div className="space-y-4 ">
                  <Input
                    type="number"
                    placeholder="Enter Duration in seconds"
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="cursor-pointer w-72"
                  />

                  <Select onValueChange={setMaxClips}>
                    <SelectTrigger className="w-72">
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
                    <SelectTrigger className="w-72">
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

        <div className=" w-full">
          {loading ? (
            <div className=" w-full h-20 flex justify-center items-center">
              <Loader2 className="animate-spin w-12 h-12" />
            </div>
          ) : (
            <div className="max-w-3xl">
              {previewUrl && (
                <video
                  src={previewUrl}
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-fit h-fit object-cover"
                />
              )}
            </div>
          )}
        </div>

        {previewUrl && (
          <Button
            className="w-fit flex items-center gap-2 rounded-sm px-8"
            onClick={handleDownloadVideo}
          >
            <Download className="h-5 w-5" />
            Download Preview Video
          </Button>
        )}
      </div>
    </div>
  );
};

export default VideoPreviewsPage;
