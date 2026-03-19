"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const UserLogin = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7WOKfW8YbhzgWw0pL9X8Ha_Re7AxqRjjy0hMQYWbYPscIKlwHq30HFYsCzZVcozpPnEnLGvju5iDsVNDLkaiAqmtgQ13Hyk-aSxFQA6G1Of-r6uCISgxbZrjUJ67_nlMJ3hbgS7fo5n-NTODhzX3bCADBsTUQ7xOqQ-mF3ChffnuI5noyKE7YGwJgSgw3fL-U0FuMMe1-3-nqWqFYaVIKtcVOaWvSik-OjSiYulVrzXQ7nB9UgjSNtoSaGNEQ_-CJwAoveTlFhA"
          alt="rider Login"
          width={40}
          height={40}
          className="w-full h-50"
          unoptimized
        />

        <span className=" fixed top-2 left-4 bg-black/20 material-symbols-outlined text-white rounded-full p-1">
          arrow_back
        </span>
        <div className="fixed top-30 left-5 flex flex-col text-white">
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

            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ">
              visibility
            </span>
          </div>
          <h1 className="flex justify-end text-xs text-amber-500">
            Forgot password ?
          </h1>
        </div>
        <Button className="text-sm"> Log In</Button>
        <div className="flex justify-center text-slate-400 text-sm">
          OR CONTINUE WITH
        </div>
        <Button variant="outline">
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined">g_translate</span>
            <h2>Google</h2>
          </div>
        </Button>
        <Button variant="outline">Apple Id</Button>
        <Button variant="outline">FaceBook</Button>
        <div className="fixed bottom-2 left-0 right-0 flex justify-center text-xs">
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
