import Image from "next/image";
import { CardPkm } from "./_components/CardPkm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] font-sans">
      <CardPkm />
    </div>
  );
}
