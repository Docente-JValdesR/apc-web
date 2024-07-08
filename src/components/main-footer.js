import { Image, Link } from "@nextui-org/react";

export default function App() {
  return (
    <footer className="p-4 bg-slate-100 sm:p-6 dark:bg-gray-800 w-full">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-foreground">
                APCANTO
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Recursos
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com"
                    className="hover:underline"
                    color="secondary"
                  >
                    manual de convivencia
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    color="secondary"
                  >
                    reglamento interno
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Síguenos
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className="hover:underline " color="secondary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" color="secondary">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                OTROS LINKS
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className="hover:underline" color="secondary">
                    LINK 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" color="secondary">
                    LINK 2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Centro Educacional{" "}
            <Link
              href="https://arturoperezcanto.com"
              className="hover:underline"
              color="secondary"
            >
              Héroe Arturo Pérez Canto
            </Link>
            . Todos los derechos reservados. Página creada por{" "}
            <Link
              className="hover:underline"
              color="secondary"
              href="mailto:profe.josevaldes@gmail.com"
            >
              José Valdés R.{" "}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
