"use client";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
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
    return new routesLibrary.DirectionsRenderer({ map });
  }, [routesLibrary, map]);

  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);

  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: "100 Front St, Toronto ON",
        destination: "500 College St, Toronto ON",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;
  return (
    <div className="p-4 bg-white shadow-md rounded-md space-y-3">
      <h2 className="text-lg font-semibold">{selected.summary}</h2>

      <p className="text-sm text-gray-600">
        {leg.start_address.split(",")[0]} → {leg.end_address.split(",")[0]}
      </p>

      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <div className="flex flex-col gap-2 mt-3">
        {routes.map((route, index) => (
          <button
            key={index}
            onClick={() => setRouteIndex(index)}
            className={`p-2 rounded border text-left ${
              index === routeIndex ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            <p className="text-sm font-medium">{route.summary}</p>
            <p className="text-xs">
              {route.legs[0].distance?.text} • {route.legs[0].duration?.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Direction;
