"use client";
import Accordioncustom from "@/components/accordion";
import { useGlobal } from "@/context/globalContext";
import { Divider } from "@nextui-org/react";

export default function Page() {
  const { proyectoInstitucional } = useGlobal();

  if (!proyectoInstitucional || proyectoInstitucional.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <>
      <h1 className="text-5xl mt-24 xl:mt-28">
        Nuestro Compromiso con la Educación
      </h1>

      <div className="grid xl:grid-cols-6 my-10 min-h-[360px]">
        <div className="col-span-3 px-10 xl:px-20 content-center">
          <h2 className="text-3xl mb-3 xl:mb-7">
            Proyecto Educativo Institucional
          </h2>
          <p>
            El Proyecto Educativo Institucional (PEI) es un documento central
            que define la identidad, misión y objetivos de una institución
            educativa. Su propósito es guiar todas las actividades pedagógicas y
            administrativas hacia la mejora continua y el desarrollo integral de
            los estudiantes.
          </p>
        </div>
        <Accordioncustom data={proyectoInstitucional.PEI} />
      </div>
      <Divider />
      <div className="grid xl:grid-cols-6 my-10 min-h-[325px]">
        <div className="col-span-3 px-10 xl:px-20 content-center">
          <h2 className="text-3xl mb-3 xl:mb-7">Convivencia Escolar</h2>
          <p>
            La convivencia escolar es fundamental para crear un entorno seguro y
            propicio para el aprendizaje. Promover valores como el respeto, la
            empatía y la colaboración es esencial para el desarrollo integral de
            los estudiantes.
          </p>
        </div>
        <Accordioncustom data={proyectoInstitucional.CE} />
      </div>
      <Divider />
      <div className="grid xl:grid-cols-6 my-10 min-h-[432px]">
        <div className="col-span-3 px-10 xl:px-20 content-center">
          <h2 className="text-3xl mb-3 xl:mb-7">
            Centro de Atención Tutorial Integral (CATI){" "}
          </h2>
          <p>
            El Centro de Atención Tutorial Integral (CATI) es una iniciativa que
            busca brindar apoyo integral a los estudiantes, facilitando su
            desarrollo académico y personal mediante diversas estrategias y
            recursos. El objetivo principal del CATI es asegurar que todos los
            estudiantes reciban el acompañamiento necesario para superar
            cualquier barrera que puedan enfrentar en su proceso educativo.
          </p>
        </div>
        <Accordioncustom data={proyectoInstitucional.CATI} />
      </div>
      <Divider />
      <div className="grid xl:grid-cols-6 my-10 min-h-[700px]">
        <div className="col-span-3 px-10 xl:px-20 content-center">
          <h2 className="text-3xl mb-3 xl:mb-7">Reglamento Interno </h2>
          <p>
            El Reglamento Interno del Centro Educacional “Héroe Arturo Pérez
            Canto” establece las normas y políticas que rigen la convivencia y
            el funcionamiento del establecimiento. Este documento es fundamental
            para asegurar un ambiente escolar seguro, inclusivo y propicio para
            el aprendizaje.
            <br />
            <span className="font-bold">
              Objetivos del Reglamento Interno :
            </span>{" "}
            El objetivo principal del Reglamento Interno es garantizar que todos
            los miembros de la comunidad educativa comprendan y respeten las
            normas que facilitan una convivencia armónica y una gestión
            eficiente del centro educativo.
          </p>
        </div>
        <Accordioncustom data={proyectoInstitucional.RI} />
      </div>
    </>
  );
}
