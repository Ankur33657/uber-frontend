import { useGetAllStories } from "./service";
import Image from "next/image";
const Stories = () => {
  const { data: Stories } = useGetAllStories();
  return (
    <div className="flex flex-row gap-4 overflow-y-auto">
      <div className="w-24 h-32 flex justify-center items-center bg-gray-200 rounded-md border-2 border-slate-400">
        <div className="flex flex-col justify-center items-center">
          <span className="material-symbols-outlined text-slate-500">add</span>
          <h1 className="text-md font-bold text-slate-600">Add Story</h1>
        </div>
      </div>
      {Stories?.data?.map((item: any) => (
        <Image
          key={item?.id}
          src={item?.url}
          alt="Stories"
          width={24}
          height={32}
          unoptimized
        />
      ))}
    </div>
  );
};
export default Stories;
