"use client";

import CicloComponent from "@/components/cicloComponent";
import { useGlobal } from "@/context/globalContext";

export default function CarouselContainer() {
  const { basica1 } = useGlobal();
  const options = {
    loop: true,
    watchDrag: false,
  };
  const autoplay = { delay: 10000 };
  if (!basica1 || basica1.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <CicloComponent
      imageSlides={basica1.imageSlides}
      textSlides={basica1.textSlides}
      cicloAcademico={basica1.cicloAcademico}
      options={options}
      autoplay={autoplay}
    />
  );
}
