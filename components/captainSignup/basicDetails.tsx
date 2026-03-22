import { Input } from "../ui/input";
import PhoneInput from "react-phone-input-2";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-phone-input-2/lib/style.css";
const BasicDetails = () => {
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
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xs">Phone Number</h1>
          <PhoneInput
            country="in"
            value="9155738514"
            onChange={(phone) => {}}
            containerClass="w-full"
            inputClass="!w-full !h-10.5 !pl-14 !pr-3 !text-sm !rounded-md !border !border-gray-300 focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
            buttonClass="!border !border-gray-300 !rounded-l-md"
            dropdownClass="!rounded-md"
          />
        </div>
      </div>
      <p className="text-md text-primary font-bold">Vehicle Details</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs">Make</p>
            <Select>
              <SelectTrigger className="w-[150px] h-12 border border-gray-300 rounded-sm p-4">
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Model</p>
            <Input
              type="text"
              placeholder="Enter your Model no."
              className="p-4 rounded-md border-gray-300 text-sm rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">License Plate Number</p>
          <Input
            type="text"
            placeholder="Enter your Vehicle Number"
            className="p-5 rounded-md border-gray-300 text-sm rounded-sm text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-md text-primary font-bold">Documents</p>
        <p className="text-xs text-slate-500">
          Please upload clear photos of your official documents.
        </p>
      </div>
      {[1, 2].map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <div className="border-2 border-dashed border-slate-400 p-3 rounded-sm flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="p-1.5 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  id_card
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Driver&apos;s License</p>
                <p className="text-xs text-slate-400">
                  Front and back required
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">
              add_a_photo
            </span>
          </div>
        </div>
      ))}
      <Button className="p-6 flex flex-row gap-2">
        <p>Continue to Background Check</p>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Button>
      <p className="text-xs text-slate-500 text-center">
        By continuing, you agree to our Terms of Service and Privacy Policy for
        Captains.
      </p>
    </div>
  );
};
export default BasicDetails;
