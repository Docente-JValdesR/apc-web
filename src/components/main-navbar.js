"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function App() {
  const pathname = usePathname();

  const navigation = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Nuestra Escuela",
      href: "/nuestra-escuela",
      subItems: [
        { title: "Nosotros", href: "/nuestra-escuela/nosotros" },
        { title: "Equipo", href: "/nuestra-escuela/equipo" },
        { title: "Espacios", href: "/nuestra-escuela/espacios" },
        {
          title: "Proyecto Educativo",
          href: "/nuestra-escuela/proyecto-educativo",
        },
      ],
    },
    {
      title: "Ciclo de Enseñanza",
      href: "/ciclo-ensenanza",
      subItems: [
        { title: "Educación Parvularia", href: "/ciclo-ensenanza/parvularia" },
        {
          title: "Educación Básica Primero ciclo",
          href: "/ciclo-ensenanza/basica1",
        },
        {
          title: "Educación Básica Segundo ciclo",
          href: "/ciclo-ensenanza/basica2",
        },
        { title: "Educación Media", href: "/ciclo-ensenanza/media" },
      ],
    },
    {
      title: "Actualidad",
      href: "/actualidad",
      subItems: [
        { title: "Noticias", href: "/actualidad/noticias" },
        { title: "Circulares", href: "/actualidad/circulares" },
        { title: "Eventos", href: "/actualidad/eventos" },
        {
          title: "Actividades Extracurriculares",
          href: "/actualidad/actividades",
        },
      ],
    },

    {
      title: "Comunidad",
      href: "/comunidad",
      subItems: [
        { title: "Centro de Padres", href: "/comunidad/centro-padres" },
        { title: "Centro de Alumnos", href: "/comunidad/centro-alumnos" },
        { title: "Ex Alumnos", href: "/comunidad/ex-alumnos" },
        { title: "Otros Grupos y Comités", href: "/comunidad/otros" },
      ],
    },

    {
      title: "Contacto y Más",
      href: "/contacto",
      subItems: [
        { title: "Contacto", href: "/contacto" },
        {
          title: "Admisión",
          href: "/contacto/admision",
        },
        {
          title: "Documentos",
          href: "/documentos",
        },
        {
          title: "Calendario",
          href: "/contacto/calendario",
        },
      ],
    },
  ];

  const isActive = (href) => {
    const newPathname = "/" + pathname.split("/")[1];
    return newPathname === href;
  };

  const renderDropdown = (item) => (
    <NavbarItem key={item.title} className="">
      <Dropdown>
        <DropdownTrigger>
          <Link
            className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-bold cursor-pointer ${
              isActive(item.href) ? "text-secondary" : "text-foreground"
            } `}
            radius="sm"
            variant="light"
            size="lg"
          >
            {item.title}
          </Link>
        </DropdownTrigger>
        <DropdownMenu
          aria-label={`Dropdown menu ${item.title.toLowerCase()}`}
          className="w-[340px]"
        >
          {item.subItems.map((subItem, subIndex) => (
            <DropdownItem
              key={`${subItem.title}-${subIndex}`}
              textValue={`${subItem.title}-${subIndex}`}
            >
              <Link color="foreground" href={subItem.href}>
                {subItem.title}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NavbarItem>
  );

  return (
    <nav>
      <Navbar maxWidth="2xl" className="fixed top-0 left-0 xl:py-3" isBordered>
        <NavbarContent className="xl:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="xl:hidden" justify="end">
          <NavbarBrand className="justify-end">
            <Image src="/logo.png" alt="Hola" width={40} height={40} />
          </NavbarBrand>
          <ThemeSwitcher />
        </NavbarContent>
        <NavbarContent className="hidden xl:flex gap-4" justify="end">
          <NavbarBrand className="hover:text-secondary hover:scale-110 hover:translate-x-10 transition duration-200">
            <Image
              src="/logo.png"
              alt="escudo del arturo perez canto"
              width={60}
              height={60}
            />
            <h1 className="font-bold text-inherit text-xl ms-10 ">
              Liceo Héroe <br /> Arturo Perez Canto
            </h1>
          </NavbarBrand>

          {navigation.map((item) =>
            item.subItems ? (
              renderDropdown(item)
            ) : (
              <NavbarItem key={item.title}>
                <Link
                  color="foreground"
                  href={item.href}
                  size="lg"
                  radius="sm"
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-bold ${
                    isActive(item.href) ? "text-secondary" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            )
          )}

          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {navigation.map((item, index) => (
            <div key={`${item.title}-${index}`}>
              <Button
                as={Link}
                color="secondary"
                variant="light"
                className="-left-5 text-lg font-bold"
                href={item.subItems ? "#" : item.href}
                size="lg"
              >
                {item.title}
              </Button>
              {item.subItems &&
                item.subItems.map((subItem, subIndex) => (
                  <NavbarMenuItem key={`${subItem.title}-${subIndex}`}>
                    <Link
                      color="foreground"
                      className="w-full pl-4"
                      href={subItem.href}
                      size="md"
                    >
                      {subItem.title}
                    </Link>
                  </NavbarMenuItem>
                ))}
            </div>
          ))}
          <Divider />
          <div className="">@2021 Liceo Héroe Arturo Perez Canto</div>
        </NavbarMenu>
      </Navbar>
    </nav>
  );
}
