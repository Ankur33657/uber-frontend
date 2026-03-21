import { MobileNavbarItems } from "@/common/constant";
import { usePathname, useRouter } from "next/navigation";
const MobileNavbar = () => {
  const pathname = usePathname();
  const route = useRouter();
  return (
    <div className="flex items-center justify-around z-50 p-2">
      {MobileNavbarItems.map((item) => {
        const isActive = pathname === item?.route;
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
