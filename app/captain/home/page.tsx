import CaptainOnline from "@/components/captainAssets/captainOnline";
import PastDriveCard from "@/components/captainAssets/pastdriveCard";
const CaptainHome = () => {
    return (
      <div className="flex flex-col gap-4 p-3">
        <CaptainOnline />
        <section className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h2 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-2 font-label">
                Weekly Earnings
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tighter text-on-surface font-headline">
                  $145.50
                </span>
                <span className="text-primary font-bold text-sm">
                  +12% vs yesterday
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-end">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                    Trips
                  </p>
                  <p className="text-xl font-bold font-headline">8</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                    Online
                  </p>
                  <p className="text-xl font-bold font-headline">6.5h</p>
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
              75% Achieved
            </p>

            <div className="w-full h-1.5 bg-surface-container-highest rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-primary w-3/4 rounded-full"></div>
            </div>
          </div>
        </section>

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
        <h1 className="text-slate-600 text-xs uppercase">your Standing</h1>
        <div className="flex flex-row justify-between gap-3">
          <div className="p-4 items-center h-auto w-[50%] bg-white shadow-xs rounded-xl">
            <span className="material-symbols-outlined">star</span>
            <h1 className="text-3xl font-bold ">4.98</h1>
            <h2 className="text-xs text-slate-600 uppercase">Rating</h2>
          </div>
          <div className="p-4 items-center h-auto w-[50%] bg-white shadow-xs rounded-xl">
            <span className="material-symbols-outlined text-green-700">
              check_circle
            </span>
            <h1 className="text-3xl font-bold">95%</h1>
            <h2 className="text-xs text-slate-600 uppercase">Acceptance</h2>
          </div>
        </div>
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