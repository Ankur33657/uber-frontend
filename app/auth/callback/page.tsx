"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import authServices from "@/services/auth.services";
import { supabase } from "@/lib/supabase";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isLogin = searchParams.get("login") === "true";

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          router.push("/auth/userlogin");
          return;
        }

        const user = session.user;
        let response;

        if (isLogin) {
          response = await authServices.userLogin({
            email: user?.email ?? "",
            password: user?.id,
          });
        } else {
          response = await authServices.userSignUp({
            name: user.user_metadata.full_name || user.email?.split("@")[0],
            email: user.email,
            password: user.id,
          });
        }

        if (!response?.data) {
          toast.warning(response?.data?.message || "Authentication failed");
          router.push("/auth/userlogin");
        } else {
          localStorage.setItem("user", JSON.stringify(response.data));
          router.push("/home");
        }
      } catch (err) {
        console.error("Error during auth callback:", err);
        router.push("/auth/userlogin");
      }
    };

    handleAuth();
  }, [router, isLogin]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="text-gray-500 font-medium">Completing sign in...</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="text-gray-500 font-medium">Loading...</p>
          </div>
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
