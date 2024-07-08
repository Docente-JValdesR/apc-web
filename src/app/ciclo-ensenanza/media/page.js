"use client";

import CicloComponent from "@/components/cicloComponent";
import { useGlobal } from "@/context/globalContext";

export default function CarouselContainer() {
  const { media } = useGlobal();

  const options = {
    loop: true,
    watchDrag: false,
  };
  const autoplay = { delay: 10000 };
  if (!media || media.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <CicloComponent
      imageSlides={media.imageSlides}
      textSlides={media.textSlides}
      cicloAcademico={media.cicloAcademico}
      options={options}
      autoplay={autoplay}
    />
  );
}
