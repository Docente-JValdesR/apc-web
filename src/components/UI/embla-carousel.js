"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useCallback, useEffect, useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
export function EmblaCarousel({
  slides,
  renderSlide,
  options,
  autoplay,
  withDots,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplay),
    Fade({ active: true }),
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi, setCurrentSlide]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container ">{slides.map(renderSlide)}</div>
        {withDots && (
          <div className="embla__controls !mt-0 !inline-flex bg-white/50 hover:bg-[#F4F4F5] dark:bg-slate-800/30 hover:dark:bg-[#27272A] rounded-lg ">
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
          </div>
        )}
      </div>
    </>
  );
}
