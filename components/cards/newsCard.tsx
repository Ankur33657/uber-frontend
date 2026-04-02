import Image from "next/image";
import { useGetLastMonthsNews } from "../community/service";
const NewsCard = () => {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-lg rounded-md">
      <Image
        src="/car.jpeg"
        alt="news"
        width={200}
        height={200}
        unoptimized
        className="w-full rounded-md"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-4 items-center">
          <p className="text-xs uppercase font-bold text-red-600">
            Industry trends
          </p>
          <p className="text-xs text-slate-400">yesterday</p>
        </div>
        <p className="text-xl font-bold">
          Travel Trends: The Rise of Sustainable Commuting
        </p>
        <p className="text-xs text-slate-600">
          Recent data shows a 40% increase in multi-modal travel bookings. Users
          are prioritizing carbon-neutral options over convenience.
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined p-1 bg-primary rounded-full text-white ">
              face
            </span>
            <h1 className="text-sm font-bold text-slate-600">sarh chen</h1>
          </div>
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
