import { Button } from "../ui/button";
import { useState } from "react";
import { RideVehical } from "@/common/constant";
export default function RideSelection({
  onPayloadAction,
}: {
  onPayloadAction: (item: any) => void;
}) {
  const [ride, setRide] = useState({
    selected: 1,
    ride: { name: "", cost: "" },
  });
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50">
      <div className="flex flex-col gap-2 bg-white p-4 border-t-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-2xl">
        <p className="text-xl font-bold">Choose a ride</p>
        {RideVehical.map((item) => (
          <div
            onClick={() =>
              setRide((prev) => ({
                ...prev,
                selected: item?.id,
                ride: { name: item?.name, cost: item?.cost },
              }))
            }
            key={item?.id}
            className={`p-2 border rounded-sm flex justify-between items-center ${
              ride?.selected === item?.id
                ? "border-black border-2"
                : "border-slate-200"
            }`}
          >
            <div className="flex flex-row gap-2 items-center">
              <div
                className="w-10 h-10"
                style={{ backgroundColor: item?.color }}
              />
              <div className="flex flex-col">
                <h1 className="text-md font-bold">{item?.name}</h1>
                <p className="text-sm text-slate-600">
                  3 min away .{item?.arrivalTime} arrival
                </p>
              </div>
            </div>
            <h1 className="text-md text-bold">$18.67</h1>
          </div>
        ))}
        <Button className="p-5" onClick={() => onPayloadAction({ ride: ride })}>
          Confirm {RideVehical[ride?.selected - 1].name}
        </Button>
      </div>
    </div>
  );
}
