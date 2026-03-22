import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex flex-row gap-3 items-center">
        <span className="material-symbols-outlined">arrow_back</span>
        <p className="text-xl font-bold">Join as a Captain</p>
      </div>

      {children}
    </div>
  );
}
