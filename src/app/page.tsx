import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex-col flex items-center justify-center">
      <h1 className="font-bold text-3xl">Varux Tech</h1>
      <p className="text-lg mt-5 text-neutral-600 w-[500px] text-center">
        Specializing in modern technology and consumer hardware that is easy to
        use and suitable for small and big companies.
      </p>
      <div className="links mt-8">
        <Link className="mx-2" href={"/terms-of-service"}>
          <Button>Terms of Service</Button>
        </Link>
        <Link className="mx-2" href={"/privacy-policy"}>
          <Button>Privacy Policy</Button>
        </Link>
      </div>
    </div>
  );
}
