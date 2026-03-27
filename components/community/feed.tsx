"use client";
import CreatePost from "../cards/createPost";
import dynamic from "next/dynamic";
import { PostSkelton } from "./skelton";
import SafetyCard from "../cards/safetyCard";
import { useCommunityPostQuery } from "./service";
import { communityPostItems } from "@/common/types/communitytypes";
const PostCard = dynamic(() => import("@/components/cards/postCard"), {
  loading: () => <PostSkelton />,
});
const Feed = () => {
  const { data: communityPost, isLoading } = useCommunityPostQuery();
  console.log(communityPost, "Coo");
  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      <h1 className="text-sm font-bold text-primary">RECENT ACTIVITY</h1>
      {isLoading && <PostSkelton />}
      {!isLoading && communityPost?.data?.data?.length > 0 ? (
        communityPost?.data?.data?.map((item: communityPostItems) => (
          <PostCard data={item} key={item?._id} />
        ))
      ) : (
        <p className="text-center text-gray-500">No posts found</p>
      )}

      <SafetyCard />
    </div>
  );
};
export default Feed;
