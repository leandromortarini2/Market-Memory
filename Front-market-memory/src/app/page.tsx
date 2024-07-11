import Form from "@/components/form/Form";
import { ListProducts } from "@/components/ListProducts/ListProducts";
import { Portada } from "@/components/Portada/Portada";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen  flex flex-col justify-center items-center">
        <Portada />

        <Form />
        <ListProducts />
      </div>
    </>
  );
}
