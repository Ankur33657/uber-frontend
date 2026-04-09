"use client";
import { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import Feed from "@/components/community/feed";
import Safety from "@/components/community/safety";
import { StorySkelton, NewsSkelton } from "@/components/community/skelton";

const Stories = dynamic(() => import("@/components/community/stories"), {
  loading: () => (
    <div className="flex flex-row gap-1">
      {[1, 2, 3, 4].map((_, idx) => (
        <StorySkelton key={idx} />
      ))}
    </div>
  ),
});

const News = dynamic(() => import("@/components/community/news"), {
  loading: () => <NewsSkelton />,
});

const CommunityContent = () => {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") ?? "feed";
  const router = useRouter();

  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false });
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-md font-bold text-primary">TOP STORIES</h1>
      <Stories />

      <Tabs
        value={defaultTab}
        onValueChange={handleTabChange}
        className="w-full "
      >
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
        <TabsContent value="feed" className="mt-2">
          <Feed />
        </TabsContent>

        <TabsContent value="news" className="mt-2">
          <News />
        </TabsContent>

        <TabsContent value="safety" className="mt-2">
          <Safety />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Community() {
  return (
    <Suspense fallback={<div>Loading community...</div>}>
      <CommunityContent />
    </Suspense>
  );
}
