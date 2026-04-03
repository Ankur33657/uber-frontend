import Image from "next/image";
import { Badge } from "../ui/badge";
import NewsCard from "../cards/newsCard";
import { useGetLastMonthsNews } from "./service";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { NewsSkelton } from "./skelton";
import PaginatedComponent from "@/common/paginatedComponent";
import { useState, useEffect } from "react";
const News = () => {
  const { data: News, isLoading } = useGetLastMonthsNews();
  const router = useRouter();
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <h1 className="text-lg font-bold text-primary">Trending</h1>
        </div>
        <div className="flex flex-row gap-4 overflow-y-auto">
          {isLoading && <NewsSkelton />}
          {News?.trending?.map((item) => (
            <div
              onClick={() =>
                router.push(
                  `newsdetails?id=${item?.uri}&trending=true&tab=news`,
                )
              }
              key={item?.uri}
              className="relative shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(44,47,48,0.06)] group"
            >
              <Image
                src={item?.image ?? ""}
                alt="Trending-news"
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute bottom-2 left-2  flex flex-col gap-2">
                <Badge className="uppercase">
                  {item?.title.slice(0, 15) + "..."}
                </Badge>
                <div className="flex flex-row gap-2">
                  <Badge className="text-xs py-1 px-2">
                    Source: {item?.source?.title ?? "Unknown"}
                  </Badge>
                  <Badge className="text-xs py-0.5 px-2">
                    {formatDistanceToNow(item?.dateTimePub)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-lg font-bold text-primary">Latest News</h1>
      {News?.latest?.slice((page - 1) * 5, page * 5)?.map((item) => (
        <NewsCard key={item?.uri} data={item} />
      ))}

      <PaginatedComponent
        page={page}
        setPage={(item) => {
          if (item) setPage((prev) => prev - 1);
          else {
            setPage((prev) => prev + 1);
          }
        }}
      />
    </div>
  );
};
export default News;
