import { Button, Link } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div>
      <h2>Página en Contrucción</h2>
      <p>Could not find requested resource</p>
      <Button as={Link} href="/" color="secondary" variant="shadow">
        Volver al Inicio
      </Button>
    </div>
  );
}
