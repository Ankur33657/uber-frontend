"use client";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
const MAX_AMOUNT = 30000;
interface checkListItems {
  id: number;
  heading: string;
  subHeading: string;
  onCheck: () => void;
}
interface CheckItems {
  light: boolean;
  tire: boolean;
  brake: boolean;
}
const VehicleInspection = ({
  onSubmit,
}: {
  onSubmit: (goal: number) => Promise<void>;
}) => {
  const [check, setChecked] = useState<CheckItems>({
    light: false,
    tire: false,
    brake: false,
  });
  const [loading, setLoading] = useState(false);
  const [goal, setGoal] = useState<number>(2000);
  const checkListItems: checkListItems[] = [
    {
      id: 1,
      heading: "Exterior Lights",
      subHeading: " Headlights,brake lights and indicators",
      onCheck: () => setChecked((prev) => ({ ...prev, light: !prev?.light })),
    },
    {
      id: 2,
      heading: "Tires & Wheels",
      subHeading: "Tread depth and proper inflation",
      onCheck: () => setChecked((prev) => ({ ...prev, tire: !prev?.tire })),
    },
    {
      id: 3,
      heading: "Braking System",
      subHeading: "Responsive brakes and functional handbrake",
      onCheck: () => setChecked((prev) => ({ ...prev, brake: !prev?.brake })),
    },
  ];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!check?.brake || !check?.light || !check?.tire) {
        toast.error("Check the Vehicle Inspections");
        return;
      }
      if (goal <= 0) {
        toast.error("Set the Goal");
        return;
      }
      await onSubmit(goal);
    } catch (error) {
      console.log(error);
      toast.error("Error in Creating Captain Account");
    } finally {
      setLoading(false);
    }
  };
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
          <Checkbox
            className="bg-white border border-primary w-5 h-5"
            onClick={() => item?.onCheck()}
          />
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
            value={goal}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > MAX_AMOUNT) {
                toast.error("Amount cannot exceed ₹30,000");
                setGoal(MAX_AMOUNT);
              } else {
                setGoal(value);
              }
            }}
          />
        </div>
        <div className="flex flex-row justify-between">
          <Badge onClick={() => setGoal(5000)}>INR-5000</Badge>
          <Badge onClick={() => setGoal(10000)}>INR-10000</Badge>
          <Badge onClick={() => setGoal(15000)}>INR-15000</Badge>
        </div>
      </div>
      <Button
        className="p-6 flex flex-row gap-2 items-center"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <p className="text-md"> Submit for Review</p>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </>
        )}
      </Button>
      <p className="text-xs text-slate-400 text-center">
        {" "}
        By submitting, you agree to our safety standards
      </p>
    </div>
  );
};
export default VehicleInspection;
