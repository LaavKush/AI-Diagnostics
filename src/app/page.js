"use client";

import HeroSection from "@/app/components/HeroSection";
import StickyNavbar from "@/app/components/StickyNavbar";
import KeyBenefits from "@/app/components/KeyBenefits";
import CarePlanCard from "@/app/components/CarePlanCard";
import ChatWithFriendSection from "@/app/components/ChatWithFriendSection";
import HealthOverview from "@/app/components/HealthOverview";
import AlertSection from "@/app/components/AlertSection";
import DiscussSection from "@/app/components/DiscussSection";
import DiscussSection2 from "@/app/components/DiscussSection2";
import PreventiveCareSection from "@/app/components/PreventiveCareSection";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StickyNavbar />
      <KeyBenefits />
      <CarePlanCard />
      <ChatWithFriendSection />
      <HealthOverview />
      <AlertSection />
      <DiscussSection />
      <DiscussSection2 />
      <PreventiveCareSection />
      <Footer />
    </main>
  );
}
