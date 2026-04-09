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
import { Button } from "../ui/button";
import { useState } from "react";
import { HomePageItems } from "@/common/types/hometypes";
export default function DestinationSelection({
  onPayloadAction,
}: {
  onPayloadAction: (item: HomePageItems) => void;
}) {
  const [data, setData] = useState<HomePageItems>({
    datePicker: false,
    journeyTime: new Date(),
    currentTime: new Date(),
    source: {
      address: "unnamed road, Sector 46, Gurgaon - 101301, Haryana, India",
      lat: 28.429767,
      lng: 77.059526,
    },
    destination: { address: "", lat: 0, lng: 0 },
  });

  const handleSubmit = (payload: {
    current: Date | undefined;
    selected: Date | undefined;
  }) => {
    setData((prev) => ({
      ...prev,
      journeyTime: payload?.selected || new Date(),
      currentTime: payload?.current || new Date(),
    }));
  };
  const isToday =
    data?.journeyTime?.toDateString() === new Date().toDateString();
  return (
    <>
      <div className="absolute top-2 left-0 right-0 z-50 p-2">
        <div className="bg-white rounded-sm shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-2 max-w-md mx-auto">
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
                      data?.destination?.address !== ""
                        ? data?.destination?.address
                        : "Where to ?"
                    }
                    className="border-none outline-none focus:ring-0! shadow-none text-lg"
                  />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="center"
                  className="w-auto max-w-none text-center"
                >
                  <DropdownMenuGroup>
                    {dummyAddress.map((item) => (
                      <DropdownMenuItem
                        className="w-full flex justify-center items-center"
                        key={item?.id}
                        onClick={() => {
                          setData((prev) => ({
                            ...prev,
                            destination: item?.selected,
                          }));
                          onPayloadAction({
                            source: data?.source,
                            destination: item?.selected,
                            journeyTime: data?.journeyTime,
                            currentTime: data?.currentTime,
                          });
                        }}
                      >
                        {item?.selected.address}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

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
                {isToday ? "Now" : data?.journeyTime?.toDateString()}
              </p>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </Button>
          </div>
        </div>
        {/*Future Plan to be implemented*/}
        {/*<div className="p-3 mt-3 bg-white rounded-sm flex flex-col gap-2 divide-y shadow-lg">
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
        </div>*/}
      </div>
      <DatePicker
        open={data?.datePicker || false}
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
