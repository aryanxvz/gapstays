import { Navbar } from "@/components/sections/navbar";
import { About } from "@/components/sections/about";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <About />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}