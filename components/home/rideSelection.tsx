import { Button } from "../ui/button";
import { useState } from "react";
import { IndianRupee } from "lucide-react";
import { VehicleImageMap } from "@/common/constant";
import Image from "next/image";
export interface VehicalItems {
  key: string;
  type: string;
  arrivalTime: string;
  price: number;
  capacity: number;
}
export default function RideSelection({
  data,
  onPayloadAction,
}: {
  data: VehicalItems[];
  onPayloadAction: (item: any) => void;
}) {
  const [ride, setRide] = useState({
    selected: 1,
    ride: { key: "", cost: 0 },
  });
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 max-h-80 overflow-y-auto">
      <div className="flex flex-col gap-2 bg-white p-4 border-t-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-2xl">
        <p className="text-xl font-bold">Choose a ride</p>
        {data?.map((item, idx) => (
          <div
            key={idx}
            onClick={() =>
              setRide((prev) => ({
                ...prev,
                selected: idx,
                ride: { key: item?.key, cost: item?.price },
              }))
            }
            className={`p-2 border rounded-sm flex justify-between items-center ${
              ride?.selected === idx
                ? "border-black border-2"
                : "border-slate-200"
            }`}
          >
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={
                  VehicleImageMap[item?.key as keyof typeof VehicleImageMap] ||
                  "/bike.jpeg"
                }
                alt="image"
                width={40}
                height={40}
                className="w-10 h-10 object-cover"
              />
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-md font-bold ">{item?.type}</h1>
                  <span className="text-xs text-slate-600">
                    (Capacity: {item?.capacity})
                  </span>
                </div>

                <p className="text-sm text-slate-600">{item?.arrivalTime}</p>
              </div>
            </div>
            <div className="flex flex-row gap-0.5 items-center">
              <IndianRupee className="w-5 h-5" />
              <h1 className="text-md text-bold">{item?.price}</h1>
            </div>
          </div>
        ))}
        <Button className="p-5" onClick={() => onPayloadAction({ ride: ride })}>
          Confirm {data[ride?.selected]?.type}
        </Button>
      </div>
    </div>
  );
}
