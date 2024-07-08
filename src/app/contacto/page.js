"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  Snippet,
  Link,
} from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { Toaster, toast } from "sonner";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";

export default function ContactPage() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      motivo: "",
      email: "",
      nombre: "",
      telefono: "",
      descripcion: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("Formulario enviado correctamente", {
      className: "bg-secondary text-white border-0",
    });
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <>
      <div className="mt-[89px]">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="col-span-1 md:px-20 py-10 my-10 bg-secondary-50 order-1 md:order-0">
            <h1 className="text-3xl">Informacion de Contacto</h1>
            <div className="content-center h-full">
              <div className="text-start px-10 mb-2">
                Email:{" "}
                <Snippet size="sm" symbol="" variant="bordered">
                  apcanto@recoleta.cl
                </Snippet>
              </div>
              <div className="text-start px-10 mb-2">
                Dirección:{" "}
                <Snippet size="sm" symbol="" variant="bordered">
                  Reina de Chile 174, Recoleta
                </Snippet>
              </div>
              <div className="text-start px-10 mb-2">
                Teléfono:{" "}
                <Snippet size="sm" symbol="" variant="bordered">
                  +56 2 29457719
                </Snippet>
              </div>
              <div className="text-start px-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.7099141095596!2d-70.63039205979022!3d-33.40134719984297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5fdba990ad1%3A0x8026b79af4e4e694!2sCentro%20educacional%20Escuela%20Arturo%20Perez%20Canto%20A-34!5e0!3m2!1ses-419!2scl!4v1720334413233!5m2!1ses-419!2scl"
                  loading="lazy"
                  className="aspect-[16/9] w-full"
                ></iframe>
              </div>
              <div className="flex gap-4 justify-center mt-5">
                <Link
                  href="https://www.facebook.com/pages/Liceo%20Arturo%20Perez%20Canto%20A-34/106458956056340/"
                  target="_blank"
                >
                  <FaFacebook size={50} color="blue" />
                </Link>
                <di>
                  <Link
                    href="https://www.instagram.com/liceoarturoperezcanto/"
                    target="_blank"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="instagramGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#833ab4" />
                          <stop offset="50%" stopColor="#fd1d1d" />
                          <stop offset="100%" stopColor="#fcb045" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                        stroke="url(#instagramGradient)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z"
                        fill="url(#instagramGradient)"
                      />
                    </svg>
                  </Link>
                </di>

                <Link
                  href="https://www.tiktok.com/discover/arturo-perez-canto"
                  target="_blank"
                >
                  <FaTiktok size={50} color="black" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=+56229457719&text=Buenos%20d%C3%ADas%20colegio"
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="green" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:px-20 py-10 my-10 order-0 md:order-1">
            <h1 className="text-3xl mb-4">Formulario de Contacto</h1>

            <Card>
              <CardHeader className="grid">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <h3>Elige un Motivo</h3>
                  {errors.motivo && (
                    <p className="text-secondary">{errors.motivo.message}</p>
                  )}
                  <Controller
                    name="motivo"
                    control={control}
                    rules={{ required: "El motivo es requerido" }}
                    render={({ field }) => (
                      <RadioGroup
                        color="secondary"
                        orientation="horizontal"
                        className={`${
                          errors.motivo && "bg-secondary-50"
                        } p-4 rounded-lg content-center`}
                        {...field}
                      >
                        <Radio value="sugerencia">Sugerencia</Radio>
                        <Radio value="felicitacion">Felicitación</Radio>
                        <Radio value="consulta">Consulta</Radio>
                        <Radio value="queja">Queja</Radio>
                        <Radio value="otro-campo">Otro</Radio>
                      </RadioGroup>
                    )}
                  />
                  <CardBody>
                    <Input
                      {...register("email", {
                        required: "El correo es requerido",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Correo inválido",
                        },
                      })}
                      aria-invalid={errors.firstName ? "true" : "false"}
                      label="Email"
                      labelPlacement="outside"
                      className="mb-4"
                      color={errors.email ? "secondary" : "default"}
                    />
                    {errors.email && (
                      <p className="text-secondary">{errors.email.message}</p>
                    )}
                    <Input
                      {...register("nombre", {
                        required: "El nombre es requerido",
                      })}
                      type="text"
                      label="Nombre"
                      labelPlacement="outside"
                      className="mb-4"
                      color={errors.nombre ? "secondary" : "default"}
                    />
                    {errors.nombre && (
                      <p className="text-secondary">{errors.nombre.message}</p>
                    )}
                    <Input
                      {...register("telefono")}
                      type="tel"
                      label="Teléfono"
                      labelPlacement="outside"
                      className="mb-4"
                    />
                    <Textarea
                      {...register("descripcion", {
                        required: "Debe escribir un mensaje",
                      })}
                      label="Descripción"
                      labelPlacement="outside"
                      className="mb-4"
                      maxRows="4"
                      color={errors.descripcion ? "secondary" : "default"}
                    />
                    {errors.descripcion && (
                      <p className="text-secondary">
                        {errors.descripcion.message}
                      </p>
                    )}
                  </CardBody>
                  <CardFooter className="justify-end md:justify-evenly">
                    <Button type="reset" color="secondary" variant="light">
                      Limpiar
                    </Button>
                    <Button type="submit" color="secondary" variant="light">
                      Enviar
                    </Button>
                  </CardFooter>
                </form>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Toaster
        className="mt-24"
        richColors
        visibleToasts={4}
        closeButton
        position="top-center"
      />
    </>
  );
}
