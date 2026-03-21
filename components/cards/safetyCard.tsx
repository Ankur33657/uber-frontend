const SafetyCard = () => {
  return (
    <div className="p-4 bg-primary/5 border-2 border-solid border-primary/10 rounded-lg flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <span className="material-symbols-outlined text-primary">shield</span>
        <p className="text-sm font-bold text-primary">SAFE TIP OF THE DAY</p>
      </div>
      <p className="text-lg font-bold">Verify Your Ride</p>
      <p className="text-md text-slate-600 ">
        Always check that the license plate, vehicle make and model, and driver
        photo match what’s shown in your app before entering.
      </p>
      <div className="flex flex-row gap-1 items-center">
        <h1 className="text-sm text-primary">Learn More</h1>
        <span className="material-symbols-outlined text-primary text-[10px]">
          arrow_forward
        </span>
      </div>
    </div>
  );
};
export default SafetyCard;
