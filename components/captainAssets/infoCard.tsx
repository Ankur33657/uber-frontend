const InfoCard = () => {
  return (
    <div className="m-3 flex flex-col gap-4 rounded-xl shadow-md ">
      <div className="p-4 bg-gray-100 shadow-md flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-md font-bold text-slate-600">Personal Info</h2>
          <span className="material-symbols-outlined text-primary">edit</span>
        </div>
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="flex flex-col">
            <h2 className="text-xs text-slate-600">Full Name</h2>
            <h1 className="text-md font-bold text-slate-700">Ankur Singh</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoCard;
