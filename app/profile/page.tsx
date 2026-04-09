"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import LogOutUser from "@/components/logoutButton";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User } from "@/common/types/logintypes";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    }
  }, []);

  const personalItems = [
    {
      id: 1,
      icon: "mail",
      key: "Email Address",
      value: user?.email,
    },
    {
      id: 2,
      icon: "phone_callback",
      key: "Phone",
      value: "",
    },
    {
      id: 3,
      icon: "location_on",
      key: "Primary Residence",
      value: user?.savedPlaces ?? "",
    },
  ];

  const toolsItems = [
    {
      id: 1,
      icon: "bedtime",
      name: "Dark Atmosphere",
      component: () => (
        <Tooltip>
          <TooltipTrigger>
            <Switch disabled={true} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Feature coming soon..</p>
          </TooltipContent>
        </Tooltip>
      ),
    },
    {
      id: 2,
      icon: "notifications_active",
      name: "Smart Notification",
      component: () => <Switch />,
    },
    {
      id: 3,
      icon: "bring_your_own_ip",
      name: "System Language",
      component: () => <div className="text-xs">English (US)</div>,
    },
  ];

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <section className="relative overflow-visible">
        <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                alt="Profile Hero"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB7OqSZx_GSST3d5yQHfWjNeH_oSF2_PsldroS2ieKb1belrEVE7glw6OkHyHBomwHs-ofUIGRh3MgShd256e8rTyRb_pqWTGXhB3tQCapOmWObQDNYWwso7uVWXiecXjh4YDSWxdhsg5WYHNKa6LAnYSI_exHegnOvHa-p4nPcCDN3O0MRCDzDAo5GeL9iE_-EHcx4HOoPm_4QUsDe266eOcuDdaE8fJNyEso2DPo8DHqqDwFrmYYZvRbMMF1XwOIEMwlZTjmGa4"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary px-3 py-1 rounded-lg text-on-primary font-headline font-bold flex items-center gap-1">
              <span className="text-xl">{user?.rating}</span>
              <span className="material-symbols-outlined">star</span>
            </div>
          </div>
          <div className="flex-1 text-right md:text-left">
            {user?.isPremium ? (
              <p className="text-primary font-headline font-bold uppercase tracking-widest text-xs mb-1">
                Elite Member
              </p>
            ) : (
              <Button
                className="p-4"
                variant={"outline"}
                onClick={() => router.push("/auth/captainsignup")}
              >
                Go for Captain
              </Button>
            )}

            <h2 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">
              {user?.name}
              <br />
              {user?.role?.toUpperCase()}
            </h2>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Identity & Reach</h1>
        <h2 className="text-xs font-bold uppercase text-primary cursor-pointer">
          Edit Details
        </h2>
      </div>
      {personalItems.map((item) => {
        if (!item?.value) return null;
        return (
          <div
            key={item?.id}
            className="flex flex-col gap-2 bg-white shadow-xs rounded-md p-4"
          >
            <div className="flex flex-row gap-2 items-center">
              <span className="material-symbols-outlined text-primary">
                {item?.icon}
              </span>
              <h1 className="text-xs text-pretty font-bold text-primary uppercase">
                {item?.key}
              </h1>
            </div>
            <h1 className="text-xs font-bold">{item?.value}</h1>
          </div>
        );
      })}
      <h1 className="text-xl font-bold">Experience Tuning</h1>
      {toolsItems.map((item) => (
        <div
          key={item?.id}
          className="bg-white shadow-md rounded-md px-4 py-6 flex flex-row justify-between items-center"
        >
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined bg-slate-300 p-2 rounded-md">
              {item?.icon}
            </span>
            <h1 className="text-xs font-bold">{item?.name}</h1>
          </div>
          {item?.component()}
        </div>
      ))}
      <div className="flex flex-row justify-between gap-4">
        <div className="p-6 rounded-xl flex flex-col gap-2 bg-slate-200 shadow-xs w-[50%] cursor-pointer">
          <span className="material-symbols-outlined text-primary">
            help_center
          </span>
          <h1 className="text-sm font-bold ">Help Center</h1>
        </div>
        <div
          className="p-6 rounded-xl flex flex-col gap-2 bg-slate-200 shadow-xs w-[50%] cursor-pointer"
          onClick={() => router.push("/privacy")}
        >
          <span className="material-symbols-outlined text-primary">
            privacy_tip
          </span>
          <h1 className="text-sm font-bold ">Privacy Policy</h1>
        </div>
      </div>
      <LogOutUser />
    </div>
  );
};

export default Profile;
