import CreatePost from "../cards/createPost";
import PostCard from "../cards/postCard";
import SafetyCard from "../cards/safetyCard";
const Feed = () => {
  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      <h1 className="text-sm font-bold text-primary">RECENT ACTIVITY</h1>
      <PostCard />
      <SafetyCard />
    </div>
  );
};
export default Feed;
