"use client";
import { User, Send, X } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { useUploadThing } from "@/common/utils";
import CommunityService from "@/services/community.service";
import { Spinner } from "../ui/spinner";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
interface PayloadItems {
  message: string;
  location: string;
  tags: string[];
  mediaUrl: string;
  mediaKey: string;
  mediaType: string;
}
const CreatePost = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [payload, setPayload] = useState<PayloadItems>({
    message: "",
    location: "",
    tags: [],
    mediaUrl: "",
    mediaKey: "",
    mediaType: "",
  });
  const [tag, setTag] = useState<string>("");
  const { startUpload } = useUploadThing("imageUploader");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let imageUrl = "";
    let imageKey = "";
    let type = "";
    try {
      if (file) {
        const res = await startUpload([file]);
        imageUrl = res?.[0]?.url ?? "";
        imageKey = res?.[0]?.key ?? "";
        type = res?.[0]?.type ?? "";
      }
      setPayload((prev) => ({
        ...prev,
        mediaUrl: imageUrl,
        mediaKey: imageKey,
        mediaType: type,
      }));
      const res = await CommunityService?.createPost({
        ...payload,
        mediaUrl: imageUrl,
        mediaKey: imageKey,
        mediaType: type,
      });
      if (res) {
        toast.success("Post successful");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Something wrong while creating post");
    } finally {
      setLoading(false);
      setPayload({
        message: "",
        location: "",
        tags: [],
        mediaUrl: "",
        mediaKey: "",
        mediaType: "",
      });
      setFile(undefined);
    }
  };

  return (
    <div className="p-3 bg-white shadow-lg rounded-md border-2 border-solid border-slate-200">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-start">
          <User className="p-1 bg-primary rounded-full text-white mt-1" />
          <Textarea
            placeholder="Share your ride experience..."
            className="text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0 overflow-auto h-20 "
            value={payload?.message}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>
        {file && (
          <div className="relative">
            <Image
              src={URL.createObjectURL(file)}
              alt="preview image"
              width={100}
              height={100}
              className="w-full h-30 rounded-md object-contain"
            />

            <span
              className="material-symbols-outlined text-sm absolute top-0 right-0 bg-black/50 text-white p-1 rounded-full"
              onClick={(e) => {
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
                setFile(undefined);
                setPayload((prev: any) => ({
                  ...prev,
                  image: "",
                }));
              }}
            >
              close
            </span>
          </div>
        )}
        <div className="flex flex-row gap-1 flex-wrap">
          {payload?.tags.map((item, idx) => (
            <Badge variant={"secondary"} key={idx}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 my-2" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center p-1">
          <span
            className="material-symbols-outlined text-slate-600"
            onClick={handleClick}
          >
            image
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <span
            className="material-symbols-outlined text-slate-600"
            onClick={() => toast?.info("feature comming soon...")}
          >
            location_on
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <span className="material-symbols-outlined text-slate-600 text-center">
                sell
              </span>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>
                <div className="text-md font-bold">Add Tag&apos;s</div>
              </DialogTitle>

              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Add Tag and continue..."
                  className="pr-10 pl-4 py-5"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />

                <Send
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-black"
                  size={18}
                  onClick={() => {
                    if (!tag.trim()) return;
                    setPayload((prev) => ({
                      ...prev,
                      tags: [...prev.tags, tag],
                    }));
                    setTag("");
                  }}
                />
              </div>
              <div className="flex flex-row gap-2 flex-wrap">
                {payload?.tags?.map((item, idx) => (
                  <div key={idx} className="relative inline-block">
                    <Badge variant="secondary" className="pr-4">
                      {item}
                    </Badge>
                    <X
                      className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer bg-primary rounded-full text-white "
                      size={14}
                      onClick={() =>
                        setPayload((prev) => ({
                          ...prev,
                          tags: prev.tags.filter((_, i) => i !== idx),
                        }))
                      }
                    />
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Button
          onClick={handleSubmit}
          className="px-6 text-white"
          disabled={!payload?.message || loading}
        >
          {loading ? <Spinner /> : "Post"}
        </Button>
      </div>
    </div>
  );
};
export default CreatePost;
