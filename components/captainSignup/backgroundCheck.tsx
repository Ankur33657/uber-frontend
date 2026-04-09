import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState, useRef } from "react";
import { BackgroundCheckItems } from "@/app/auth/captainsignup/page";
import { Spinner } from "../ui/spinner";
import { RegixMatcher } from "@/common/constant";
import { toast } from "sonner";
const BackgroundCheck = ({
  onSubmit,
}: {
  onSubmit: (item: BackgroundCheckItems) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [backgroundCheck, setBackGroundCheck] = useState<BackgroundCheckItems>({
    panNumber: "",
    AdharNumber: "",
    photo: undefined,
  });
  const [error, setError] = useState(false);
  const [hide, setHide] = useState({
    panNumber: true,
    AdharNumber: true,
  });
  const [check, setChecked] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const hasError =
        !backgroundCheck?.panNumber ||
        !backgroundCheck?.AdharNumber ||
        !file ||
        !check;

      setError(hasError);
      if (hasError) {
        return;
      }
      if (!RegixMatcher?.ADHAR.test(backgroundCheck?.AdharNumber)) {
        toast.error("Invalid Aadhaar");
        return;
      }

      if (!RegixMatcher?.PAN?.test(backgroundCheck?.panNumber.toUpperCase())) {
        toast.error("Invalid PAN");
        return;
      }
      onSubmit(backgroundCheck);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    inputRef?.current?.click();
  };

  const handleFileChange = (e: any) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    setFile(file);
    setBackGroundCheck((prev) => ({ ...prev, photo: file }));
  };
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
            type={hide?.panNumber ? "password" : "text"}
            placeholder="Enter your Pan-Number"
            className="p-5 pr-12 rounded-md border-gray-300 text-sm"
            value={backgroundCheck?.panNumber}
            onChange={(e) =>
              setBackGroundCheck((prev) => ({
                ...prev,
                panNumber: e.target.value,
              }))
            }
          />

          <span
            className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() =>
              setHide((prev) => ({ ...prev, panNumber: !prev?.panNumber }))
            }
          >
            {hide?.panNumber ? "visibility_off" : "visibility"}
          </span>
        </div>
        {error && !backgroundCheck?.panNumber && (
          <p className="text-xs text-red-500">required*</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xs">Adhar Number</h1>
        <div className="relative">
          <Input
            type={hide?.AdharNumber ? "password" : "text"}
            placeholder="Enter your Adhar-Number"
            className="p-5 pr-12 rounded-md border-gray-300 text-sm"
            value={backgroundCheck?.AdharNumber}
            onChange={(e) =>
              setBackGroundCheck((prev) => ({
                ...prev,
                AdharNumber: e.target.value,
              }))
            }
          />

          <span
            className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() =>
              setHide((prev) => ({ ...prev, AdharNumber: !prev?.AdharNumber }))
            }
          >
            {hide?.AdharNumber ? "visibility_off" : "visibility"}
          </span>
        </div>
        <h1 className="text-xs text-slate-400">
          Used only for background check purpose
        </h1>
        {error && !backgroundCheck?.AdharNumber && (
          <p className="text-xs text-red-500">required*</p>
        )}
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
          {!file ? (
            <Button className="p-5 text-sm" onClick={handleClick}>
              Select Photo
            </Button>
          ) : (
            <div className="flex flex-row gap-1 items-center">
              <h2 className="text-md text-blue-500">{file?.name}</h2>
              <span
                className="material-symbols-outlined bg-slate-400 text-white  rounded-full  "
                style={{ fontSize: "14px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (inputRef?.current) inputRef?.current.value == "";
                  setFile(undefined);
                }}
              >
                close
              </span>
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {error && !file && <p className="text-xs text-red-500">required*</p>}
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="border border-primary border-solid bg-primary/5 rounded-sm p-3 flex flex-row gap-2">
          <Checkbox
            className="bg-white border border-slate-400 mt-2"
            onClick={() => setChecked((prev) => !prev)}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Authorize Background Check</p>
            <p className="text-sm text-slate-500">
              I authorize the platform to conduct a comprehensive background
              check including criminal history and motor vehicle records. I
              understand this is required for captain status.
            </p>
          </div>
        </div>
        {error && !check && <p className="text-xs text-red-500">required*</p>}
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
      <Button
        className="p-6 flex flex-row gap-2"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <p> Continue to Final Step</p>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </>
        )}
      </Button>
      <p className="text-xs text-slate-500 text-center">
        Need help?Contact Support
      </p>
    </div>
  );
};
export default BackgroundCheck;
