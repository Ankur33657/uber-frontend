import { Button } from "@/components/ui/button";

const Wallet = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-6 shadow-lg">
        <h1 className="text-md font-bold text-slate-600 uppercase">
          Total Balance
        </h1>
        <h2 className="text-4xl font-bold ">$2856.67</h2>
        <div className="flex flex-row justify-between">
          <Button className="w-40">Add Fund</Button>
          <Button className="w-40 bg-gray-300 text-slate-600">Withdraw</Button>
        </div>
      </div>
      <h1 className="text-lg font-bold text-primary">Wallet Insights</h1>
    </div>
  );
};
export default Wallet;
