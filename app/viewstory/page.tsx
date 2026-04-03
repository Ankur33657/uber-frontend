"use client";
import { useGetAllStories } from "@/components/community/service";
import { useSearchParams, useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ViewStory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const { data } = useGetAllStories();
  const stories = data?.data ?? [];
  const currentIndex = stories.findIndex((item: any) => item?._id === id);
  const story = currentIndex !== -1 ? stories[currentIndex] : null;
  const [progress, setProgress] = useState<number>(0);

  const goToNext = useCallback(() => {
    const nextStory = stories[currentIndex + 1];
    if (nextStory) {
      router.replace(`?id=${nextStory._id}`);
    } else {
      router.push("/community");
    }
  }, [stories, currentIndex, router]);

  const goToPrev = useCallback(() => {
    const prevStory = stories[currentIndex - 1];
    if (prevStory) {
      router.replace(`?id=${prevStory._id}`);
    } else {
      router.push("/community");
    }
  }, [stories, currentIndex, router]);
  useEffect(() => {
    if (!story) return;
    const start = Date.now();
    const duration = 10000;
    const timer = setInterval(() => {
      const percent = ((Date.now() - start) / duration) * 100;
      setProgress(percent >= 100 ? 100 : percent);
    }, 100);

    return () => clearInterval(timer);
  }, [id, story]);

  useEffect(() => {
    if (progress >= 100) {
      goToNext();
    }
  }, [progress]);

  if (!story) return null;

  return (
    <div
      className="h-screen w-full relative bg-gradient-to-br from-purple-400 to-pink-500"
      onClick={(e) => {
        const { clientX } = e;
        const screenWidth = window.innerWidth;

        const leftZone = screenWidth * 0.2;
        const rightZone = screenWidth * 0.8;

        if (clientX < leftZone) {
          goToPrev();
        } else if (clientX > rightZone) {
          goToNext();
        }
      }}
    >
      <Progress value={progress} className="absolute top-2 z-10 w-full" />

      <div className="absolute top-6 left-4 z-10">
        <div className="flex gap-2 items-center">
          <span
            className="material-symbols-outlined text-white cursor-pointer bg-black/20 backdrop-blur-2xl rounded-full font-bold p-1"
            onClick={(e) => {
              e.stopPropagation();
              router.back();
            }}
          >
            arrow_back
          </span>

          <Avatar className="w-10 h-10 border-2 border-white">
            <AvatarImage src={story?.user?.profileImage} />
            <AvatarFallback className="text-[10px] bg-white text-black">
              {story?.user?.name?.slice(0, 2)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-0.5">
            <h1 className="text-white text-xs font-medium drop-shadow-md">
              {story?.user?.name}
            </h1>

            <h3 className="text-xs text-white/80 drop-shadow-sm">
              {story?.createdAt
                ? formatDistanceToNow(new Date(story.createdAt), {
                    addSuffix: true,
                  })
                : ""}
            </h3>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 w-full p-2 ">
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg px-3 py-2 shadow-lg">
          <Input
            type="text"
            placeholder="Reply..."
            // value={caption}
            // onChange={(e) => setCaption(e.target.value)}
            className="border-none outline-none focus:ring-0! shadow-none text-lg text-slate-600 p-0 placeholder:text-white"
          />
          <Button variant={"ghost"}>
            <span className="material-symbols-outlined text-white text-[18px] text-md">
              send
            </span>
          </Button>
        </div>
      </div>

      {story?.media?.type?.startsWith("video") && (
        <video
          src={story?.media?.url}
          className="w-full h-full object-contain"
          muted
          autoPlay
          playsInline
        />
      )}

      {story?.media?.type?.startsWith("image") && (
        <Image
          src={story?.media?.url}
          alt="story"
          fill
          className="object-cover"
        />
      )}

      {story?.text && (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 text-white text-lg p-6 text-center">
          {story.text}
        </div>
      )}
    </div>
  );
};

export default ViewStory;
