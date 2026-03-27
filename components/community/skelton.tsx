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
      <Skeleton className="w-full h-30" />
      <div className="flex flex-row gap-2">
        <Skeleton className="w-8 h-4" />
        <Skeleton className="w-8 h-4" />
      </div>
    </div>
  );
};
