"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface signupItems {
  id: number;
  header: string;
  palceholder: string;
}
const UserSignup = () => {
  const items: signupItems[] = [
    {
      id: 1,
      header: "Full Name",
      palceholder: "Joan Doe",
    },
    {
      id: 2,
      header: "Email Address",
      palceholder: "name@example.com",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-28 w-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          alt="Abstract orange and black geometric wave pattern"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7WOKfW8YbhzgWw0pL9X8Ha_Re7AxqRjjy0hMQYWbYPscIKlwHq30HFYsCzZVcozpPnEnLGvju5iDsVNDLkaiAqmtgQ13Hyk-aSxFQA6G1Of-r6uCISgxbZrjUJ67_nlMJ3hbgS7fo5n-NTODhzX3bCADBsTUQ7xOqQ-mF3ChffnuI5noyKE7YGwJgSgw3fL-U0FuMMe1-3-nqWqFYaVIKtcVOaWvSik-OjSiYulVrzXQ7nB9UgjSNtoSaGNEQ_-CJwAoveTlFhA"
          width={100}
          height={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Join the Ride
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs">
            Create your account to start traveling
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {items.map((item) => (
          <div key={item?.id} className="flex flex-col gap-0.5 text-xs">
            <h1>{item?.header}</h1>
            <Input
              type="text"
              placeholder={item?.palceholder}
              className="p-5 rounded-md border-gray-300 bg-white text-sm"
            />
          </div>
        ))}
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
        </div>
        <Button className="text-sm">Create Account</Button>
        <div className="flex justify-center text-sm">OR SIGNUP WITH</div>
        <div className="flex flex-row justify-between">
          <Button variant="outline" className="w-40">
            Google
          </Button>
          <Button variant="outline" className="w-40">
            Apple
          </Button>
        </div>
        <div className="flex justify-center gap-1 text-xs items-center">
          <span>Already have an account?</span>
          <Link href="/auth/userlogin" className="underline text-primary">
            Login
          </Link>
        </div>
        <div className="text-xs text-slate-400 text-center fixed bottom-3">
          By signing up, you agree to our{" "}
          <Link className="underline text-primary" href="#">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline text-primary" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserSignup;
