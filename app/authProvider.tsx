"use client";
import { usePathname } from "next/navigation";
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  if (!isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1 pb-18">{children}</div>
        <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t shadow-md flex items-center justify-around z-50">
          Navbarr
        </div>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
}
