"use client";

import { lazy, Suspense } from "react";
import { CardItems } from "@/common/constant";
import ErrorBoundary from "@/components/errorBoundary";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
const LoginCard = lazy(() => import("../../components/loginCard"));

const Auth = () => {
  return (
    <div className="h-full flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold  px-2 mt-5">Welcome to UberX</h1>
        <h2 className="px-2 text-xs">How would you like to travel today?</h2>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center w-full">
        {CardItems.map((item) => (
          <ErrorBoundary key={item?.id}>
            <Suspense fallback={<Skeleton className="w-full h-40" />}>
              <LoginCard item={item} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </div>
      <div className="fixed bottom-2 left-0 right-0 flex justify-center text-xs">
        <div>
          Need help declining?{" "}
          <Link href="#" className="underline text-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Auth;
