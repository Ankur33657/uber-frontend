import { useGetAllStories } from "./service";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { StorySkelton } from "./skelton";
const Stories = () => {
  const { data: Stories, isFetching } = useGetAllStories();
  const router = useRouter();

  return (
    <div className="flex gap-4 overflow-x-auto px-2 py-2 scrollbar-hide">
      <div
        onClick={() => router.push("/createstory")}
        className="min-w-[80px] h-[120px] flex flex-col items-center justify-center bg-gray-100 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-200 transition"
      >
        <span className="material-symbols-outlined text-gray-500 text-2xl">
          add
        </span>
        <p className="text-xs text-gray-600 font-medium">Add</p>
      </div>
      {isFetching && [1, 2, 3, 4]?.map((_, idx) => <StorySkelton key={idx} />)}
      {Stories?.data?.map((item: any) => (
        <div
          onClick={() => router.push(`/viewstory?id=${item?._id}`)}
          key={item?._id}
          className="relative min-w-[80px] h-[120px] rounded-xl overflow-hidden border-2 border-slate-300 cursor-pointer"
        >
          <Avatar className="absolute top-1 left-1 w-7 h-7 z-10 border-2 border-white">
            <AvatarImage
              // src={item?.user?.profileImage || "https://github.com/shadcn.png"}
              alt={item?.user?.name}
            />
            <AvatarFallback className="text-[10px] bg-white text-black">
              {item?.user?.name?.slice(0, 2)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h1 className="absolute bottom-1 left-1 text-xs text-white p-0.5 bg-black/30 rounded-md backdrop-blur-lg z-1000">
            {item?.user?.name.slice(0, 20)}
          </h1>
          {item?.media?.type?.startsWith("video") && (
            <video
              src={item?.media?.url}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
          )}

          {item?.media?.type?.startsWith("image") && (
            <Image
              src={item?.media?.url}
              alt="story"
              fill
              className="object-cover"
            />
          )}
          {item?.text && (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 text-white text-sm p-4 text-center">
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stories;
