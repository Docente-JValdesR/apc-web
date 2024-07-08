"use client";
import EmblaCarouselHorizontal from "@/components/UI/embla-carousel-horizontal";
import { useGlobal } from "@/context/globalContext";
export default function App() {
  const { eventos } = useGlobal();

  const OPTIONS = { axis: "y", dragFree: true, loop: true };

  if (!eventos || eventos.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <div className="min-h-screen w-full">
      <div className="grid xl:grid-cols-12 pt-[64px] xl:pt-[89px] gap-8">
        <EmblaCarouselHorizontal slides={eventos} options={OPTIONS} />
      </div>
    </div>
  );
}
