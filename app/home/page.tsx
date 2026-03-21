"use client";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import Direction from "@/components/direction";
import { Input } from "@/components/ui/input";
export default function Home() {
  const position = { lat: 28.4595, lng: 77.0266 };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ""}>
      <div className="h-[calc(100vh-64px)] relative">
        {/*<Map
          zoom={10}
          center={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={false}
          className="w-full h-full"
        >
          <Direction />
          <AdvancedMarker position={position} />
        </Map>*/}

        {/* Bottom Panel */}
        <div className="absolute bottom-0 left-0 right-0 z-[999] p-3">
          <div className="bg-white rounded-sm shadow-lg p-3 max-w-md mx-auto">
            <div className="flex justify-between items-center p-2 bg-slate-100 rounded-md">
              <div className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-slate-500">
                  search
                </span>
                <Input
                  type="text"
                  placeholder="Where to ?"
                  className="p-5 text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex flex-row gap-1 items-center">
                <span className="material-symbols-outlined text-slate-400">
                  history_2
                </span>
                <p className="text-md font-semibold text-slate-500">Now</p>
              </div>
            </div>
          </div>

          <div className="p-3 mt-3 bg-white rounded-sm flex flex-col gap-2 divide-y shadow-lg">
            <div className="flex flex-row gap-2 p-2">
              <div className="p-2 w-fit rounded-full bg-blue-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">
                  home
                </span>
              </div>
              <div className="flex flex-col text-start">
                <p className="text-sm font-bold">Home</p>
                <p className="text-xs text-slate-400">Add Home address</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <div className="p-2 w-fit rounded-full bg-blue-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">
                  work
                </span>
              </div>
              <div className="flex flex-col text-start">
                <p className="text-sm font-bold">Work</p>
                <p className="text-xs text-slate-400">Add Work address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}
