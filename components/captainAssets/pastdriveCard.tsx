const PastDriveCard = () => {
    return (
        <div className="flex flex-row gap-2 p-4 rounded-md shadow-md justify-between">
            <div className="flex flex-row gap-2">
        <span className="material-symbols-outlined bg-slate-200 p-2 text-primary rounded-full">
          directions_car
        </span>
        <div>
          <h1 className="text-md font-bold text-slate-600">
            Market Road St.Chruch
          </h1>
          <h2 className="text-xs text-slate-400">
            completed 14 min ago .$18.4
          </h2>
        </div>
                
            </div>
       <h1 className="text-md font-bold">$24.5</h1>
      </div>
    );
}
export default PastDriveCard;