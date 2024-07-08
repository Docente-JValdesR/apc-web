import { Link, Card, CardFooter, Image } from "@nextui-org/react";

export default function CardAccesos(props) {
  return (
    <>
      {props.card.map((item, index) => (
        <Card
          href={item.link}
          as={Link}
          key={index}
          target={item.link ? "_blank" : ""}
          isFooterBlurred
          className="w-full h-[200px] col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 bg-indigo-500 shadow-lg hover:scale-105"
        >
          <Image
            removeWrapper
            isZoomed
            alt={`imagen de ${item.title}`}
            className="z-0 w-full h-full object-cover bg-opacity-"
            src={item.image}
          />
          <CardFooter className="absolute bg-slate-800/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
            <p className="text-tiny text-white">{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
