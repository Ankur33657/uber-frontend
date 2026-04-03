import Image from "next/image";
import { NewsArticle } from "@/common/types/communitytypes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import Utils from "@/common/utils";
const NewsCard = ({ data }: { data: NewsArticle }) => {
  const router = useRouter();
  const [altImage, setAltImage] = useState(false);
  return (
    <div
      className="flex flex-col gap-3 bg-white shadow-lg rounded-md"
      onClick={() =>
        router?.push(`/newsdetails?id=${data?.uri}&trending=false&tab=news`)
      }
    >
      <Image
        src={altImage ? "/skelton.jpg" : (data?.image ?? "/skelton.jpg")}
        alt="news"
        width={200}
        height={200}
        unoptimized
        className="w-full rounded-md"
        onError={() => setAltImage(true)}
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-4 items-center">
          <Badge
            className="inline-flex items-center gap-1.5 px-3 py-1 cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => Utils?.OpenUrl(data?.source?.uri)}
          >
            <span className="text-xs font-medium max-w-30 truncate">
              {data?.source?.title}
            </span>
            <span className="material-symbols-outlined !text-[14px] leading-none">
              open_in_new
            </span>
          </Badge>
          <p className="text-xs text-slate-400">{data?.dateTimePub}</p>
        </div>
        <p className="text-xl font-bold">{data?.title.slice(0, 100)}</p>
        <p className="text-xs text-slate-600">
          {data?.body.slice(0, 200) + "..."}
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined p-1 bg-primary rounded-full text-white">
              person
            </span>
            <div className="flex flex-row gap-1">
              {data?.authors.length === 0 && <h2>Unknown</h2>}
              <div className="flex flex-wrap gap-1 items-center">
                {data?.authors.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <h2 className="text-sm font-medium">{item?.name}</h2>

                    {idx < data.authors.length - 1 && (
                      <span className="mr-1 font-bold">,</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
