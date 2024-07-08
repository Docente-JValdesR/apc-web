"use client";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const NewsGrid = (props) => {
  const [modalIndex, setModalIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const { data, title, description } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const handleSimpleModal = (index) => {
    setModalIndex(index);
    onOpen();
  };

  return (
    <>
      <div className="px-5">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="my-4">{description}</p>
      </div>
      <div className="w-full max-w-5xl pb-10 !pt-0 !mt-0 mx-auto mb-10 gap-5 columns-1 md:columns-2 lg:columns-3 xl:columns-4 px-4 md:px-0 space-y-5">
        {data.map((item, index) => (
          <Card
            isFooterBlurred
            className={`w-full col-span-12 sm:col-span-5 scale-100 hover:scale-105 `}
            style={{ height: item.height }}
            key={index}
          >
            {item?.title ? (
              <CardHeader className="absolute z-20 top-1 flex-col items-start">
                <h3 className="">{item.createdBy}</h3>
                <h3 className="font-bold">{item.title}</h3>
              </CardHeader>
            ) : null}
            <div
              className="absolute top-0 left-0 w-full h-full dark:bg-black/40 bg-white/40"
              style={{ zIndex: 5 }}
              onClick={item.title ? null : () => handleSimpleModal(index)}
            />
            <Image
              removeWrapper
              alt={item.title}
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover "
              src={item.image}
            />
            {item?.date ? (
              <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-20 justify-between">
                <div>
                  <span className="text-tiny">{`Publicado: ${item.date}`}</span>
                </div>
                <Button
                  className="text-tiny"
                  color="secondary"
                  radius="full"
                  size="sm"
                  onClick={() => handleSimpleModal(index)}
                >
                  Leer Más
                </Button>
              </CardFooter>
            ) : null}
          </Card>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        backdrop="blur"
        placement="top-center"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] absolute xl:-top-14",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{data[modalIndex].title}</ModalHeader>
              <Image
                removeWrapper
                alt={"Imagen de " + title}
                className="max-h-[90vh] w-full object-cover p-4"
                src={data[modalIndex].image}
              />
              <ModalBody>
                <p className="text-lg">{data[modalIndex].description}</p>
              </ModalBody>
              <ModalFooter>
                {width < 1280 ? null : (
                  <Button
                    as={Link}
                    color="secondary"
                    href={data[modalIndex].image}
                    download
                  >
                    descargar
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewsGrid;
