"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const CaptainLogin = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-row gap-2 items-center">
          <span className="material-symbols-outlined">arrow_back</span>
          <h1 className="text-xl font-bold">captain Portal</h1>
        </div>
        <h1 className="text-primary">Help</h1>
      </div>
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-primary/10 @[480px]:rounded-xl min-h-[240px] relative"
            data-alt="Professional driver sitting in a modern car cockpit"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB--IhOHUSZvNVi6Md5v8m9q3TDT0dDccoRHHt5MM3HokfYq0vfjc_7Aio_hqn0W2h4fOipt3P6dM_K7K__6zVSDDcvuCR1mIknJ6TszEwVE16yCScunHkDCfqzX1XIlNK33GVTgo5917hBpksmmoBfx5nkRTg5MGfEuTw5R8rNo2uvlxoMXSLrgaRhPKzUxDIzdunorUEKL8P636UqyfJH2sENByLjpxm8OtBzhMiiFq7ivAIpP0Y8ka67awrs9lvSvJtIW4hwXcg")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            <div className="relative p-6">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider bg-primary text-white rounded-full">
                Captain Mode
              </span>
              <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">
                Welcome back, Captain
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-slate-400 flex justify-center">
          Log in to start earning and helping people get where they need to go.
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Email or Phone Number</h1>
          <Input
            type="text"
            placeholder="Email or Phone number"
            className="p-5 rounded-md border-gray-300 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Password</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your password"
              className="p-5 pr-12 rounded-md border-gray-300 text-sm"
            />

            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              visibility
            </span>
          </div>
          <h1 className="flex justify-end text-xs text-amber-500">
            Forgot password ?
          </h1>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Button className="w-full">
          <div className="flex flex-row gap-1 items-center">
            <p className="text-sm">Go Online</p>
            <span className="material-symbols-outlined">login</span>
          </div>
        </Button>
        <p className="flex justify-center text-xs">OR LOGIN WITH</p>
        <div className="flex flex-row justify-between">
          <Button variant="outline" className="w-40">
            Google
          </Button>
          <Button variant="outline" className="w-40">
            Facebook
          </Button>
        </div>
        <p className="text-xs flex justify-center">
          Don&apos;have a Captain Account?
          <Link className="underline text-primary" href="#">
            Apply to Drive{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default CaptainLogin;
