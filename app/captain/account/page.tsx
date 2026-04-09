import InfoCard from "@/components/captainAssets/infoCard";
import { Button } from "@/components/ui/button";
const Account = () => {
  return (
    <>
      <section className="relative mb-1">
        <div className="flex flex-col items-end gap-6 bg-gray-100 p-4">
          <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-2xl scale-105 transform -rotate-3 border-4 border-surface-container-lowest">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              data-alt="Close-up profile photo of a professional driver, warm lighting, natural skin tones, blurred background of a modern city"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQiwWE4AJWYxfEtMD4mSI0A6F4Z9lPiSZa_a5lFNg9lNFpc_w8uPHrw9A-V8c2xZR5wQwkMyhx7IRoV8tDsbp84jCfDW8UCV-Gw6f7oc2VRVbXyR3RPRv0tetj4WcJlp6oce3uYwaJz6HJf0Tpb2Xb3D65Wn9cNw9Wme_HLDwDibc_0BuOXb3_F0V3TW4sgacAP5gm1Hw6hUwqeW70TrFmSRHgPf9jPYbrb3NkHWg1LFVbPh1YFlKrU5CW2pIOG7yp05HIqadGXLo"
            />
          </div>
          <div className="flex-1 space-y-2 pb-2">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full mb-2">
              <span className="material-symbols-outlined text-sm mr-1">
                stars
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest font-label">
                Master Driver
              </span>
            </div>
            <h2 className="font-headline font-extrabold text-4xl tracking-tighter text-on-surface">
              Captain Marcus Sterling
            </h2>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary">
                  star
                </span>
                <span className="font-bold">4.98</span>
              </div>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span className="text-sm font-medium">2,480 Trips</span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col ">
        <InfoCard />
        <InfoCard />
        <div className="m-3 bg-gray-100 p-4 shadow-md flex flex-col gap-2">
          <h1 className="text-xl font-bold text-slate-600">Documents</h1>
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-300 rounded-md text-gray-700 flex flex-row justify-between"
            >
              <div className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined">id_card</span>
                <h1 className="text-md font-bold ">Id Proof</h1>
              </div>
              <span className="material-symbols-outlined text-green-600">
                check_circle
              </span>
            </div>
          ))}
        </div>
        <Button className="m-3 text-xl p-5">Log out</Button>
      </div>
    </>
  );
};
export default Account;
