"use client";
import { AdvancedMarker, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect, useMemo } from "react";

const Direction = () => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");

  const directionsService = useMemo(() => {
    if (!routesLibrary) return null;
    return new routesLibrary.DirectionsService();
  }, [routesLibrary]);

  const directionsRenderer = useMemo(() => {
    if (!routesLibrary || !map) return null;
    return new routesLibrary.DirectionsRenderer({
      map,
      suppressMarkers: true, // hide default A/B pins — we render our own
      polylineOptions: {
        strokeColor: "#000000", // Uber-style thick black line
        strokeWeight: 5,
        strokeOpacity: 0.85,
      },
    });
  }, [routesLibrary, map]);

  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);

  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: "Cyber City, Gurugram, Haryana",
        destination: "Huda City Centre Metro Station, Gurugram, Haryana",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
        if (map && response.routes[0]?.bounds) {
          map.fitBounds(response.routes[0].bounds, 80);
        }
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <>
      {/* Custom origin dot (circle) */}
      <AdvancedMarker position={leg.start_location}>
        <div className="w-4 h-4 rounded-full bg-black border-2 border-white shadow-md" />
      </AdvancedMarker>

      {/* Custom destination square */}
      <AdvancedMarker position={leg.end_location}>
        <div className="w-4 h-4 rounded-sm bg-black border-2 border-white shadow-md" />
      </AdvancedMarker>

      {/* Route info card — floats above the bottom search panel */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-md">
        <div className="bg-white rounded-xl shadow-xl p-4">
          {/* Summary + distance/ETA */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Route</p>
              <p className="text-sm font-semibold text-slate-800">{selected.summary}</p>
            </div>
            <div className="flex gap-4 text-right">
              <div>
                <p className="text-xs text-slate-400">Distance</p>
                <p className="text-sm font-bold">{leg.distance?.text}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">ETA</p>
                <p className="text-sm font-bold">{leg.duration?.text}</p>
              </div>
            </div>
          </div>

          {/* From → To */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="w-2 h-2 rounded-full bg-black shrink-0" />
            <p className="truncate">{leg.start_address.split(",")[0]}</p>
            <span className="text-slate-300 shrink-0">→</span>
            <p className="truncate">{leg.end_address.split(",")[0]}</p>
            <span className="w-2 h-2 rounded-sm bg-black shrink-0" />
          </div>

          {/* Alternative routes as pill buttons */}
          {routes.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {routes.map((route, index) => (
                <button
                  key={index}
                  onClick={() => setRouteIndex(index)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    index === routeIndex
                      ? "bg-black text-white border-black"
                      : "bg-white text-slate-600 border-slate-300 hover:border-black"
                  }`}
                >
                  via {route.summary} · {route.legs[0].duration?.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Direction;
