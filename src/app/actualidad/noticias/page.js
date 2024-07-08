"use client";
import NewsGrid from "@/components/viewGrid";
import { useGlobal } from "@/context/globalContext";
import { useEffect, useState } from "react";
const news = [
  {
    createdBy: "Profesor Manuel",
    title: "Noticia 1",
    description: "Descripción de la noticia 1",
    image: "https://picsum.photos/1920/1080?random=1",
    date: "2021-01-01",
  },
  {
    createdBy: "Profesor Manuel",
    title: "Noticia 2",
    description: "Descripción de la noticia 2",
    image: "https://picsum.photos/1920/1080?random=2",
    date: "2021-01-02",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 3",
    description: "Descripción de la noticia 3",
    image: "https://picsum.photos/1920/1080?random=3",
    date: "2021-01-03",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi atque rem illo, ipsa beatae optio facere in nemo incidunt debitis, dolorum magni cupiditate iure repellat ullam eos. Iure, quam?",
    image: "https://picsum.photos/1920/1080?random=4",
    date: "2021-02-03",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 5",
    description: "Descripción de la noticia 5",
    image: "https://picsum.photos/1920/1080?random=5",
    date: "2021-02-04",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 6",
    description: "Descripción de la noticia 6",
    image: "https://picsum.photos/1920/1080?random=6",
    date: "2021-05-05",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 7",
    description: "Descripción de la noticia 7",
    image: "https://picsum.photos/1920/1080?random=7",
    date: "2021-05-06",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 8",
    description: "Descripción de la noticia 8",
    image: "https://picsum.photos/1920/1080?random=8",
    date: "2021-03-07",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 9",
    description: "Descripción de la noticia 9",
    image: "https://picsum.photos/1920/1080?random=9",
    date: "2021-03-08",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 10",
    description: "Descripción de la noticia 10",
    image: "https://picsum.photos/1920/1080?random=10",
    date: "2021-03-09",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 11",
    description: "Descripción de la noticia 11",
    image: "https://picsum.photos/1920/1080?random=11",
    date: "2021-03-10",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 12",
    description: "Descripción de la noticia 12",
    image: "https://picsum.photos/1920/1080?random=12",
    date: "2021-03-11",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 13",
    description: "Descripción de la noticia 13",
    image: "https://picsum.photos/1920/1080?random=13",
    date: "2021-03-12",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 14",
    description: "Descripción de la noticia 14",
    image: "https://picsum.photos/1920/1080?random=14",
    date: "2021-03-13",
  },
  {
    createdBy: "Profesora Juan Carlos",
    title: "Noticia 15",
    description: "Descripción de la noticia 15",
    image: "https://picsum.photos/1920/1080?random=15",
    date: "2021-03-14",
  },

  // Agrega más noticias según sea necesario
];
const getRandomHeight = () => {
  return Math.floor(Math.random() * (600 - 350 + 1)) + 200;
};

export default function Home() {
  const [transformedNews, setTransformedNews] = useState([]);
  const { noticias } = useGlobal();

  useEffect(() => {
    setTransformedNews(
      noticias.map((item) => ({
        ...item,
        height: getRandomHeight(),
      }))
    );
  }, [noticias]);

  if (!noticias || noticias.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }

  return (
    <>
      <h1 className="text-5xl mt-24 mb-12">Noticias</h1>
      <NewsGrid data={transformedNews} />
    </>
  );
}
