
export default function Navbar() {
  return (
    <section className="bg-black px-20 py-4 2xl:px-28 2xl:py-6">
      <div className="flex justify-between">
        <div className="text-3xl 2xl:text-5xl font-bold text-orange-500 cursor-pointer">GAPSTAYS</div>
        <div className="text-base 2xl:text-lg font-medium text-white flex items-center">
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Home</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">About</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Rooms</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Booking</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Reviews</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Gallery</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Location</span>
          <span className="cursor-pointer mx-6 hover:text-orange-500 transition-all">Contact</span>
        </div>
      </div>
    </section>
  );
}
