"use client";
import { useCallback, useState, useEffect } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/UI/EmblaCarouselArrowButtonsHorizontal";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "@/styles/emblaHorizontal.module.css";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ViewGrid from "@/components/viewGrid";
import EmblaCarouselModal from "@/components/UI/embla-carousel-modal";

const EmblaCarousel = ({ slides, options }) => {
  const [width, setWidth] = useState(0);
  const [title, setTitle] = useState(slides[0]?.title || "");
  const [description, setDescription] = useState(slides[0]?.description || "");
  const [selectedImages, setSelectedImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const transformImages = useCallback((images) => {
    if (!Array.isArray(images)) {
      console.error("Expected an array, but received:", images);
      return [];
    }
    return images.map((imgUrl) => ({
      image: imgUrl,
      height: getRandomHeight(),
    }));
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      setSelectedImages(transformImages(slides[0].image));
    }
  }, [slides, transformImages]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const handleSlideClick = (index) => {
    setSelectedImages(transformImages(slides[index].image));
    setTitle(slides[index].title);
    setDescription(slides[index].description);
    setIndex(index);
    if (width < 1280) {
      onOpen();
    }
  };

  const getRandomHeight = () =>
    Math.floor(Math.random() * (600 - 350 + 1)) + 200;

  const OPTIONS = {};
  if (!slides || slides.length === 0 || selectedImages.length === 0) {
    return null;
  }

  return (
    <>
      <div className="col-span-3">
        <section className={style.embla}>
          <div className={style.embla__controls}>
            <div className={style.embla__buttons}>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
            </div>
          </div>
          <div className={style.embla__viewport} ref={emblaRef}>
            <div className={style.embla__container}>
              {slides.map((slide, index) => (
                <div
                  className={style.embla__slide}
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={slide.image[0]}
                    alt={slide.title}
                    className="w-full h-64 bg-cover bg-center"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style.embla__controls}>
            <div className={style.embla__buttons}>
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="col-span-9 content-center hidden xl:grid">
        <ViewGrid
          data={selectedImages}
          title={title}
          description={description}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        backdrop="blur"
        classNames={{
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <EmblaCarouselModal slides={selectedImages} options={OPTIONS} />
              <ModalBody>{description}</ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmblaCarousel;
