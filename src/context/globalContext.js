"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [equipo, setEquipo] = useState([]);
  const [espacios, setEspacios] = useState([]);
  const [proyectoInstitucional, setProyectoInstitucional] = useState([]);
  const [parvularia, setParvularia] = useState([]);
  const [basica1, setBasica1] = useState([]);
  const [basica2, setBasica2] = useState([]);
  const [media, setMedia] = useState([]);
  const [circulares, setCirculares] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [centroAlumnos, setCentroAlumnos] = useState([]);
  const [centroPadres, setCentroPadres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resCard = await fetch("/json/card.json");
      if (resCard.ok) {
        const json = await resCard.json();
        setCard(json.card);
      } else {
        console.error("Failed to fetch data");
      }
      const resNoticias = await fetch("/json/noticias.json");
      if (resNoticias.ok) {
        const json = await resNoticias.json();
        setNoticias(json.noticias);
      } else {
        console.error("Failed to fetch data");
      }
      const resEquipo = await fetch("/json/equipo.json");
      if (resEquipo.ok) {
        const json = await resEquipo.json();
        setEquipo(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resEspacios = await fetch("/json/espacios.json");
      if (resEspacios.ok) {
        const json = await resEspacios.json();
        setEspacios(json.espacios);
      } else {
        console.error("Failed to fetch data");
      }
      const resProyectoInstitucional = await fetch(
        "/json/proyecto-institucional.json"
      );
      if (resProyectoInstitucional.ok) {
        const json = await resProyectoInstitucional.json();
        setProyectoInstitucional(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resParvularia = await fetch("/json/parvularia.json");
      if (resParvularia.ok) {
        const json = await resParvularia.json();
        setParvularia(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resBasica1 = await fetch("/json/basica1.json");
      if (resBasica1.ok) {
        const json = await resBasica1.json();
        setBasica1(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resBasica2 = await fetch("/json/basica2.json");
      if (resBasica2.ok) {
        const json = await resBasica2.json();
        setBasica2(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resMedia = await fetch("/json/media.json");
      if (resMedia.ok) {
        const json = await resMedia.json();
        setMedia(json);
      } else {
        console.error("Failed to fetch data");
      }
      const resCirculares = await fetch("/json/circulares.json");
      if (resCirculares.ok) {
        const json = await resCirculares.json();
        setCirculares(json.circulares);
      } else {
        console.error("Failed to fetch data");
      }
      const resEventos = await fetch("/json/eventos.json");
      if (resEventos.ok) {
        const json = await resEventos.json();
        setEventos(json.eventos);
      } else {
        console.error("Failed to fetch data");
      }
      const resActividades = await fetch("/json/actividades.json");
      if (resActividades.ok) {
        const json = await resActividades.json();
        setActividades(json.actividades);
      } else {
        console.error("Failed to fetch data");
      }
      const resCentroAlumnos = await fetch("/json/centro-alumnos.json");
      if (resCentroAlumnos.ok) {
        const json = await resCentroAlumnos.json();
        console.log(json);
        setCentroAlumnos(json.alumnos);
      } else {
        console.error("Failed to fetch data");
      }
      const resCentroPadres = await fetch("/json/centro-padres.json");
      if (resCentroPadres.ok) {
        const json = await resCentroPadres.json();
        setCentroPadres(json.padres);
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        card,
        noticias,
        equipo,
        espacios,
        proyectoInstitucional,
        parvularia,
        basica1,
        basica2,
        media,
        circulares,
        eventos,
        actividades,
        centroAlumnos,
        centroPadres,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
