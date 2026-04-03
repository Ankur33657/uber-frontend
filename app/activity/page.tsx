import ActivitySkelton from "@/components/activity/skelton";
import dynamic from "next/dynamic";

const ActivityComponent = dynamic(
  () => import("@/components/activity/activity"),
  {
    loading: () => <ActivitySkelton />,
  },
);
const Activity = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-black">Your Activity</p>
        <p className="text-sm text-slate-600">
          Managing your past and upcoming curations.
        </p>
      </div>
      <ActivityComponent />
    </div>
  );
};
export default Activity;
