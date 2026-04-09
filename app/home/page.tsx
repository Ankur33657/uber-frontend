"use client";

import { useEffect, useState, Suspense, lazy } from "react";
import { toast } from "sonner";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { HomePageItems } from "@/common/types/hometypes";
import UserService from "@/services/user.services";
import { VehicalItems } from "@/components/home/rideSelection";
const DestinationSelection = lazy(
  () => import("@/components/home/destinationSelection"),
);
const RideSelection = lazy(() => import("@/components/home/rideSelection"));
import "leaflet/dist/leaflet.css";
export default function Home() {
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [vehicle, setVehicle] = useState<VehicalItems[]>([]);
  const [map, setMap] = useState<any>(null);
  const [homePageData, setHomePageData] = useState<HomePageItems>({
    source: { address: "", lat: 0, lng: 0 },
    destination: { address: "", lat: 0, lng: 0 },
    journeyTime: new Date(),
    currentTime: new Date(),
    ride: { name: "", cost: "" },
    step: 1,
  });

  console.log(homePageData, "Home");

  useEffect(() => {
    let leafletMap: any;

    const initMap = async () => {
      const L = (await import("leaflet")).default;

      leafletMap = L.map("map").setView([28.7041, 77.1025], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(leafletMap);

      setMap(leafletMap);
    };

    initMap();

    return () => {
      leafletMap?.remove();
    };
  }, []);

  // Draw/redraw routes whenever map, routes, or selected index changes
  useEffect(() => {
    if (!map || routes.length === 0) return;

    const drawRoutes = async () => {
      const L = (await import("leaflet")).default;

      // Remove only polylines and markers, keep tile layer
      map.eachLayer((layer: any) => {
        if (
          layer instanceof L.Polyline ||
          layer instanceof L.Marker ||
          layer instanceof L.CircleMarker
        ) {
          map.removeLayer(layer);
        }
      });

      // Draw all routes — selected in blue, others in gray
      routes.forEach((route, index) => {
        const isSelected = index === selectedRouteIndex;

        const coordinates = route.geometry.coordinates.map(
          (coord: [number, number]) => [coord[1], coord[0]], // [lng, lat] → [lat, lng]
        );

        const polyline = L.polyline(coordinates, {
          color: isSelected ? "#3b82f6" : "#94a3b8",
          weight: isSelected ? 6 : 4,
          opacity: isSelected ? 1 : 0.4,
        }).addTo(map);

        if (isSelected) {
          polyline.bringToFront();
          map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
        }
      });

      // Add start/end circle markers
      if (routes[0]?.waypoints) {
        const waypoints = [
          {
            lat: homePageData.source.lat,
            lng: homePageData.source.lng,
            label: "Start",
            color: "#10b981",
          },
          {
            lat: homePageData.destination.lat,
            lng: homePageData.destination.lng,
            label: "End",
            color: "#ef4444",
          },
        ];

        waypoints.forEach((wp) => {
          L.circleMarker([wp.lat, wp.lng], {
            radius: 8,
            fillColor: wp.color,
            color: "white",
            weight: 2,
            fillOpacity: 1,
          })
            .addTo(map)
            .bindPopup(wp.label);
        });
      }
    };

    drawRoutes();
  }, [
    map,
    routes,
    selectedRouteIndex,
    homePageData.source,
    homePageData.destination,
  ]);

  const findingRoutes = async (src: string, des: string) => {
    try {
      const coordinate = `${src};${des}`;
      const res = await UserService?.findingRoutes(coordinate);
      const routeArray = res?.data?.routes;
      setRoutes(routeArray);
      setSelectedRouteIndex(0);
    } catch (error: any) {
      console.error(error?.message);
      toast.error("Error in fetching routes");
    }
  };

  const resetRide = () => {
    setRoutes([]);
    setSelectedRouteIndex(0);
    setHomePageData({
      source: { address: "", lat: 0, lng: 0 },
      destination: { address: "", lat: 0, lng: 0 },
      journeyTime: new Date(),
      currentTime: new Date(),
      ride: { name: "", cost: "" },
      step: 1,
    });
  };

  const SearchAvailableDrive = async () => {
    try {
      const payload = {
        source: homePageData?.source,
        destination: homePageData?.destination,
        selectedRoute: routes[selectedRouteIndex],
        journeyTime: homePageData?.journeyTime,
      };
      const res = await UserService?.calculatingPriceForDrive(payload);
      if (res) setVehicle(res?.data);
    } catch (error: any) {
      console.log(error?.message);
      toast.error("Something went Wrong");
    } finally {
      setHomePageData((prev) => ({ ...prev, step: 3 }));
    }
  };
  const panelSkeleton = (rows: number) => (
    <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
      <div className="w-full max-w-md flex flex-col gap-4 bg-slate-200 p-4 rounded-md shadow">
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    </div>
  );

  const findingCaptain = async () => {
    try {
      const res = await UserService?.findingCaptain();
      if (!res?.data) {
        toast.warning(res?.message);
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error);
      resetRide();
    }
  };
  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      <div id="map" className="w-full h-full z-0" />

      {routes.length > 0 && homePageData?.step === 2 && (
        <div className="absolute bottom-0 right-0 left-0 z-[1000] bg-white/90 backdrop-blur-md p-2 rounded-t-xl shadow-2xl border border-gray-100 w-full animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
              Suggested Routes
            </h3>
            <span className="text-[12px] uppercase tracking-wider font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              {routes.length} found
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {routes.map((route, index) => (
              <button
                key={index}
                onClick={() => setSelectedRouteIndex(index)}
                className={`group relative text-left p-2 rounded-xl transition-all border-2 overflow-hidden ${
                  selectedRouteIndex === index
                    ? "bg-blue-50 border-blue-500 shadow-md ring-4 ring-blue-500/10"
                    : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                {selectedRouteIndex === index && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/5 rotate-45 translate-x-6 -translate-y-6" />
                )}

                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-tight ${
                      selectedRouteIndex === index
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    Route {index + 1}
                  </span>
                  {index === 0 && (
                    <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                      FASTEST
                    </span>
                  )}
                </div>

                <div className="flex items-end gap-3 mt-1">
                  <div
                    className={`text-lg font-black ${
                      selectedRouteIndex === index
                        ? "text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    {Math.round(route.duration / 60)}{" "}
                    <span className="text-xs font-medium opacity-70">min</span>
                  </div>
                  <div className="text-xs font-medium text-gray-400 pb-1">
                    / {(route.distance / 1000).toFixed(2)} km
                  </div>
                </div>
              </button>
            ))}
          </div>
          <Button
            className="w-full mt-2 p-5"
            onClick={() => {
              SearchAvailableDrive();
            }}
          >
            Submit Route
          </Button>
        </div>
      )}

      {homePageData.step === 1 && (
        <Suspense fallback={panelSkeleton(3)}>
          <DestinationSelection
            onPayloadAction={(item: HomePageItems) => {
              setHomePageData((prev) => ({
                ...prev,
                source: item.source,
                destination: item.destination,
                journeyTime: item.journeyTime,
                currentTime: item.currentTime,
                step: 2,
              }));
              const src = `${item.source.lng},${item.source.lat}`;
              const des = `${item.destination.lng},${item.destination.lat}`;
              findingRoutes(src, des);
            }}
          />
        </Suspense>
      )}

      {homePageData.step === 3 && (
        <Suspense fallback={panelSkeleton(4)}>
          <RideSelection
            data={vehicle}
            onPayloadAction={(item) => {
              setHomePageData((prev) => ({
                ...prev,
                step: 4,
                ride: item.ride,
              }));
              findingCaptain();
            }}
          />
        </Suspense>
      )}

      {homePageData.step === 4 && (
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-white">
          <div className="flex flex-col gap-3 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <h1 className="text-xl font-bold text-center">
              Requesting your Ride...
            </h1>
            <h3 className="text-xs text-slate-600 text-center">
              Connecting to your nearest Captain.
            </h3>
            <div className="loader" />

            <div className="w-full bg-gray-50 rounded-2xl p-4 mb-8">
              <div className="flex items-start mb-4">
                <div className="flex flex-col items-center mr-3 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <div className="w-0.5 h-8 bg-gray-300 my-1" />
                  <div className="w-2.5 h-2.5 bg-black" />
                </div>
                <div className="grow">
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 tracking-wider font-bold">
                      Pickup
                    </p>
                    <p className="text-gray-800 font-medium break-words">
                      {homePageData.source.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 tracking-wider font-bold">
                      Drop-off
                    </p>
                    <p className="text-gray-800 font-medium break-words">
                      {homePageData.destination.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="bg-gray-100 p-6 text-black text-lg"
              onClick={resetRide}
            >
              Cancel Ride
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
