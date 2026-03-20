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
                  className="p-5  text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex flex-row gap-1 items-center">
                <span className="material-symbols-outlined text-slate-500">
                  nest_clock_farsight_analog
                </span>
                <p className="text-md font-semibold text-slate-500">Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}
