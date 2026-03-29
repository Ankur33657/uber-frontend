"use client";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Feed from "@/components/community/feed";
import News from "@/components/community/news";
import Stories from "@/components/community/stories";
import Safety from "@/components/community/safety";
const Community = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-md font-bold text-primary">TOP STORIES</h1>

      {/*{[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="relative w-[110px] h-[130px]">
              <Image
                src="/car.jpeg"
                alt="story"
                fill
                className="object-cover border-2 border-gray-700 rounded-md"
              />
            </div>
            <h2 className="text-sm font-bold">Captain&apos;s Tips</h2>
          </div>
        ))}*/}
      <Stories />

      <Tabs defaultValue="feed" className="w-full ">
        <TabsList className="w-full flex justify-around" variant="line">
          <TabsTrigger value="feed" className="flex-1 text-center font-bold">
            Feed
          </TabsTrigger>
          <TabsTrigger value="news" className="flex-1 text-center font-bold">
            News
          </TabsTrigger>
          <TabsTrigger value="safety" className="flex-1 text-center font-bold">
            Safety
          </TabsTrigger>
        </TabsList>
        <TabsContent value="feed" className="mt-4">
          <Feed />
        </TabsContent>

        <TabsContent value="news" className="mt-4">
          <News />
        </TabsContent>

        <TabsContent value="safety" className="mt-4">
          <Safety />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Community;
