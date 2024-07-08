import { Image, Link } from "@nextui-org/react";

export default function Page() {
  const contentData = [
    {
      type: "title",
      content:
        "Historia del Centro Educacional &quot;Héroe Arturo Pérez Canto&quot;",
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=2",
      alt: "Historia",
    },
    {
      type: "text",
      content: (
        <>
          El Centro Educacional &quot;Héroe Arturo Pérez Canto&quot; inició sus
          actividades el 17 de septiembre de 1944 bajo el nombre de Escuela
          Experimental El Salto. En sus primeros años, se encontraba en un
          sector de chacras y quintas cerca de la Plaza El Salto, entre las
          calles Víctor Cuccuini y Américo Vespucio. Durante esa época, se fundó
          el{" "}
          <Link
            href="https://es.wikipedia.org/wiki/V%C3%ADctor_Domingo_Silva"
            target="_blank"
          >
            Círculo Literario Víctor Domingo Silva
          </Link>
          , una iniciativa que permitió a los vecinos del barrio expresar su
          creatividad poética y participar activamente en la vida cultural de la
          comunidad.
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          Con el tiempo, la escuela cambió de nombre y estructura varias veces:
          primero como Escuela Centralizada, luego como Escuela Consolidada, y
          en los años 80, con la municipalización de la educación escolar, se
          convirtió en el Liceo A-34. Finalmente, en la década de los 90, adoptó
          el nombre de Centro Educacional Héroe Arturo Pérez Canto, en honor al
          joven subteniente que combatió y murió en la{" "}
          <Link
            href="https://es.wikipedia.org/wiki/Guerra_del_Pac%C3%ADfico_(1879-1884)"
            target="_blank"
          >
            Guerra del Pacífico
          </Link>
          . Este cambio coincidió con la inclusión de una modalidad Técnico
          Profesional, especialmente en la especialidad de &quot;Técnico en la
          Explotación Industrial del Plástico&quot;.
        </>
      ),
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=3",
      alt: "Historia",
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=4",
      alt: "Historia",
    },
    {
      type: "text",
      content: (
        <>
          El liceo ha sido un pilar en la comunidad, organizando eventos como
          las Fiestas de la Primavera, campeonatos deportivos, festivales de
          música folclórica y teatro. La comunidad también recuerda con cariño
          la música pascuense interpretada por familias originarias de la{" "}
          <Link
            href="https://es.wikipedia.org/wiki/Isla_de_Pascua"
            target="_blank"
          >
            Isla de Pascua
          </Link>
          , quienes contribuyeron al conjunto folclórico del liceo.
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          En 2008, el establecimiento fue remodelado y ampliado para adaptarse a
          la jornada escolar completa, una iniciativa que buscaba mejorar la
          calidad de la educación. En 2015, bajo la gestión del alcalde Daniel
          Jadue, se creó el{" "}
          <Link href="https://www.municipalidadrecoleta.cl/" target="_blank">
            Centro de Apoyo Tutorial Integral (CATI)
          </Link>
          , un programa destinado a ofrecer apoyo integral a los estudiantes y
          sus familias.
        </>
      ),
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=5",
      alt: "Historia",
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=6",
      alt: "Historia",
    },
    {
      type: "text",
      content: (
        <>
          El liceo ofrece educación desde el nivel prebásico hasta la educación
          media, con una orientación científico-humanista. Su visión es
          constituirse en una comunidad educativa inclusiva e intercultural,
          promoviendo el desarrollo integral de los estudiantes en un ambiente
          de participación y convivencia democrática. Su misión es fomentar el
          desarrollo integral de los estudiantes, valorando su diversidad y
          multiculturalidad, y proporcionando espacios para el desarrollo
          cultural, artístico y deportivo.
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          El reglamento interno del liceo establece principios fundamentales
          como el respeto, la responsabilidad, la solidaridad, la empatía y la
          tolerancia, que guían las interacciones y comportamientos dentro de la
          comunidad escolar. Además, el liceo tiene un fuerte compromiso con la
          inclusión y la no discriminación, adoptando normativas y protocolos
          para asegurar un entorno seguro y respetuoso para todos los
          estudiantes.
        </>
      ),
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=7",
      alt: "Historia",
    },
    {
      type: "image",
      src: "https://picsum.photos/800/600?v=8",
      alt: "Historia",
    },
    {
      type: "text",
      content: (
        <>
          A lo largo de su historia, el liceo ha mantenido una conexión cercana
          con sus ex-alumnos, muchos de los cuales continúan apoyando las
          iniciativas del establecimiento, demostrando el impacto positivo y
          duradero de su educación.
        </>
      ),
    },
  ];
  return (
    <section className="text-center content-center min-h-screen max-w-screen-xl px-10 md:grid grid-cols-6 gap-4 my-24">
      {contentData.map((item, index) => {
        if (item.type === "title") {
          return (
            <div key={index} className="col-span-6">
              <h1 className="text-3xl md:text-5xl">{item.content}</h1>
            </div>
          );
        }
        if (item.type === "image") {
          return (
            <div key={index} className="col-span-3">
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-lg hover:scale-105"
              />
            </div>
          );
        }
        if (item.type === "text") {
          return (
            <div
              key={index}
              className="col-span-3 md:px-20 content-center hover:scale-105 hover:text-secondary transition duration-500"
            >
              <div className="text-lg">{item.content}</div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
}
