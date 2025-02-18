import { TestimonialCard } from "../testimonial-card";
import { TestimonialsHeader } from "../testimonial-header";

const testimonialsData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum praesentium necessitatibus vero."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quaerat quasi ipsa repellendus quam! Beatae pariatur quia distinctio fugit repellendus repudiandae nostrum consectetur quibusdam quo."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, modi!"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
    rating: 5,
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam, unde molestiae commodi temporibus dicta."
  },
  // Add more testimonial objects here
];

export const Testimonials = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <TestimonialsHeader />
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};