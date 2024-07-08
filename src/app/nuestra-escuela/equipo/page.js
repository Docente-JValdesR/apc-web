"use client";
import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useGlobal } from "@/context/globalContext";

const tabData = {
  directivos: [
    {
      title: "Director",
      name: "Gabriel Nuñez Parada",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "UTP - Básica",
      name: "Claudia Ide",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "UTP - Media",
      name: "Teresa Vallespín",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Inspector General",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  tutores: [
    // agrega 20 tutores
    {
      title: "tutora primero Básico",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Segundo Básico",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutora Tercero Básico",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Cuarto Básico",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutora Quinto Básico",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Sexto Básico",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutora Séptimo Básico",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Octavo Básico",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutora Primero Medio",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Segundo Medio",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutora Tercero Medio",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tutor Cuarto Medio",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  "docentes de asignatura": [
    // agrega 20 docentes
    {
      title: "Profesor de Matemáticas",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesora de Lenguaje",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesor de Historia",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesora de Ciencias",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesor de Educación Física",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  asistentes: [
    {
      title: "Profesor de Matemáticas",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesora de Lenguaje",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesor de Historia",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesora de Ciencias",
      name: "María José",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //mujer
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Profesor de Educación Física",
      name: "Juan Carlos",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c", //hombre
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export default function App() {
  const [selected, setSelected] = useState("directivos");
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);
  const { equipo } = useGlobal();
  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768); // Ajusta este valor según el breakpoint de 'md' de tu framework CSS
    };

    handleResize(); // Comprobar el tamaño de la pantalla al cargar el componente
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full flex-col px-10 my-24">
      <h1 className="text-3xl md:text-5xl mb-4">Conoce a Nuestro Equipo</h1>
      <Tabs
        aria-label="Options"
        color="secondary"
        selectedKey={selected}
        onSelectionChange={setSelected}
        isVertical={isMdOrLarger}
        size="lg"
        classNames={{
          tabList: "flex flex-wrap w-full relative p-2 gap-6",
        }}
      >
        {Object.keys(equipo).map((key) => (
          <Tab key={key} title={key.charAt(0).toUpperCase() + key.slice(1)}>
            <div className="grid md:grid-cols-4 gap-4">
              {equipo[key].map((item, index) => (
                <Card
                  key={index}
                  isFooterBlurred
                  radius="lg"
                  className="w-full h-[300px] md:col-span-4 lg:col-span-2 xl:col-span-1 transition duration-100 hover:shadow-xl hover:scale-105"
                >
                  <CardHeader className="absolute z-10 top-1 flex-col items-start text-start">
                    <h3 className="text-base capitalize font-bold">
                      {item.title}
                    </h3>
                    <h3 className="text-base capitalize font-bold">
                      {item.name}
                    </h3>
                  </CardHeader>
                  <div
                    className="absolute top-0 left-0 w-full h-full dark:bg-black/40 bg-white/40"
                    style={{ zIndex: 5 }}
                  />
                  <Image
                    removeWrapper
                    alt={item.title}
                    className="z-0 w-full h-full object-cover"
                    src={item.image}
                  />

                  <CardFooter className="text-tiny absolute bg-white/40 dark:bg-black/40 bottom-0 z-10   ">
                    {item.content}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
