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

const VideoPreviewsPage = () => {
  const [duration, setDuration] = useState<number>(0);
  const [maxClips, setMaxClips] = useState<string>("0");
  const [minClipLength, setMinClipLength] = useState<string>("0");

  const [maxClipsArray, setMaxClipsArray] = useState<string[]>(["3", "6", "9"]);
  const [minClipLengthArray, setMinClipLengthArray] = useState<string[]>([
    "1",
    "3",
    "5",
  ]);

  const [video, setVideo] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setVideo(event.target?.result as string);
      reader.readAsDataURL(file);
    }
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

        <div className=" max-w-4xl">
          {/* Video Preview */}
          {(video || previewVideo) && (
            <video
              src={video ?? previewVideo ?? ""}
              controls
              className="w-full rounded-lg"
              autoPlay
            />
          )}
        </div>

        {(video || previewVideo) && (
          <Button className="w-fit flex items-center gap-2 rounded-sm px-8">
            <Download className="h-5 w-5" />
            Download Preview Video
          </Button>
        )}
      </div>
    </div>
  );
};

export default VideoPreviewsPage;
