"use client";

import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { CanvasRevealEffectDemo2 } from "~~/components/ui/canvas-reveal-effect-demo";

const Home: NextPage = () => {
  // Dynamically import the GlobeDemo to avoid SSR issues
  const GlobeDemo = dynamic(() => import("../components/ui/globe-demo").then(mod => mod.GlobeDemo), {
    ssr: false,
  });

  return (
    <>
      <div className="flex items-center flex-col grow">
        <GlobeDemo />
        <CanvasRevealEffectDemo2 text="SoulBound Token (SBT)" />
        <CanvasRevealEffectDemo2 text="BioSBT" />
        <CanvasRevealEffectDemo2 text="SynthSBT" />
        {/* <div className="pt-20">
          <GlareCardDemo />
        </div>
        <FeaturesSectionDemo />
        <div className="px-10 pb-10">
          <GlowingEffectDemoSecond />
        </div> */}
      </div>
    </>
  );
};

export default Home;
