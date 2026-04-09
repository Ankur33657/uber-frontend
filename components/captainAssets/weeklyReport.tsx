"use client";

import { useGetCaptainWeeklyReport } from "./services";
import { useGetCaptainStatus } from "./services";
import { Progress } from "@/components/ui/progress";
const WeeklyReport = () => {
    const { data: weeklyReport } = useGetCaptainWeeklyReport();
    const { data: captainStatus } = useGetCaptainStatus();
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-white rounded-xl p-8 flex flex-col justify-between shadow-xs">
        <div>
          <h2 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-2 font-label">
            Weekly Earnings
          </h2>

          <div className="flex items-baseline gap-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              currency_rupee
            </span>
            <span className="text-5xl font-extrabold tracking-tighter text-on-surface font-headline">
              {weeklyReport?.overall?.value}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-end">
          <div className="flex gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                Trips
              </p>
              <p className="text-xl font-bold font-headline">
                {weeklyReport?.overall?.trip}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                Distance
              </p>
              <p className="text-xl font-bold font-headline">
                {weeklyReport?.overall?.distance} km
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                Time
              </p>
              <p className="text-xl font-bold font-headline">
                {weeklyReport?.overall?.time} hrs
              </p>
            </div>
          </div>

          <a
            className="text-primary font-bold text-xs flex items-center gap-1 hover:underline"
            href="#"
          >
            View Details
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/10 flex flex-col justify-center items-center text-center shadow-xs">
        <span className="material-symbols-outlined text-primary text-4xl mb-3">
          military_tech
        </span>

        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
          Weekly Goal
        </p>

        <p className="text-lg font-bold text-on-primary-container font-headline">
          {(weeklyReport?.overall?.value ?? 0 * 100) /
            captainStatus?.earningGoal}
          % Achieved
        </p>

        <Progress
          value={
            (weeklyReport?.overall?.value ?? 0 * 100) /
            captainStatus?.earningGoal 
          }
          className="w-full m-2"
        />
       
      </div>
    </section>
  );
};
export default WeeklyReport;
