'use client';

import {
  Hero,
  ServiceCards,
  AboutSection,
  ImpactStats,
  LatestNews,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ImpactStats />
      <LatestNews />
    </>
  );
}
