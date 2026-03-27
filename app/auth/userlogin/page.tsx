"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { LoginPropsItem, LoginError } from "@/common/types/logintypes";
import authServices from "@/services/auth.services";
import Link from "next/link";
const UserLogin = () => {
  const route = useRouter();
  const [login, setLogin] = useState<LoginPropsItem>({
    email: "",
    password: "",
    isVisible: false,
    loading: false,
  });
  const [error, setError] = useState<LoginError>({
    state: false,
    message: "",
  });
  const userLogin = async () => {
    setLogin((prev) => ({ ...prev, loading: true }));
    setError({ state: false, message: "" });
    const payload = { email: login?.email, password: login?.password };
    try {
      const res = await authServices?.userLogin(payload);
      localStorage.setItem("user", JSON.stringify(res?.data?.data));
      if (res?.data) route.push("/home");
    } catch (err: any) {
      setError({
        state: true,
        message: err || "Something went wrong. Please try again.",
      });
    } finally {
      setLogin((prev) => ({ ...prev, loading: false }));
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Image
          src="/loginBanner.png"
          alt="rider Login"
          width={40}
          height={40}
          className="w-full h-60"
        />

        <span
          onClick={() => route.back()}
          className=" absolute top-2 left-4 bg-black/20 material-symbols-outlined text-white rounded-full p-1"
        >
          arrow_back
        </span>
        <div className="absolute top-30 left-5 flex flex-col text-white">
          <p className="text-xs">RIDER LOGIN</p>
          <p className="text-3xl">Welcome Back</p>
          <p className="text-xs mt-2 ml-1">Ready for your next journey</p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Email or Phone Number</h1>
          <Input
            type="text"
            placeholder="Email or Phone number"
            value={login?.email}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, email: e.target.value }))
            }
            className="p-5 rounded-md border-gray-300 text-sm"
          />
          {error?.state && (
            <p className="text-xs text-red-700 ">{error?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Password</h1>
          <div className="relative">
            <Input
              type={login?.isVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={login?.password}
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, password: e.target.value }))
              }
              className="p-5 pr-12 rounded-md border-gray-300 text-sm"
            />

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
              onClick={() =>
                setLogin((prev) => ({ ...prev, isVisible: !prev?.isVisible }))
              }
            >
              {login?.isVisible ? "visibility" : "visibility_off"}
            </span>
          </div>
          <h1 className="flex justify-end text-xs text-amber-500">
            Forgot password ?
          </h1>
        </div>
        <Button
          className="text-sm"
          onClick={userLogin}
          disabled={login?.loading}
        >
          {login?.loading ? <Spinner /> : "Log In"}
        </Button>
        <div className="flex justify-center text-slate-400 text-sm">
          OR CONTINUE WITH
        </div>
        <Button variant="outline" disabled={true}>
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined">g_translate</span>
            <h2>Google</h2>
          </div>
        </Button>
        <Button disabled={true} variant="outline">
          Apple Id
        </Button>
        <Button disabled={true} variant="outline">
          FaceBook
        </Button>
        <div className="flex justify-center text-xs">
          Don&apos;t have an account?
          <Link href="/auth/usersignup" className="underline text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
