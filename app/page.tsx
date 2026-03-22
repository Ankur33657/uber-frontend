"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Button variant="outline" size="lg" onClick={() => router.push("/auth")}>
        Click me
      </Button>
    </div>
  );
}
