"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import CommunityService from "@/services/community.service";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/common/utils";
import { FileSize } from "@/common/constant";
type MediaPropsItems = {
  type: string;
  value: string;
};
const CreateStory = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState<MediaPropsItems>({
    type: "text",
    value: "",
  });
  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file?.size > FileSize?.IMAGE) {
      toast.warning("Media should be less than 4MB");
      return;
    }
    setMedia((prev) => ({ ...prev, type: file?.type }));
    if (!file) return;
    setFile(file);
  };

  const handleSubmit = async () => {
    let payload: any = { caption: caption, type: media?.type };
    if (media?.type === "text") {
      payload = { ...payload, text: media?.value };
    } else if (file) {
      const res = await startUpload([file]);
      payload = {
        ...payload,
        media: res?.[0]?.url ?? "",
        mediaKey: res?.[0]?.key ?? "",
      };
    }
    try {
      const res = await CommunityService?.createStory(payload);
      if (res) {
        router.back();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in uploading Story");
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <span
        className="material-symbols-outlined fixed top-4 left-4 font-bold bg-black/20 text-white rounded-full p-2 backdrop-blur-md"
        onClick={() => router.back}
      >
        close
      </span>
      <span
        className="material-symbols-outlined fixed top-4 right-4 font-bold bg-black/20 text-white rounded-full p-2 backdrop-blur-md"
        onClick={() => {
          handleClick();
        }}
      >
        add_photo_alternate
      </span>

      {media?.type === "text" ? (
        <div className="h-screen  bg-purple-300 flex justify-center items-center w-full ">
          <Textarea
            placeholder="Share your view..."
            className="border-none outline-none focus:ring-0! shadow-none text-lg text-slate-600 p-4 text-center h-[80vh] text-md"
            value={media?.value}
            onChange={(e: any) =>
              setMedia((prev) => ({ ...prev, value: e.target.value }))
            }
          />
        </div>
      ) : (
        <Image
          src={file ? URL.createObjectURL(file) : ""}
          alt="Story"
          width={100}
          height={100}
          className="h-screen w-full object-contain"
        />
      )}

      <div className="fixed bottom-2 w-full p-2">
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg px-3 py-2 shadow-lg">
          <Input
            type="text"
            placeholder="Type a Caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border-none outline-none focus:ring-0! shadow-none text-lg text-slate-600 p-0"
          />
          <Button variant={"ghost"} onClick={handleSubmit}>
            <span className="material-symbols-outlined text-white text-[18px] text-md">
              send
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreateStory;
