"use client";
import { Button, Image, Link } from "@nextui-org/react";
import CardAccesos from "@/components/UI/card-accesos";
import EmblaCarouselDots from "@/components/UI/embla-carousel-dots";
import { useGlobal } from "@/context/globalContext";

export default function Home() {
  const { card, noticias } = useGlobal();
  const OPTIONS = { loop: true };

  return (
    <>
      <div
        className="relative content-center text-center bg-portada bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center min-h-screen full-width-section "
        id="bienvenida"
      >
        <div className="absolute inset-0 bg-white opacity-60 dark:bg-slate-800"></div>
        <div className="relative z-10 max-w-screen-lg">
          <h1 className="md:text-5xl text-3xl font-bold">
            Bienvenidos al Centro Educacional Héroe Arturo Pérez Canto
          </h1>
          <h2 className="text-lg italic pt-8 font-bold">
            "Un lugar donde la historia, la educación y la comunidad se unen
            para construir un futuro mejor."
          </h2>
        </div>
      </div>

      <div className="grid xl:grid-cols-6 gap-4 my-20" id="historia">
        <div className="col-span-3 self-center justify-self-center order-2 md:order-1">
          <Image
            isZoomed
            src="/historia.png"
            alt="Historia"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-3 content-center order-1 md:order-2">
          <h2 className="xl:text-5xl text-3xl font-bold">Nuestra Historia</h2>
          <p className="py-5 px-10">
            Desde su fundación el 16 de septiembre de 1944, el Centro
            Educacional Héroe Arturo Pérez Canto ha sido un pilar en la
            comunidad de Recoleta, ofreciendo educación de calidad y promoviendo
            valores de inclusión y respeto. Hoy, con más de 75 años de historia,
            continuamos nuestro compromiso de formar estudiantes integrales,
            capaces de enfrentar los desafíos del futuro.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-6 gap-4 my-20" id="mision">
        <div className="col-span-3 content-center order-1">
          <h2 className="md:text-5xl text-3xl font-bold  mb-8">Misión</h2>
          <p className="mb-4">
            La misión del Centro Educacional Héroe Arturo Pérez Canto es
            promover el desarrollo integral de nuestros estudiantes, valorando
            su diversidad y multiculturalidad. Nos comprometemos a generar
            espacios propicios para el desarrollo cultural, artístico y
            deportivo, fomentando una convivencia democrática basada en el
            respeto y la práctica de los derechos humanos.
          </p>
        </div>
        <div className="col-span-3 content-center order-3 md:order-4">
          <h2 className="md:text-5xl text-3xl font-bold mb-8">Visión</h2>
          <p className="">
            Nuestra visión es constituirnos en una comunidad educativa inclusiva
            e intercultural, en la cual se promueve el desarrollo integral de
            todos y todas sus estudiantes. Fomentamos un ambiente de
            participación y convivencia democrática, fundamentada en el respeto
            y la práctica de los derechos humanos, el diálogo, el pensamiento
            crítico y el compromiso por el bien común.
          </p>
        </div>
        <div className="col-span-3 self-center justify-self-center order-2">
          <Image
            isZoomed
            width={400}
            src="/mision.png"
            alt="Misión"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-3  self-center justify-self-center	order-4 md:order-3">
          <Image
            isZoomed
            src="/vision.png"
            alt="Visión"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid xl:grid-cols-6 gap-4 my-20" id="noticias">
        <div className="xl:col-span-3 content-center">
          <h2 className="md:text-5xl text-3xl font-bold mb-8">Noticias</h2>
          <p className=" mb-8">
            Manténgase informado con las últimas actualizaciones y eventos
            importantes de nuestra comunidad escolar.
          </p>
        </div>
        <div className="xl:col-span-3 content-center">
          <Button
            as={Link}
            color="secondary"
            variant="shadow"
            href="/actualidad/noticias"
            className="block mb-4 content-center font-bold"
          >
            Ver Noticias
          </Button>
          <Button
            as={Link}
            color="default"
            variant="shadow"
            href="/actualidad/circulares"
            className="block content-center font-bold"
          >
            Ver Informativos
          </Button>
        </div>
        <div className="xl:col-span-6 content-center">
          <EmblaCarouselDots slides={noticias} options={OPTIONS} dots={true} />
        </div>
      </div>

      <div className="mb-20 grid xl:grid-cols-12 gap-4 my-20" id="accesos">
        <div className="col-span-12 content-center">
          <h2 className="md:text-5xl text-3xl font-bold">Accesos</h2>
          <p className="text-lg pt-5">
            Acceda a los recursos y servicios para nuestra comunidad educativa.
          </p>
        </div>
        <CardAccesos card={card} />
      </div>
    </>
  );
}
