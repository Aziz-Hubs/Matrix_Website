import WaitlistPage from "@/components/mvpblocks/waitlist";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found - XYZ Dimensions",
    description: "The page you are looking for does not exist. Join our waitlist instead.",
};

export default function NotFound() {
    return <WaitlistPage />;
}
