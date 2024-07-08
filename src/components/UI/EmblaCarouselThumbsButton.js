import { Image } from "@nextui-org/react";
import React from "react";

const Thumb = ({ slide, onClick, selected, index }) => {
  return (
    <div
      className={`embla-thumb ${selected ? "is-selected" : ""}`}
      onClick={() => onClick(index)}
    >
      <Image
        src={slide.image}
        alt={`Thumbnail ${index}`}
        className="embla-thumb__image"
      />
    </div>
  );
};

export { Thumb };
