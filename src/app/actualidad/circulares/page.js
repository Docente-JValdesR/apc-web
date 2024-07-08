"use client";
import NewsGrid from "@/components/viewGrid";
import { useGlobal } from "@/context/globalContext";
import { useEffect, useState } from "react";

const getRandomHeight = () => {
  return Math.floor(Math.random() * (600 - 350 + 1)) + 200;
};

export default function Home() {
  const [transformedCirculares, setTransformedCirculares] = useState([]);
  const { circulares } = useGlobal();

  useEffect(() => {
    setTransformedCirculares(
      circulares.map((item) => ({
        ...item,
        height: getRandomHeight(),
      }))
    );
  }, [circulares]);

  if (!circulares || circulares.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <>
      <h1 className="text-5xl mt-24 mb-12">Circulares y Comunicaciones</h1>
      <NewsGrid data={transformedCirculares} />
    </>
  );
}
