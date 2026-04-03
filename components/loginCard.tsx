"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LoginCardItems } from "@/common/types/logintypes";
const LoginCard = ({ item }: { item: LoginCardItems }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row gap-1">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 items-center">
              <span className="material-symbols-outlined p-1 bg-amber-100 rounded text-gray-500">
                {item?.icon}
              </span>
              <h1 className="text-md font-semibold">{item?.title}</h1>
            </div>
            <h2 className="text-xs text-slate-400">{item?.descriptions}</h2>
          </div>
          <Image
            src={item?.imagePath || "/car.jpeg"}
            alt="Image alt"
            width={80}
            height={80}
            unoptimized
          />
        </div>
        <Button
          className="w-full"
          onClick={() => {
            setLoader(true);
            router.push(item?.route);
          }}
        >
          {loader ? (
            <Spinner />
          ) : (
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-sm font-bold text-white">
                {item?.buttonText}
              </h1>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
export default LoginCard;
