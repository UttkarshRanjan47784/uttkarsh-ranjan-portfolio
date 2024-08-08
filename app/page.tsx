import BottomDock from "@/components/dock";
import Particles from "@/components/magicui/particles";
import { ParticleHeroBG } from "@/components/particle-hero-bg";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Home() {
  return (
    <main>
      <ScrollArea className="h-dvh">
        <ParticleHeroBG />
        <div className="h-dvh"></div>
        <div className="h-dvh"></div>
        <BottomDock />
      </ScrollArea>
    </main>
  );
}
