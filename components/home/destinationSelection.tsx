"use client";
import { dummyAddress } from "@/common/constant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DatePicker from "../datepicker";
import { Input } from "../ui/input";
import { Clock2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { DataItems } from "@/common/types/hometypes";
export default function DestinationSelection({
  onChange,
}: {
  onChange: () => void;
}) {
  const [data, setData] = useState<DataItems>({
    datePicker: false,
    selectedDate: new Date(),
    currentAddress: { lat: 28.429767, lng: 77.059526 },
    selectedAddress: { lat: 0, lng: 0 },
    address: "",
    step: 1,
  });

  const handleSubmit = (payload: {
    current: Date | undefined;
    selected: Date | undefined;
  }) => {
    setData((prev) => ({ ...prev, selectedDate: payload?.selected }));
  };
  const isToday =
    data?.selectedDate?.toDateString() === new Date().toDateString();
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 z-50 p-3">
        <div className="bg-white rounded-sm shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 max-w-md mx-auto">
          <div className="flex justify-between items-center p-2 bg-slate-100 rounded-md">
            <div className="flex flex-row gap-2 items-center w-full">
              <span className="material-symbols-outlined text-slate-500">
                search
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Input
                    type="text"
                    placeholder={
                      data?.address !== "" ? data?.address : "Where to ?"
                    }
                    className="border-none outline-none focus:ring-0! shadow-none text-lg"
                  />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="center"
                  className="w-[80vw] max-w-none text-center"
                >
                  <DropdownMenuGroup>
                    {dummyAddress.map((item) => (
                      <DropdownMenuItem
                        key={item?.id}
                        onClick={() => {
                          setData((prev) => ({
                            ...prev,
                            selectedAddress: item?.value,
                            address: item?.name,
                          }));
                          onChange();
                        }}
                      >
                        {item?.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-row gap-0.5 items-center shrink-0">
              <Clock2Icon className="w-4 h-4" />
              <Button
                className="flex gap-1"
                variant="ghost"
                onClick={() =>
                  setData((prev: any) => ({
                    ...prev,
                    datePicker: !prev?.datePicker,
                  }))
                }
              >
                <p className="text-sm">
                  {isToday ? "Now" : data?.selectedDate?.toDateString()}
                </p>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </Button>
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
      <DatePicker
        open={data?.datePicker}
        onClose={() =>
          setData((prev) => ({
            ...prev,
            datePicker: false,
          }))
        }
        onSubmit={handleSubmit}
      />
    </>
  );
}
