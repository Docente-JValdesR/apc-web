import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">Arturo Perez Canto .cl</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nuestra Escuela
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Oferta Educativa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Admisión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Normativa y Reglamentos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Vida Escolar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Comunidad Educativa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Participacion Comunitaria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
