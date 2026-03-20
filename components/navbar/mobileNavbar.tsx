import { MobileNavbarItems } from "@/common/constant";
const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-around z-50 p-2">
      {MobileNavbarItems.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col items-center justify-center text-slate-500 text-xs"
        >
          <span className="material-symbols-outlined">{item?.icon}</span>
          {item?.name}
        </div>
      ))}
    </div>
  );
};
export default MobileNavbar;
