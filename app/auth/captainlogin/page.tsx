"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import authServices from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const CaptainLogin = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    isHidePassword: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const payload = { email: login?.email, password: login?.password };
      const res = await authServices.CaptainLogin(payload);
      if (res) {
        localStorage.setItem("user", JSON.stringify(res?.data));
        router.push("/captain/home");
      }
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-row gap-2 items-center">
          <span
            className="material-symbols-outlined"
            onClick={() => router.back()}
          >
            arrow_back
          </span>
          <h1 className="text-xl font-bold">captain Portal</h1>
        </div>
        <h1
          className="text-primary"
          onClick={() => toast.success("Help support comming soon..")}
        >
          Help
        </h1>
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
        <p className="text-xs text-slate-600 flex justify-center">
          Log in to start earning and helping people get where they need to go.
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Email</h1>
          <Input
            type="text"
            placeholder="Email or Phone number"
            className="p-5 rounded-md border-gray-300 text-sm"
            value={login?.email}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Password</h1>
          <div className="relative">
            <Input
              type={login?.isHidePassword ? "password" : "text"}
              placeholder="Enter your password"
              className="p-5 pr-12 rounded-md border-gray-300 text-sm"
              value={login?.password}
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, password: e.target.value }))
              }
            />

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
              onClick={() =>
                setLogin((prev) => ({
                  ...prev,
                  isHidePassword: !prev?.isHidePassword,
                }))
              }
            >
              {login?.isHidePassword ? "visibility_off" : "visibility"}
            </span>
          </div>
          <h1 className="flex justify-end text-xs text-red-500 font-bold">
            Forgot password ?
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        {error && (
          <p className="text-red-500 text-xs font-bold w-full px-4">{error}</p>
        )}
        <div className=" px-4 flex flex-col gap-2 w-full">
          <Button
            className="w-full p-5"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <Spinner />
            ) : (
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm">Go Online</p>
                <span className="material-symbols-outlined">login</span>
              </div>
            )}
          </Button>
          <p className="text-xs text-red-600">
            Don&apos;t have a Captain account? Sign up as a user and upgrade to
            a captain from the profile tab.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CaptainLogin;
