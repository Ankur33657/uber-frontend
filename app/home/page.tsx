"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Direction from "@/components/direction";
import { HomePageItems } from "@/common/types/hometypes";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
const DestinationSelection = lazy(
  () => import("@/components/home/destinationSelection"),
);
const RideSelection = lazy(() => import("@/components/home/rideSelection"));

export default function Home() {
  const position = { lat: 28.4595, lng: 77.0266 };
  const [destination, setDestination] = useState<{
    placeId: string;
    description: string;
  } | null>(null);

  const handlePlaceSelect = (place: {
    placeId: string;
    description: string;
  }) => {
    setDestination(place);
    console.log("Selected Place ID: ", place.placeId);
  };

  const [homePageData, setHomePageData] = useState<HomePageItems>({
    source: { address: "", lat: 0, lng: 0 },
    destination: { address: "", lat: 0, lng: 0 },
    journeyTime: new Date(),
    currentTime: new Date(),
    ride: { name: "", cost: "" },
    step: 1,
  });

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ""}>
        <div className="h-[calc(100vh-64px)] relative">
          {/* <Map
          defaultZoom={10}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={false}
          className="w-full h-full"
        >
          <Direction />
        </Map> */}
          {homePageData?.step === 1 && (
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full max-w-md flex flex-col gap-7 bg-slate-200 p-4 rounded-md shadow">
                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              }
            >
              <DestinationSelection
                onPayloadAction={(item: HomePageItems) =>
                  setHomePageData((prev) => ({
                    ...prev,
                    source: item?.source,
                    destination: item?.destination,
                    journeyTime: item?.journeyTime,
                    currentTime: item?.currentTime,
                    step: 2,
                  }))
                }
              />
            </Suspense>
          )}

          {homePageData?.step === 2 && (
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full max-w-md flex flex-col gap-7 bg-gray-200 p-4 rounded-md shadow">
                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-6 w-40" />
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                    </div>

                    <Skeleton className="h-12 w-full rounded-2xl" />
                  </div>
                </div>
              }
            >
              <RideSelection
                onPayloadAction={(item) =>
                  setHomePageData((prev) => ({
                    ...prev,
                    step: 3,
                    ride: item?.ride,
                  }))
                }
              />
            </Suspense>
          )}
          {homePageData?.step === 3 && (
            <div className="absolute bottom-0 left-0 right-0 z-50 bg-white ">
              <div className="flex flex-col gap-3 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                <h1 className="text-xl font-bold text-center">
                  Requesting your Ride...
                </h1>
                <h3 className="text-xs text-slate-600 text-center">
                  Connecting to your nearest Captain.
                </h3>
                <Progress value={20} />
                <div
                  className="w-full bg-gray-50 rounded-2xl p-4 mb-8"
                  data-purpose="location-details"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex flex-col items-center mr-3 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                      <div className="w-0.5 h-8 bg-gray-300 my-1"></div>
                      <div className="w-2.5 h-2.5 bg-black"></div>
                    </div>
                    <div className="grow">
                      <div className="mb-4">
                        <p className="text-xs text-gray-400  tracking-wider font-bold ">
                          Pickup
                        </p>
                        <p className="text-gray-800 font-medium wrap-break-word">
                          {homePageData?.source?.address}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 tracking-wider font-bold">
                          Drop-off
                        </p>
                        <p className="text-gray-800 font-medium wrap-break-word">
                          {homePageData?.destination?.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="bg-gray-100 p-6 text-black text-lg"
                  onClick={() =>
                    setHomePageData({
                      source: { address: "", lat: 0, lng: 0 },
                      destination: { address: "", lat: 0, lng: 0 },
                      journeyTime: new Date(),
                      currentTime: new Date(),
                      ride: { name: "", cost: "" },
                      step: 1,
                    })
                  }
                >
                  Cancle Ride
                </Button>
              </div>
            </div>
          )}
        </div>
      </APIProvider>
    </>
  );
}
