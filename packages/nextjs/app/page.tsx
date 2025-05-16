"use client";

import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { FeaturesSectionDemo } from "~~/components/ui/features-section-demo";
import { GlareCardDemo } from "~~/components/ui/glare-card-demo";
import { GlowingEffectDemoSecond } from "~~/components/ui/glowing-effect-demo";

const Home: NextPage = () => {
  // Dynamically import the GlobeDemo to avoid SSR issues
  const GlobeDemo = dynamic(() => import("../components/ui/globe-demo").then(mod => mod.GlobeDemo), {
    ssr: false,
  });

  return (
    <>
      <div className="flex items-center flex-col grow">
        <GlobeDemo />
        <div className="pt-20">
          <GlareCardDemo />
        </div>
        <FeaturesSectionDemo />
        <div className="px-10 pb-10">
          <GlowingEffectDemoSecond />
        </div>
      </div>
    </>
  );
};

export default Home;
