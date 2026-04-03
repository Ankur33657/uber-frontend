import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
const BackgroundCheck = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-slate-600">
        Your safety and the safety of our passengers is our top priority. Please
        verify your identity.
      </p>
      <div className="flex flex-col gap-1">
        <h1 className="text-xs">Pan Number</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your Pan-Number"
            className="p-5 pr-12 rounded-md border-gray-300 text-sm"
          />

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            visibility
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xs">Adhar Number</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your Adhar-Number"
            className="p-5 pr-12 rounded-md border-gray-300 text-sm"
          />

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            visibility
          </span>
        </div>
        <h1 className="text-xs text-slate-400">
          Used only for background check purpose
        </h1>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xs">Identity Verification Photo</h1>
        <div className="border-2 border-dashed border-slate-400  rounded-sm px-4 py-6 flex flex-col items-center gap-2 ">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              add_a_photo
            </span>
          </div>
          <h1 className="text-sm font-bold">Upload a clear selfie</h1>
          <p className="text-xs text-slate-400">
            Ensure your face is clearly visible without sunglasses or hats.
          </p>
          <Button className="p-5 text-sm">Select Photo</Button>
        </div>
      </div>

      <div className="border border-primary border-solid bg-primary/5 rounded-sm p-3 flex flex-row gap-2">
        <Checkbox className="bg-white border border-slate-400 mt-2" />
        <div className="flex flex-col">
          <p className="text-md font-semibold">Authorize Background Check</p>
          <p className="text-sm text-slate-500">
            I authorize the platform to conduct a comprehensive background check
            including criminal history and motor vehicle records. I understand
            this is required for captain status.
          </p>
        </div>
      </div>

      <div className="border border-slate-200 p-2 rounded flex flex-row gap-2 items-center">
        <div className="p-2 bg-green-300 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">shield_lock</span>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-bold">Secure Processing</p>
          <p className="text-xs text-slate-400">
            Your data is encrypted using 256-bit SSL protocols.
          </p>
        </div>
      </div>
      <Button className="p-6 flex flex-row gap-2">
        <p> Continue to Final Step</p>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Button>
      <p className="text-xs text-slate-500 text-center">
        Need help?Contact Support
      </p>
    </div>
  );
};
export default BackgroundCheck;
