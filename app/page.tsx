import Hero from "@/components/home/Hero";
import DivisionsPreview from "@/components/home/DivisionsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <DivisionsPreview />
      <WhyChooseUs />
      {/* We will add Leadership Preview and Gallery Preview in Phase 3 */}
    </>
  );
}