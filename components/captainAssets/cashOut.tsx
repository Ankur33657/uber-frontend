import { Button } from "../ui/button";

const CashOut = () => {
    return (<div className="flex flex-col text-center gap-1 p-3 bg-black/90 rounded-xl shadow-md">
        <h2 className="text-md text-bold text-white uppercase">Available to Withdraw</h2>
        <h1 className="text-4xl text-white font-bold ">$126.76</h1>
        <Button className="p-5 w-40 mx-auto text-xl font-bold mt-2 cursor-pointer">Cash Out</Button>
    </div>)
}
export default CashOut;