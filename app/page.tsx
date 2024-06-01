import HeroSection from "@/components/hero-section";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-dvh">
      <TopBar />
      <HeroSection />
    </main>
  );
}
