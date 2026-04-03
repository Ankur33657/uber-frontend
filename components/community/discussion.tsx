import { Input } from "../ui/input";
import { Send } from "lucide-react";
import { communityPostItems } from "@/common/types/communitytypes";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useState } from "react";
import CommunityService from "@/services/community.service";
import { toast } from "sonner";
const DiscussionForm = ({ data }: { data: communityPostItems }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    try {
      const payload = { _id: data?._id, comment: message };
      await CommunityService?.updatePost(payload);
    } catch (error) {
      console.log(error);
      toast.error("Error in sending message");
    }
  };

  console.log(data);
  return (
    <div className="h-[calc(80vh-56px)] flex flex-col">
      <div className="flex-1 overflow-y-auto py-2  flex flex-col gap-2">
        {data?.comments?.map((item: any) => (
          <div
            key={item?.id}
            className="flex flex-row gap-2 justify-items-start"
          >
            <Avatar>
              <AvatarFallback className="bg-pink-400 text-white">
                {item?.commentBy?.name.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col bg-gray-50 py-2 px-4 rounded-xl w-full gap-0.5">
              <div className="flex flex-row justify-between">
                <h1 className="text-sm font-bold">{item?.commentBy?.name}</h1>
                <p className="text-xs text-slate-500">
                  {formatDistanceToNow(new Date(item?.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>

              <p className="text-sm text-slate-600">{item?.message}</p>
              <div className="flex flex-row justify-end gap-4 items-center">
                <span className="material-symbols-outlined">thumb_up</span>
                <h1 className="text-xs text-slate-600 font-bold">Reply</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-14  border-t bg-white p-2 flex flex-row gap-2 items-center">
        <Input
          type="text"
          placeholder="Comment..."
          className="p-5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Send onClick={handleSubmit} />
      </div>
    </div>
  );
};
export default DiscussionForm;
