import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
const Profile = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
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
            <div className="absolute -bottom-2 -right-2 bg-primary px-3 py-1 rounded-lg text-on-primary font-headline font-bold flex items-center gap-1 shadow-lg">
              <span>4.9</span>
              {/*<span className="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>*/}
            </div>
          </div>
          <div className="flex-1 text-right md:text-left">
            <p className="text-primary font-headline font-bold uppercase tracking-widest text-xs mb-1">
              Elite Member
            </p>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">
              Alexander
              <br />
              Rousseau
            </h2>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Identity & Reach</h1>
        <h2 className="text-xs font-bold uppercase text-primary">
          Edit Details
        </h2>
      </div>
      {[1, 2, 3].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4"
        >
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined text-primary">
              stacked_email
            </span>
            <h1 className="text-xs text-pretty font-bold text-primary uppercase">
              Email Address
            </h1>
          </div>
          <h1 className="text-xs font-bold">ankursingh3362869@gmail.com</h1>
        </div>
      ))}
      <h1 className="text-xl font-bold">Experience Tuning</h1>
      {[1, 2, 3].map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-md px-4 py-6 flex flex-row justify-between items-center"
        >
          <div className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined bg-slate-300 p-2 rounded-md">
              brightness_2
            </span>
            <h1 className="text-xs font-bold">Dark Atmosphere</h1>
          </div>
          <Switch />
        </div>
      ))}
      <div className="flex flex-row justify-between">
        <div className="p-6 rounded-xl flex flex-col gap-2 bg-slate-200 shadow-lg w-40">
          <span className="material-symbols-outlined text-primary">
            help_center
          </span>
          <h1 className="text-sm font-bold ">Help Center</h1>
        </div>
        <div className="p-6 rounded-xl flex flex-col gap-2 bg-slate-200 shadow-lg w-40">
          <span className="material-symbols-outlined text-primary">
            privacy_tip
          </span>
          <h1 className="text-sm font-bold ">Privacy Policy</h1>
        </div>
      </div>
      <Button className="p-6 rounded-3xl flex flex-row items-center">
        <span className="material-symbols-outlined">logout</span>
        <h1>Log Out</h1>
      </Button>
    </div>
  );
};
export default Profile;
