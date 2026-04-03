"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useGetLastMonthsNews } from "@/components/community/service";
import { NewsArticle } from "@/common/types/communitytypes";
import { Button } from "@/components/ui/button";
import Utils from "@/common/utils";
import { Badge } from "@/components/ui/badge";
const NewsDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams?.get("id");
  const trending = searchParams?.get("trending");
  const { data: News, isLoading } = useGetLastMonthsNews();
  const [altImage, setAltImage] = useState(false);
  const newsDetails = (() => {
    if (!id || !News) return null;
    const isTrending = trending === "true";
    const found = isTrending
      ? News.trending?.find((item: NewsArticle) => item.uri === id)
      : News.latest?.find((item: NewsArticle) => item.uri === id);

    return found;
  })();
  if (isLoading) return <h1>Loading</h1>;
  if (!newsDetails) return <h3>No Article Found!!</h3>;
  return (
    <div>
      <Image
        src={altImage ? "/skelton.jpg" : (newsDetails?.image ?? "/skelton.jpg")}
        alt="news"
        width={100}
        height={100}
        className="w-full"
        unoptimized
        onError={() => setAltImage(true)}
      />

      <span
        className="material-symbols-outlined absolute top-2 left-2 bg-black/70  rounded-full text-white p-1"
        onClick={() => router?.back()}
      >
        arrow_back
      </span>

      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-primary">{newsDetails?.title}</h3>
        <div className="flex flex-row gap-1">
          <h2 className="text-md font-bold underline">Author:</h2>[
          {newsDetails?.authors.length === 0 && <h2>Unknown</h2>}
          <div className="flex flex-wrap gap-1 items-center">
            {newsDetails?.authors.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <h2 className="text-sm font-medium">{item?.name}</h2>

                {idx < newsDetails.authors.length - 1 && (
                  <span className="mr-1 font-bold">,</span>
                )}
              </div>
            ))}
          </div>
          ]
        </div>
        <p className="text-xs font-bold text-gray-500">
          Published At: {newsDetails?.dateTimePub}
        </p>
        <div className="flex flex-row gap-2 items-center ">
          <h3 className="text-xs text-gray-600">Sources</h3>
          <Badge
            className="inline-flex items-center gap-1.5 px-3 py-1 cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => Utils?.OpenUrl(newsDetails?.source?.uri)}
          >
            <span className="text-xs font-medium">
              {newsDetails?.source?.title}
            </span>
            <span className="material-symbols-outlined !text-[14px] leading-none">
              open_in_new
            </span>
          </Badge>
        </div>

        <p className="text-md">{newsDetails?.body}</p>
        <Button
          className="p-5"
          onClick={() => Utils?.OpenUrl(newsDetails?.url)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};
export default NewsDetails;
