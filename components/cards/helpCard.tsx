const HelpCard = () => {
  return (
    <div className="flex flex-col rounded-md shadow-lg p-4 bg-white gap-3">
      <span className="material-symbols-outlined text-primary text-[48px]">
        add_moderator
      </span>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Local Authorities</h1>
        <h2 className="text-xs text-slate-400 font-bold">
          Direct line to municipal emergency response
        </h2>
      </div>
      <p className="flex flex-row gap-1 text-md items-center text-primary font-bold">
        call 911 <span className="material-symbols-outlined">call</span>
      </p>
    </div>
  );
};
export default HelpCard;
