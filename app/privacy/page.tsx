"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
export default function PrivacyPolicyPage() {
  const route = useRouter();
  return (
    <Card className="max-w-4xl w-full h-screen bg-white">
      <CardContent>
        <div className="flex flex-row gap-2 items-center">
          <span
            className="material-symbols-outlined"
            onClick={() => route.back()}
          >
            arrow_left_alt
          </span>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>

        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h2 className="font-semibold text-lg">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information such as your name, email, phone
                number, and location data to provide and improve our services.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">
                2. How We Use Information
              </h2>
              <p>
                Your data is used to process rides, improve user experience,
                ensure safety, and communicate important updates.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">3. Location Data</h2>
              <p>
                We use real-time location data to match riders with drivers and
                provide accurate navigation and fare estimates.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">4. Data Sharing</h2>
              <p>
                We may share your information with drivers, service providers,
                and law enforcement when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                data from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">6. Cookies & Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance user
                experience and analyze platform usage.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information by contacting support.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">8. Third-Party Services</h2>
              <p>
                Our platform may contain links to third-party services. We are
                not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">9. Changes to Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Continued
                use of the service implies acceptance of changes.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg">10. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please
                contact our support team.
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
