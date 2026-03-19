"use client";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
interface checkListItems {
  id: number;
  heading: string;
  subHeading: string;
}
const VehicleInspection = () => {
  const checkListItems: checkListItems[] = [
    {
      id: 1,
      heading: "Exterior Lights",
      subHeading: " Headlights,brake lights and indicators",
    },
    {
      id: 2,
      heading: "Tires &amp; Wheels",
      subHeading: "Tread depth and proper inflation",
    },
    {
      id: 3,
      heading: "Braking System",
      subHeading: "Responsive brakes and functional handbrake",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-slate-500">
        Check your vehicle and set your goals to get started.
      </p>
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTNqT0OUGlAyWBuabDCWGqlW8nyxUui54iMOKGyStauyA7AaJb42I3mnIOnOjnWi7fLsLKGhZod2DeMAuq9gBV9WMCidapaWM6wND-Q7xIHWK09XW4FmRV3AQ37-L91lEBYA8Ii86flBkEIg4geMRg4oyO2SFVrjcMMCdfspN2zbiRfZ-gUF_ZKzcu5kRpIBiU2qUqL9_lyF5WZcmvKsUaAHPiXfz7ydM1hwEeRT6b25t9HFcZTT9P61cSTN0Kz-_-s1PoBwGnNfI"
        alt="image"
        width={50}
        height={50}
        className="w-full h-40 object-cover rounded"
        unoptimized
      />
      <div className="flex flex-row gap-2 items-center">
        <span className="material-symbols-outlined text-primary">rule</span>
        <h1 className="text-xl font-bold">Self-Inspection Checklist</h1>
      </div>
      {checkListItems.map((item) => (
        <div
          key={item?.id}
          className="bg-white p-3 rounded-sm flex flex-row gap-4 items-center"
        >
          <Checkbox className="bg-white border border-primary w-5 h-5" />
          <div className="flex flex-col">
            <p className="text-sm font-bold">{item?.heading}</p>
            <p className="text-xs text-slate-500 ">{item?.subHeading}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-row gap-2 items-center">
        <span className="material-symbols-outlined text-primary">payments</span>
        <h1 className="text-xl font-bold">Weekly Earning Goal</h1>
      </div>
      <div className="flex flex-col gap-3 p-4 border border-solid border-primary/20 bg-primary/10 rounded-md">
        <p className="text-xs text-slate-600 text-center">
          Setting a goal helps you stay motivated and track your progress.
        </p>
        <div className="flex flex-row  border-2 border-solid border-primary/30 bg-white rounded-md p-3 items-center">
          <span className="material-symbols-outlined">currency_rupee</span>
          <Input
            type="number"
            placeholder="0.00"
            className="border-none outline-none focus:!ring-0 shadow-none text-center text-lg"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="border border-primary/20 bg-white px-4 py-1 rounded-md">
            IN-5000
          </p>
          <p className="border border-primary/20 bg-white px-4 py-1 rounded-md">
            IN-10000
          </p>
          <p className="border border-primary/20 bg-white px-4 py-1 rounded-md">
            IN-15000
          </p>
        </div>
      </div>
      <Button className="p-6 flex flex-row gap-2 items-center">
        <p className="text-md"> Submit for Review</p>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Button>
      <p className="text-xs text-slate-400 text-center">
        {" "}
        By submitting, you agree to our safety standards
      </p>
    </div>
  );
};
export default VehicleInspection;
