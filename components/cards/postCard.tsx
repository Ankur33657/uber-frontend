import Image from "next/image";
const PostCard = () => {
  return (
    <div className="p-4 bg-white rounded-sm shadow-lg flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/avtar.avif"
            alt="avtar"
            width={20}
            height={20}
            className="rounded-full w-10 h-10 object-fill"
          />
          <div className="flex flex-col">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-sm font-bold">Captain Marco</h1>
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
            </div>
            <p className="text-xs text-slate-400">2 hours ago City Center</p>
          </div>
        </div>
        <span className="material-symbols-outlined text-slate-400">
          more_horiz
        </span>
      </div>
      <p className="text-sm ">
        Just completed my 1000th ride this month! Thanks to all the amazing
        riders who make this job worthwhile. Keep safe on the roads today! 🚗✨
      </p>
      <Image
        src="/car.jpeg"
        alt="car"
        width={100}
        height={100}
        className="w-full rounded-md"
      />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined text-slate-400">
              favorite
            </span>
            12
          </div>
          <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined text-slate-400">
              chat
            </span>
            12
          </div>
        </div>
        <span className="material-symbols-outlined text-slate-400">share</span>
      </div>
    </div>
  );
};
export default PostCard;
