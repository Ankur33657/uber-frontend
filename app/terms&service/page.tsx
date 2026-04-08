"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
export default function TermsPage() {
  const route = useRouter();
  return (
    <Card className="max-w-4xl w-full h-screen bg-white">
      <CardContent>
        <div className="flex flex-row gap-2 items-center">
          <span
            onClick={() => route.back()}
            className="material-symbols-outlined"
          >
            arrow_left_alt
          </span>
          <h1 className="text-2xl font-bold">Terms of Service</h1>
        </div>

        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h2 className="font-semibold text-lg">1. Introduction</h2>
              <p>
                Welcome to our ride-sharing platform. By accessing or using our
                service, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">
                2. User Responsibilities
              </h2>
              <p>
                You must provide accurate information, maintain the security of
                your account, and comply with all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">3. Ride Booking</h2>
              <p>
                Riders can request rides and drivers may accept or decline
                requests. Prices are calculated based on distance, time, and
                demand.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">4. Payments</h2>
              <p>
                Payments must be made through the platform. Any fraudulent
                activity may lead to account suspension.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">5. Cancellation Policy</h2>
              <p>
                Cancellation fees may apply if rides are canceled after a
                certain time.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">
                6. Limitation of Liability
              </h2>
              <p>
                We are not responsible for any damages, losses, or disputes
                arising between riders and drivers.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">7. Account Suspension</h2>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate our policies.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">8. Changes to Terms</h2>
              <p>
                We may update these Terms at any time. Continued use of the
                platform means you accept the changes.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact our
                support team.
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
