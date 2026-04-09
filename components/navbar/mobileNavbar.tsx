import { MobileNavbarItems } from "@/common/constant";
import { usePathname, useRouter } from "next/navigation";
import { CurrentRoleCaptain } from "@/common/utils";
import { useState, useEffect } from "react";
const MobileNavbar = () => {
  const pathname = usePathname();
  const route = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isCaptain, setIsCaptain] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsCaptain(CurrentRoleCaptain());
  }, []);

  if (!mounted) return null;

  const items = MobileNavbarItems(isCaptain);
  return (
    <div className="flex items-center justify-around  p-2">
      {items.map((item) => {
        const isActive = pathname === item?.route;
        if (item?.hide && isCaptain) return null;
        return (
          <div
            onClick={() => route.push(item?.route)}
            key={item?.id}
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
              isActive ? "text-primary" : "text-slate-500 hover:text-primary"
            } text-xs`}
          >
            <span className="material-symbols-outlined ">{item?.icon}</span>
            {item?.name}
          </div>
        );
      })}
    </div>
  );
};
export default MobileNavbar;
