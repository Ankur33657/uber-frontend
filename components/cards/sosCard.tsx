import { Badge } from "../ui/badge";
const SosCard = () => {
  return (
    <div className="flex flex-col gap-2 bg-linear-to-br from-red-600 via-red-500 to-orange-500 rounded-md p-6">
      <h1 className="text-2xl text-white font-bold">SOS Assistance</h1>
      <p className="text-xs text-white font-bold">
        Instantly connect with emergency services and alert our safety team.
      </p>
      <div className="flex flex-row justify-between items-center">
        <span className="material-symbols-outlined text-slate-600 text-4xl">
          emergency_share
        </span>
        <Badge className="uppercase">Activate SOS</Badge>
      </div>
    </div>
  );
};
export default SosCard;
