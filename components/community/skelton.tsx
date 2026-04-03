import { Skeleton } from "../ui/skeleton";
export const PostSkelton = () => {
  return (
    <div className="flex flex-col gap-2  w-full border-2 border-slate-200 rounded-md p-4">
      <div className="flex flex-row gap-2 item-center">
        <Skeleton className="rounded-full h-8 w-8" />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
      <Skeleton className="w-full h-10 " />
      <Skeleton className="w-full h-32" />
      <div className="flex flex-row gap-2">
        <Skeleton className="w-8 h-4" />
        <Skeleton className="w-8 h-4" />
      </div>
    </div>
  );
};

export const StorySkelton = () => {
  return (
    <div className="min-w-[80px] h-[120px]">
      <Skeleton className="w-full h-full rounded-xl" />
    </div>
  );
};

export const NewsSkelton = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-1 overflow-x-auto  no-scrollbar">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <Skeleton
            key={`trending-skel-${idx}`}
            className="w-80 h-96 shrink-0 rounded-xl animate-pulse"
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {[1, 2, 3].map((_, idx) => (
          <PostSkelton key={`post-skel-${idx}`} />
        ))}
      </div>
    </div>
  );
};
