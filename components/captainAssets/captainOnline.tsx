"use client";
import { useState } from "react";
import DeleteConfirm from "../dialog/deleteconfirm";
const CaptainOnline = () => {
    const [isOnline, setIsOnLine] = useState(false);
    const [open,setOpen]=useState(false)
    const handleOnline = async() => {
        setIsOnLine((prev) => !prev)
        setOpen(false)
    }

    return (
      <>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="group cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-between border border-gray-100"
        >
          <div className="flex flex-col">
            {isOnline ? (
              <>
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <h1 className="text-2xl font-semibold text-green-600">
                  Online
                </h1>
              </>
            ) : (
              <>
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  Ready to earn?
                </span>
                <h1 className="text-2xl font-semibold text-gray-800">
                  Go Online
                </h1>
              </>
            )}
          </div>

          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 
    ${isOnline ? "bg-green-500" : "bg-gray-800 group-hover:bg-primary"}`}
          >
            <span className="material-symbols-outlined text-white text-xl">
              {isOnline ? "toggle_on" : "toggle_off"}
            </span>
          </div>
        </div>
        <DeleteConfirm
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleOnline}
          Header={isOnline ? "Are you Sure want to go offline" : "Great!"}
          descriptions={
            isOnline ? "" : "Your take one more step towards your goal"
          }
          confirmBtntext={"Accept"}
        />
      </>
    );
}
export default CaptainOnline;