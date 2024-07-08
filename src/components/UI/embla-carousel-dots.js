import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Image } from "@nextui-org/react";

const EmblaCarouselDots = (props) => {
  const { slides, options, dots } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!slides || slides.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.slice(0, 5).map((slide, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <Image
                className="embla__slide__img"
                src={slide.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      {dots && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmblaCarouselDots;
