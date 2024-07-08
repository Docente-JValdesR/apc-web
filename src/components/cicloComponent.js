"use client";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  Chip,
  Divider,
  Image,
} from "@nextui-org/react";
import { EmblaCarousel } from "@/components/UI/embla-carousel";

export default function CarouselContainer(props) {
  const { imageSlides, textSlides, cicloAcademico, options, autoplay } = props;
  return (
    <div className="full-width-section2">
      <EmblaCarousel
        slides={imageSlides}
        autoplay={{ delay: 10000 }}
        options={{ loop: true, watchDrag: false }}
        renderSlide={(slide, index) => (
          <div className="embla__slide2" key={index}>
            <Image src={slide.href} alt={slide.title} radius="none" />
          </div>
        )}
      />
      <div className="absolute !bottom-0 !left-0 !right-0  z-10">
        <EmblaCarousel
          slides={textSlides}
          options={options}
          autoplay={autoplay}
          withDots={true}
          renderSlide={(slide, index) => (
            <div className="embla__slide3 " key={index}>
              <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[360px] xl:max-w-[720px]"
                shadow="none"
                isHoverable="true"
              >
                <CardBody>
                  <div className="grid grid-cols-6 xl:grid-cols-12 gap-6 xl:gap-4 items-center justify-center">
                    <div className="relative col-span-3 xl:col-span-4">
                      <Image
                        alt={slide.name}
                        className="object-cover"
                        width={360}
                        src={slide.href}
                        radius="sm"
                      />
                    </div>
                    <div className="col-span-3 xl:col-span-8">
                      <div className="justify-between text-end xl:text-start ">
                        <div className="flex flex-col gap-0">
                          <h3 className="font-semibold text-foreground/90">
                            {slide.name}
                          </h3>
                          <p className="text-small text-foreground/80">
                            {slide.description}
                          </p>
                          <Divider />
                          <h1 className="text-small font-medium mt-2">
                            {slide.content}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}
        />
      </div>

      <div className="absolute top-24 right-0">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[360px] xl:max-w-[720px]"
          shadow="none"
          isBlurred
          isHoverable="true"
        >
          <CardBody>
            <div className="grid xl:grid-cols-6 gap-6 xl:gap-4 items-center justify-center">
              <div className="xl:col-span-5">
                <div className="justify-between text-start xl:text-end ">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      Ciclo Academico
                    </h3>
                    <p className="text-small text-foreground/80">
                      {cicloAcademico.description}
                    </p>
                    <Divider />
                    <div className="!justify-start xl:!justify-end my-2 xl:my-4">
                      {cicloAcademico.levels.map((level, index) => (
                        <Chip
                          color="secondary"
                          radius="sm"
                          key={index}
                          className="mx-1"
                        >
                          {level}
                        </Chip>
                      ))}
                    </div>

                    <Divider />
                    <h1 className="text-small font-medium my-2 xl:my-4">
                      {cicloAcademico.content}
                    </h1>
                    <Divider />
                    <AvatarGroup
                      isBordered
                      className="!justify-start xl:!justify-end my-2 xl:my-4"
                      max={10}
                      color="secondary"
                    >
                      {textSlides.map((slide, index) => (
                        <Avatar src={slide.href} key={index} />
                      ))}
                    </AvatarGroup>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
