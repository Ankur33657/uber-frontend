import Image from "next/image";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { communityPostItems } from "@/common/types/communitytypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import CommunityService from "@/services/community.service";
import DiscussionForm from "../community/discussion";
const PostCard = ({ data }: { data: communityPostItems }) => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const isLiked = data?.like?.includes(user?._id);
  const handleLike = async () => {
    const payload = { _id: data?._id, like: true };
    try {
      await CommunityService?.updatePost(payload);
    } catch (error: any) {
      console.log(error.message);
      toast.error("Somthing went Wrong");
    }
  };
  return (
    <div className="p-4 bg-white rounded-sm shadow-lg flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-black">
              {data?.user?.name.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-sm font-bold">{data?.user?.name}</h1>
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {formatDistanceToNow(new Date(data?.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined text-slate-400">
          more_horiz
        </span>
      </div>
      <p className="text-sm ">{data?.data?.message}</p>
      <Image
        src={data?.data?.mediaUrl || ""}
        alt="car"
        width={100}
        height={100}
        className="w-full rounded-md"
      />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-1" onClick={handleLike}>
            <span
              className={`material-symbols-outlined`}
              style={{
                color: isLiked ? "red" : "gray",
              }}
            >
              favorite
            </span>
            {data?.like?.length}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex flex-row gap-1">
                <span className="material-symbols-outlined text-slate-400">
                  chat
                </span>
                {data?.comments?.length}
              </div>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="h-[80vh]! max-h-[80vh]! z-2000 border-2 border-slate-400 rounded-t-2xl "
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-slate-600 border-b-2 border-slate-400">
                  {`Discussions (${data?.comments.length})`}
                </SheetTitle>
                <DiscussionForm data={data} />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <span className="material-symbols-outlined text-slate-400">share</span>
      </div>
    </div>
  );
};
export default PostCard;
