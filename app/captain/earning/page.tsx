import CashOut from "@/components/captainAssets/cashOut";
import EarningChart from "@/components/captainAssets/earningChart";
import PastDriveCard from "@/components/captainAssets/pastdriveCard";
const Earning = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <CashOut />

      <div className="flex gap-3 text-center">
        <div className="flex-1 p-4 bg-gray-100 rounded-xl shadow-md">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
          >
            directions_car
          </span>
          <h1 className="text-xl font-bold uppercase">Trips</h1>
          <h2 className="text-xl text-slate-600 font-bold">142</h2>
        </div>

        <div className="flex-1 p-4 bg-gray-100 rounded-xl shadow-md">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
          >
            hourglass_empty
          </span>
          <h1 className="text-xl font-bold uppercase">Online</h1>
          <h2 className="text-xl text-slate-600 font-bold">48.5h</h2>
        </div>
      </div>

      <div className="p-4 bg-gray-100 rounded-xl shadow-md flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="material-symbols-outlined bg-primary rounded-md p-3 text-white">
            volunteer_activism
          </span>

          <div>
            <h1 className="text-sm uppercase text-slate-600">
              Avg Weekly Earning
            </h1>
            <h2 className="text-xl font-bold">$28.7</h2>
          </div>
        </div>

        <h1 className="text-sm font-semibold text-green-600">+12% last week</h1>
      </div>

      <EarningChart />
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-md uppercase text-slate-600 font-bold">
          Trip History
        </h1>

        <h2 className="text-xs text-primary uppercase underline">View All</h2>
      </div>
      <PastDriveCard />
      <PastDriveCard />
      <PastDriveCard />
    </div>
  );
};

export default Earning;
