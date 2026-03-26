"use client";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useActivityQuery } from "./service";
import ActivitySkelton from "./skelton";
export default function ActivityComponent() {
  const { data: Activity, isLoading } = useActivityQuery();
  return (
    <>
      {isLoading && <ActivitySkelton />}
      {Activity?.data?.futureRide.length > 0 && (
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-bold text-slate-600">Upcoming </p>
          <p className="text-sm font-bold text-primary">1 SCHEDULED</p>
        </div>
      )}

      {Activity?.data?.futureRide.map((item: any) => (
        <div
          key={item?.id}
          className="bg-white rounded-xl p-4 shadow-xs flex flex-col gap-4 border border-slate-200"
        >
          <div className="flex flex-row  justify-between">
            <Badge>TOMORROW,08:30 AM</Badge>
            <div className="flex flex-col ">
              <div className="flex flex-row items-center">
                <span className="material-symbols-outlined">
                  currency_rupee
                </span>
                <p>42.50</p>
              </div>
              <p className="text-xs text-primary">ESTIMATED</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="w-0.5 h-20 bg-gray-400 " />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-xs text-slate-400">PICKUP</p>
                <p className="text-sm ">1248 High Street, Arts District</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-slate-400">DESTINATION</p>
                <p className="text-sm ">Central Terminal ,Gate 4</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <span className="material-symbols-outlined">date_range</span>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-slate-500">Luxury Sedan</p>
                <p className="text-xs text-slate-400">Scheduled Booking</p>
              </div>
            </div>
            <Badge>Cancel</Badge>
          </div>
        </div>
      ))}

      {Activity?.data?.previousRide.length > 0 && (
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-bold text-slate-600">Past Journeys</p>
          <p className="text-xs text-primary">View All</p>
        </div>
      )}

      {Activity?.data?.previousRide.map((item: any) => (
        <div
          key={item?.id}
          className="bg-white shadow-xs rounded-xl p-4 flex flex-col gap-2 border border-slate-200"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/file.svg"
                alt="image"
                width={60}
                height={20}
                unoptimized
                className="rounded-sm h-12 object-contain"
              />
              <div className="flex flex-col">
                <p className="text-xs font-bold text-gray-700">Julian M.</p>
                <p className="text-xs text-gray-400">Oct 24 14:15</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-700">$28.40</p>
              <p className="text-xs text-primary">
                <div className="flex flex-row items-center">
                  4.9
                  <span className="material-symbols-outlined">star</span>
                </div>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined text-slate-400">
              location_on
            </span>
            <p className="text-xs text-gray-600">
              Grand Plaza Hotel to 5th Avenue Studio
            </p>
          </div>
        </div>
      ))}

      {!isLoading && Activity?.data?.previousRide.length === 0 && (
        <div className="flex justify-center items-center h-[60vh] w-full text-slate-600">
          No Previous Ride yet!!!
        </div>
      )}
    </>
  );
}
