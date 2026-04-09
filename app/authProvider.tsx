"use client";
import { usePathname } from "next/navigation";
import MobileNavbar from "@/components/navbar/mobileNavbar";
import { AUTH_ROUTE, AUTHENTICATED_WITHOUT_NAVBAR } from "@/middleware";
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTE.find((item) => item === pathname);
  const WithoutNavbar = AUTHENTICATED_WITHOUT_NAVBAR.find((item) =>
    pathname.includes(item),
  );

  if (isAuthPage || WithoutNavbar) {
    return <div>{children}</div>;
  } else {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1 relative">{children}</div>
        <div className="h-16 w-full shrink-0" />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-120 h-16 bg-white border-t shadow-md z-1000 ">
          <MobileNavbar />
        </div>
      </div>
    );
  }
}
