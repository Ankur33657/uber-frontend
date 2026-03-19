"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const UserLogin = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-row gap-4 items-center">
        <span className="material-symbols-outlined">arrow_back</span>
        <h1 className="text-2xl font-bold">Rider Login</h1>
      </div>
      <div className="flex flex-col mt-4  ">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <h2 className="text-gray-700">Login to start your next ride</h2>
      </div>

      <div className="flex flex-col gap-1">
        <h1>Email or Phone Number</h1>
        <Input
          type="text"
          placeholder="Email or Phone number"
          className="p-5 rounded-md border-gray-300"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>Password</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your password"
            className="p-5 pr-12 rounded-md border-gray-300"
          />

          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            visibility
          </span>
        </div>
        <h1 className="flex justify-end text-sm text-amber-500">
          Forgot password ?
        </h1>
      </div>
      <Button> Log In</Button>
      <div className="flex justify-center text-gray-500">OR CONTINUE WITH</div>
      <Button variant="outline">
        <div className="flex flex-row gap-2 items-center">
          <span className="material-symbols-outlined">g_translate</span>
          <h2>Google</h2>
        </div>
      </Button>
      <Button variant="outline">Apple Id</Button>
      <Button variant="outline">FaceBook</Button>
      <div className="fixed bottom-2 left-0 right-0 flex justify-center">
        Don&apos;t have an account?
        <Link href="/auth/usersignup" className="underline text-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default UserLogin;
