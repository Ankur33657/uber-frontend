import SosCard from "../cards/sosCard";
import HelpCard from "../cards/helpCard";
import { Badge } from "../ui/badge";
const Safety = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase font-bold text-primary">
          peace of mild
        </p>
        <p className="text-2xl font-bold">
          Your Safety is our <span className="text-primary/80">Standard</span>
        </p>
      </div>

      <SosCard />
      <HelpCard />
      <HelpCard />
      <h1 className="text-lg text-primary font-bold">Safety Essentials</h1>
      {[1, 2, 3].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 bg-white rounded-lg shadow-lg py-6 px-4"
        >
          <h1 className="text-lg font-bold">Verify Your Ride</h1>
          <p className="text-xs text-slate-600">
            Always match the license plate, vehicle make, and driver photo in
            the app before entering the vehicle.
          </p>
          <h1 className="text-sm font-bold uppercase text-primary">
            Protocol 0{idx + 1}
          </h1>
        </div>
      ))}
      <div className="bg-white px-4 py-6 rounded-md flex flex-col gap-3 shadow-lg">
        <h1 className="text-lg font-bold "> Community Guidelines</h1>
        {[1, 2, 3].map((item, idx) => (
          <div key={idx} className="flex flex-row gap-2 items-center">
            <span className="material-symbols-outlined text-primary ">
              check_circle
            </span>
            <p className="text-sm text-slate-600 ">
              Respect is mutual. We maintain a zero-tolerance policy for
              harassment or discrimination of any kind.
            </p>
          </div>
        ))}
        <Badge>Read Full Editorial Standards</Badge>
      </div>
    </div>
  );
};
export default Safety;
