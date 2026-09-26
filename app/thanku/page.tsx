import ThankYou from "@/app/components/ui/thankyou";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Golan Fitness",
  description: "Thank you for contacting us.",
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYou />
    </>
  );
}
