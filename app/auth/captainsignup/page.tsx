"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import BasicDetails from "@/components/captainSignup/basicDetails";
import BackgroundCheck from "@/components/captainSignup/backgroundCheck";
import VehicleInspection from "@/components/captainSignup/vehicleInspection";
const CaptainSignUp = () => {
  const [step, setStep] = useState(3);
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <p className="text-md font-semibold text-slate-400">
          Registration Progress
        </p>
        <p className="text-md font-semibold text-primary">Step {step} of 3</p>
      </div>
      <Progress value={(step - 1) * 33} className="bg-primary/20" />
      {step === 1 && <BasicDetails />}
      {step === 2 && <BackgroundCheck />}
      {step === 3 && <VehicleInspection />}
    </>
  );
};

export default CaptainSignUp;
