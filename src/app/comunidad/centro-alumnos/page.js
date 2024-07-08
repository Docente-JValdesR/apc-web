"use client";
import { useGlobal } from "@/context/globalContext";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [active, setActive] = useState([]);
  const { centroAlumnos } = useGlobal();

  useEffect(() => {
    setActive(centroAlumnos[0]);
  }, []);

  const content = {
    title: "Centro de Estudiantes <br/> CC.EE.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis, quos quod optio nostrum quia ab commodi! Aspernatur assumenda dignissimos fugit natus ipsum ab repudiandae similique incidunt optio reiciendis, vitae eveniet quo molestias laborum commodi? Qui ullam quibusdam alias blanditiis cumque, tenetur nemo nisi et quisquam maxime.",
  };
  const selectedPersonaje = (index) => {
    setActive(centroAlumnos[index]);
  };
  if (!centroAlumnos || centroAlumnos.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <div className="max-w-screen-xl min-h-screen pt-16 xl:pt-24">
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="xl:col-span-1">
          <div className="mb-10">
            {content.title.split("<br/>").map((text, index) => (
              <h3 key={index} className="text-3xl">
                {text}
                <br />
              </h3>
            ))}
          </div>
          {content.description.split("<br/>").map((text, index) => (
            <p key={index}>
              {text}
              <br />
            </p>
          ))}
        </div>
        <div className="xl:col-span-1 content-center order-1 xl:order-0">
          <Card isFooterBlurred radius="lg" className="w-full h-96 ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start text-start">
              <h3 className="text-2xl capitalize font-bold bg-white/60 p-2 rounded-md dark:bg-black/60">
                {active?.nombre} {active?.curso ? ` ${active?.curso}` : ""}
              </h3>
              <h3 className="text-base capitalize font-bold bg-white/60 p-2 rounded-md dark:bg-black/60">
                {active?.cargo}
              </h3>
            </CardHeader>
            <div
              className="absolute top-0 left-0 w-full h-full dark:bg-black/40 bg-white/40 hover:bg-white/0 dark:hover:bg-black/0 transition-all duration-300 ease-in-out"
              style={{ zIndex: 5 }}
            />
            <Image
              removeWrapper
              alt={active?.nombre}
              className="z-0 w-full h-full object-cover"
              src={active?.imagen}
            />

            <CardFooter className="text-log absolute bg-white/40 dark:bg-black/40 bottom-0 z-10   ">
              {active?.palabras}
            </CardFooter>
          </Card>
        </div>
        <div className="xl:col-span-2 order-0 xl:order-1">
          <div className={`gap-1 md:gap-4 flex justify-center`}>
            {centroAlumnos.map((personaje, index) => (
              <Image
                key={index}
                src={personaje.imagen}
                alt={personaje.nombre}
                className="w-24 rounded-md h-[300px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                onClick={() => selectedPersonaje(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
