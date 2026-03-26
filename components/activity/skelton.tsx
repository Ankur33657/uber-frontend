import { Skeleton } from "../ui/skeleton";
const ActivitySkelton = () => {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="flex flex-row justify-between">
        <Skeleton className="w-30 h-4" />
        <Skeleton className="w-30 h-4" />
      </div>
      <Skeleton className="w-full h-30" />
      <Skeleton className="w-full h-4" />
      {[1, 2, 3].map((_, idx) => (
        <Skeleton key={idx} className="w-full h-12" />
      ))}
    </div>
  );
};
export default ActivitySkelton;
