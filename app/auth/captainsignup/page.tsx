"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import BasicDetails from "@/components/captainSignup/basicDetails";
import BackgroundCheck from "@/components/captainSignup/backgroundCheck";
import VehicleInspection from "@/components/captainSignup/vehicleInspection";
import { useUploadThing } from "@/common/utils";
import authServices from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export interface BasicItems {
  name: string;
  phone: string;
  make: string;
  model: string;
  vechicleNumber: string;
  drivingLicene: File | undefined;
  VehicleInsurance: File | undefined;
  desc: string;
}
export interface BackgroundCheckItems {
  panNumber: string;
  AdharNumber: string;
  photo: File | undefined;
}
export interface GoalItem {
  earningGoal: number;
}

type signupItems = BasicItems & BackgroundCheckItems & GoalItem;
const CaptainSignUp = () => {
  const { startUpload } = useUploadThing("imageUploader");
  const router = useRouter();
  const [signup, setSignup] = useState<signupItems>({
    name: "",
    phone: "",
    make: "",
    model: "",
    vechicleNumber: "",
    drivingLicene: undefined,
    VehicleInsurance: undefined,
    panNumber: "",
    AdharNumber: "",
    photo: undefined,
    earningGoal: 0,
    desc: "",
  });
  const [step, setStep] = useState(1);
  const handleSubmit = async (goal: number) => {
    try {
      //upload image to bucket
      if (signup?.drivingLicene && signup?.VehicleInsurance && signup?.photo) {
        const license = await startUpload([signup?.drivingLicene]);
        const insurance = await startUpload([signup?.VehicleInsurance]);
        const photo = await startUpload([signup?.photo]);

        const payload = {
          name: signup?.name,
          phone: signup?.phone,
          make: signup?.make,
          model: signup?.model,
          vehicleNumber: signup?.vechicleNumber,
          drivingLicene: {
            key: license?.[0]?.key ?? "",
            url: license?.[0]?.url ?? "",
          },
          VehicleInsurance: {
            key: insurance?.[0]?.key ?? "",
            url: insurance?.[0]?.url ?? "",
          },
          panNumber: signup?.panNumber,
          AdharNumber: signup?.AdharNumber,
          photo: {
            key: photo?.[0]?.key ?? "",
            url: photo?.[0]?.url ?? "",
          },
          earningGoal: goal,
          desc: signup?.desc,
        };
        const res = await authServices?.CaptainSignup(payload);
        if (res) {
          toast.success("wait for the support team for approval");
          // router.push("/profile");
        }
      } else {
        throw Error("Sothing went wrong");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <p className="text-md font-semibold text-slate-400">
          Registration Progress
        </p>
        <p className="text-md font-semibold text-primary">Step {step} of 3</p>
      </div>
      <Progress value={(step - 1) * 33} className="bg-primary/20" />
      {step === 1 && (
        <BasicDetails
          onSubmit={(basicItems) => {
            setSignup((prev) => ({ ...prev, ...basicItems }));
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <BackgroundCheck
          onSubmit={(backgroundCheck) => {
            setSignup((prev) => ({ ...prev, ...backgroundCheck }));
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <VehicleInspection
          onSubmit={async (goal: number) => {
            setSignup((prev) => ({ ...prev, earningGoal: goal }));
            await handleSubmit(goal);
          }}
        />
      )}
    </>
  );
};

export default CaptainSignUp;
