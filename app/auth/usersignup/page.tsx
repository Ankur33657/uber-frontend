"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import authServices from "@/services/auth.services";
import { signupItems, payloadItems } from "@/common/types/signuptypes";
import { useRouter } from "next/navigation";
import Utils from "@/common/utils";
const UserSignup = () => {
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const [signup, setSignUp] = useState<payloadItems>({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordVisible: false,
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    server: "",
  });
  const items: signupItems[] = [
    {
      id: 1,
      header: "Full Name",
      palceholder: "Joan Doe",
      error: error?.name,
      value: signup?.name,
      onChange: (item: string) =>
        setSignUp((prev) => ({ ...prev, name: item })),
    },
    {
      id: 2,
      header: "Email Address",
      palceholder: "name@example.com",
      error: error?.name,
      value: signup?.email,
      onChange: (item: string) =>
        setSignUp((prev) => ({ ...prev, email: item })),
    },
  ];

  const handleSignup = async () => {
    setLoading(true);
    setError((prev) => ({
      ...prev,
      name: "",
      email: "",
      phone: "",
      password: "",
      server: "",
    }));
    const isValidate: any = await Utils?.UsersignUpValidation(signup);
    if (!isValidate?.status) {
      setError((prev) => ({
        ...prev,
        name: isValidate?.data?.name,
        email: isValidate?.data?.email,
        password: isValidate?.data?.password,
        phone: isValidate?.data?.phone,
      }));
      console.log(isValidate?.data, "Error");
      setLoading(false);
      return;
    }
    try {
      const payload = {
        name: signup?.name,
        email: signup?.email,
        phone: signup?.phone,
        password: signup?.password,
      };
      const res = await authServices?.userSignUp(payload);
      if (res) route.push("/home");
    } catch (err: any) {
      setError((prev) => ({
        ...prev,
        server: err?.response?.data?.message || err || "Something went wrong",
      }));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-60 w-full overflow-hidden">
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
              value={item?.value}
              onChange={(e) => item?.onChange(e.target.value)}
              className="p-5 rounded-md border-gray-300 bg-white text-sm"
            />
            {item?.error && (
              <p className="text-xs text-red-700"> {item?.error}</p>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xs">Phone Number</h1>
          <PhoneInput
            country="in"
            value={signup?.phone}
            onChange={(phone) => {
              setSignUp((prev) => ({ ...prev, phone: phone }));
            }}
            containerClass="w-full"
            inputClass="!w-full !h-10.5 !pl-14 !pr-3 !text-sm !rounded-md !border !border-gray-300 focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
            buttonClass="!border !border-gray-300 !rounded-l-md"
            dropdownClass="!rounded-md"
          />
          {error?.phone && (
            <p className="text-xs text-red-700">{error?.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs">Password</h1>
          <div className="relative">
            <Input
              type={signup?.passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={signup?.password}
              onChange={(e) =>
                setSignUp((prev) => ({ ...prev, password: e.target.value }))
              }
              className="p-5 pr-12 rounded-md border-gray-300 text-sm"
            />

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() =>
                setSignUp((prev) => ({
                  ...prev,
                  passwordVisible: !prev?.passwordVisible,
                }))
              }
            >
              {signup?.passwordVisible ? "visibility" : "visibility_off"}
            </span>
          </div>
          {error?.password && (
            <p className="text-xs text-red-700">{error?.password}</p>
          )}
        </div>
        <div className="flex flex-col">
          <Button className="text-sm" onClick={handleSignup} disabled={loading}>
            {loading ? <Spinner /> : "Create Account"}
          </Button>
          {error?.server && (
            <p className="text-xs text-red-700 flex justify-end">
              {error.server}
            </p>
          )}
        </div>
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
        <div className="text-xs text-slate-400 text-center">
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
