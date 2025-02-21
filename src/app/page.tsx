import { Navbar } from "@/components/sections/navbar";
import { About } from "@/components/sections/about";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Booking } from "@/components/sections/booking";
import { Rooms } from "@/components/sections/rooms";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Booking />
      <Testimonials />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}