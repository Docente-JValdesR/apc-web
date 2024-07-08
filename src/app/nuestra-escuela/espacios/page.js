"use client";
import { useGlobal } from "@/context/globalContext";
import { Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("");
  const { espacios } = useGlobal();

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const handleScroll = () => {
      let currentSection = activeTab;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  const handleScrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (espacios && espacios.length > 0) {
      const menuLinks = document.querySelectorAll(".menu-link");
      menuLinks.forEach((link) => {
        link.addEventListener("click", handleScrollToSection);
      });

      return () => {
        menuLinks.forEach((link) => {
          link.removeEventListener("click", handleScrollToSection);
        });
      };
    }
  }, [espacios]);

  if (!espacios || espacios.length === 0) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }

  return (
    <>
      <div className="mt-16 lg:mt-32 mb-5 fixed top-0 lg:left-0 lg:right-0 z-30 dark:bg-black bg-white lg:mx-40 xl:mx-96 lg:rounded-xl">
        <h1 className="text-2xl lg:text-5xl font-bold ">
          Nuestras Instalaciones
        </h1>
        <div className="flex flex-wrap gap-4 justify-center py-2 z-50">
          <Tabs
            aria-label="Options"
            color="secondary"
            selectedKey={activeTab}
            onSelectionChange={setActiveTab}
            classNames={{
              tabList: "grid grid-cols-3 lg:flex relative p-2 gap-6 ",
            }}
          >
            {espacios.map((espacio) => (
              <Tab
                key={espacio.key}
                title={espacio.titulo1}
                href={espacio.href}
                className="menu-link"
              />
            ))}
          </Tabs>
        </div>
      </div>
      {espacios.map((espacio) => (
        <div key={espacio.key}>
          <div
            id={`${espacio.key}`}
            className={`full-width-section min-h-screen bg-fixed bg-no-repeat bg-cover bg-center grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-12  ${espacio.background}`}
          >
            <div className={`relative ${espacio.columns1} lg:min-h-full`}>
              <div
                className={`absolute inset-0 bg-white dark:bg-slate-800 ${espacio.opacity}`}
              ></div>
              <div className="relative z-10 min-h-full content-center px-20 ">
                <h1 className="text-3xl">{espacio.titulo1}</h1>
                <p>{espacio.parrafo1}</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 py-14 px-4 lg:px-0">
            <div className={espacio.columns2}>
              <h1 className="text-3xl">{espacio.titulo2}</h1>
              <p>{espacio.parrafo2}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
