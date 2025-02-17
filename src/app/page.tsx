import { Navbar } from "@/components/sections/navbar";
import { About } from "@/components/sections/about";
import { Location } from "@/components/sections/location";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <About />
      <Location />
    </main>
  );
}