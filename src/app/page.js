import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <p className="uppercase font-bold text-4xl">Centro Educacional</p>
      <h1 className="font-bold text-7xl">
        <span className="text-9xl">H</span>
        éroe <span className="text-9xl">A</span>rturo{" "}
        <span className="text-9xl">P</span>érez{" "}
        <span className="text-9xl">C</span>anto
      </h1>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/portada.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-white/60">
                Impulsando una educación integral para un futuro brillante.
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
