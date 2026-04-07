import { Input } from "../ui/input";
import PhoneInput from "react-phone-input-2";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-phone-input-2/lib/style.css";
import { BasicItems } from "@/app/auth/captainsignup/page";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
type fileInputItems = {
  license: File | undefined;
  insurance: File | undefined;
};
const BasicDetails = ({
  onSubmit,
}: {
  onSubmit: (items: BasicItems) => void;
}) => {
  const [basicItems, setBasicItems] = useState<BasicItems>({
    name: "",
    phone: "",
    make: "",
    model: "",
    vechicleNumber: "",
    drivingLicene: undefined,
    VehicleInsurance: undefined,
  });
  const licenseRef = useRef<HTMLInputElement | null>(null);
  const insuranceRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<fileInputItems>({
    license: undefined,
    insurance: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmitForm = async () => {
    setLoading(true);
    const hasError =
      !basicItems?.name.trim() ||
      !basicItems?.phone.trim() ||
      !basicItems?.make.trim() ||
      !basicItems?.model.trim() ||
      !basicItems?.vechicleNumber.trim() ||
      !file?.license ||
      !file?.insurance;
    setError(hasError);
    if (hasError) {
      setLoading(false);
      return;
    }

    onSubmit(basicItems);
    try {
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const UploadItems = [
    {
      id: "driver",
      name: "Driver's License",
      desc: file?.license?.name || "Front and back required",
      ref: licenseRef,
      iconleft: "id_card",
      iconright: "add_a_photo",
      onClick: () => {
        licenseRef?.current?.click();
      },
      onSubmit: (e: any) => {
        const file = e.target?.files?.[0];
        if (!file) return;
        setFile((prev) => ({ ...prev, license: file }));
        setBasicItems((prev) => ({ ...prev, drivingLicene: file }));
      },
      onClear: () => {
        if (licenseRef?.current) licenseRef.current.value = "";
        setFile((prev) => ({ ...prev, license: undefined }));
      },
    },
    {
      id: "insurance",
      name: "Vehicle Insurance",
      ref: insuranceRef,
      desc: file?.insurance?.name || "Must be currently valid",
      iconleft: "docs",
      iconright: "upload",
      onClick: () => {
        insuranceRef?.current?.click();
      },
      onSubmit: (e: any) => {
        const file = e.target?.files?.[0];
        if (!file) return;
        setFile((prev) => ({ ...prev, insurance: file }));
        setBasicItems((prev) => ({ ...prev, VehicleInsurance: file }));
      },
      onClear: () => {
        if (insuranceRef?.current) insuranceRef.current.value = "";
        setFile((prev) => ({ ...prev, insurance: undefined }));
      },
    },
  ];

  const makeItems = [
    "Bike",
    "Auto",
    "UberXL",
    "UberXXL",
    "LuxuryXL",
    "LuxuryXXL",
  ];

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-2xl font-bold">Let&apos;s get you on the road</p>
        <p className="text-xs ">
          Start your journey today and earn more with our professional fleet
          network.
        </p>
      </div>
      <p className="text-md text-primary font-bold">Personal Information</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Full Name</h1>

          <Input
            type="text"
            placeholder="Enter your full Name"
            className="p-5 rounded-md border-gray-300 text-sm"
            value={basicItems?.name}
            onChange={(e) =>
              setBasicItems((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {error && !basicItems?.name && (
            <p className="text-red-500 text-xs">*required</p>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xs">Phone Number</h1>
          <PhoneInput
            country="in"
            value={basicItems?.phone}
            onChange={(phone) => {
              setBasicItems((prev) => ({ ...prev, phone: phone }));
            }}
            containerClass="w-full"
            inputClass="!w-full !h-10.5 !pl-14 !pr-3 !text-sm !rounded-md !border !border-gray-300 focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
            buttonClass="!border !border-gray-300 !rounded-l-md"
            dropdownClass="!rounded-md"
          />
          {error && !basicItems?.phone && (
            <p className="text-red-500 text-xs">*required</p>
          )}
        </div>
      </div>
      <p className="text-md text-primary font-bold">Vehicle Details</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-xs">Make</p>
              <span className="text-xs text-red-500 underline ">
                Know more*
              </span>
            </div>
            <Select
              value={basicItems.make}
              onValueChange={(value) =>
                setBasicItems((prev) => ({ ...prev, make: value }))
              }
            >
              <SelectTrigger className="w-full h-10.5 border border-gray-300 rounded-md p-4 text-sm">
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {makeItems?.map((item) => (
                    <SelectItem value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {error && !basicItems?.make && (
              <p className="text-red-500 text-xs">*required</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Model</p>
            <Input
              type="text"
              placeholder="Enter your Model no."
              className="p-4 rounded-sm border-gray-300 text-sm"
              value={basicItems?.model}
              onChange={(e) =>
                setBasicItems((prev) => ({ ...prev, model: e.target.value }))
              }
            />
            {error && !basicItems?.model && (
              <p className="text-red-500 text-xs">*required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">License Plate Number</p>
          <Input
            type="text"
            placeholder="Enter your Vehicle Number"
            className="p-5 rounded-md border-gray-300 text-sm rounded-sm text-sm"
            value={basicItems?.vechicleNumber}
            onChange={(e) =>
              setBasicItems((prev) => ({
                ...prev,
                vechicleNumber: e.target.value,
              }))
            }
          />
          {error && !basicItems?.vechicleNumber && (
            <p className="text-red-500 text-xs">*required</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-md text-primary font-bold">Documents</p>
        <p className="text-xs text-slate-500">
          Please upload clear photos of your official documents.
        </p>
      </div>
      {UploadItems.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-0.5"
          onClick={() => item?.onClick()}
        >
          <div className="border-2 border-dashed border-slate-400 px-2  py-3 rounded-sm flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="p-1.5 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  {item?.iconleft}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">{item?.name}</p>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-xs text-slate-400 truncate max-w-30">
                    {item?.desc}
                  </p>
                  {(item?.id === "driver"
                    ? file?.license
                    : file?.insurance) && (
                    <span
                      className="material-symbols-outlined bg-slate-400 text-white  rounded-full  "
                      style={{ fontSize: "14px" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        item?.onClear();
                      }}
                    >
                      close
                    </span>
                  )}
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">
              {item?.iconright}
            </span>

            <input
              disabled={
                item.id === "driver" ? !!file.license : !!file.insurance
              }
              ref={item?.ref}
              type={"file"}
              accept="image/*"
              className="hidden"
              onChange={(e) => item?.onSubmit(e)}
            />
          </div>
          {error &&
            !(item?.id === "driver" ? file?.license : file?.insurance) && (
              <p className="text-xs text-red-500">required*</p>
            )}
        </div>
      ))}
      <Button
        className="p-6 flex flex-row gap-2"
        onClick={handleSubmitForm}
        disabled={loading}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-row gap-1 items-center">
            <p>Continue to Background Check</p>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </div>
        )}
      </Button>
      <p className="text-xs text-slate-500 text-center">
        By continuing, you agree to our Terms of Service and Privacy Policy for
        Captains.
      </p>
    </div>
  );
};
export default BasicDetails;
