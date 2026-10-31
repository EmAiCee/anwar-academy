import Hero from "@/components/home/Hero";
import DivisionsPreview from "@/components/home/DivisionsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <DivisionsPreview />
      <WhyChooseUs />
      <LeadershipPreview />
      <GalleryPreview />
      <HomeCTA />
    </>
  );
}