"use client";

import { useState } from "react";
import Envelope from "@/components/Envelope";
import FloatingEmojis from "@/components/FloatingEmojis";
import MusicButton from "@/components/MusicButton";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventsSection from "@/components/EventsSection";
import AwaitingSection from "@/components/AwaitingSection";
import FamiliesSection from "@/components/FamiliesSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <FloatingEmojis />

      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      {opened && (
        <>
          <MusicButton />
          <main className="animate-fade-in">
            <HeroSection />
            <CountdownSection />
            <EventsSection />
            <AwaitingSection />
            <FamiliesSection />
            <VenueSection />
            <FooterSection />
          </main>
        </>
      )}
    </>
  );
}
