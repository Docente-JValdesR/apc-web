"use client";

import CicloComponent from "@/components/cicloComponent";
import { useGlobal } from "@/context/globalContext";

export default function CarouselContainer() {
  const { basica2 } = useGlobal();
  const options = {
    loop: true,
    watchDrag: false,
  };
  const autoplay = { delay: 10000 };
  if (!basica2 || basica2.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <CicloComponent
      imageSlides={basica2.imageSlides}
      textSlides={basica2.textSlides}
      cicloAcademico={basica2.cicloAcademico}
      options={options}
      autoplay={autoplay}
    />
  );
}
