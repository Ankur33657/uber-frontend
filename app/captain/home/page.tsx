import CaptainOnline from "@/components/captainAssets/captainOnline";
import PastDriveCard from "@/components/captainAssets/pastdriveCard";
import WeeklyReport from "@/components/captainAssets/weeklyReport";
const CaptainHome = () => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <CaptainOnline />
      <WeeklyReport />
      <section className="relative rounded-xl overflow-hidden h-[340px] shadow-[0_8px_24px_rgba(44,47,48,0.06)]">
        <img
          className="w-full h-full object-cover grayscale brightness-110 opacity-40"
          data-alt="abstract top-down city map visualization with glowing orange and yellow heat zones indicating high traffic areas"
          data-location="San Francisco"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrgm4zcR0m_ufWnQyxqcMIcvbDh0aLbKGg0cYejIW6xmfQ7gIuLtwo2HE7KefLXGZBNt65go9CpsGTQOties3YasDiGA3z0-O7TdBag_nhfrwR38U2vc3aOUsmWXFms806BWY6chM-Rln433_0R6yeMxrMI77A9f_g-rVp0VIfkqF6G2g0VlPiBO2QHFl01e94S5UmBNOi9PZ-Cotzvi-dC0NZJwwLVf1MnOLZXcdsxGU6PSCK6CrTrKEUC1zH2NTMfRAFG6LGhE"
        />
        <div className="absolute inset-0 bg-gradient-to-transparent from-surface/80 via-transparent to-transparent"></div>
        <div className="absolute top-6 left-6 glass-panel p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-sm font-bold font-headline">
              High Demand in Downtown
            </p>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            1.5x surge currently active
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
            <div className="relative bg-on-surface p-3 rounded-full shadow-lg border-2 border-surface">
              <span className="material-symbols-outlined text-surface text-xl">
                navigation
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-slate-600 text-xs uppercase">
          Previous Completed Drive
        </h1>
        <h2 className="text-xs uppercase underline text-primary">View All</h2>
      </div>
      <PastDriveCard />
      <PastDriveCard />
    </div>
  );
}
export default CaptainHome;