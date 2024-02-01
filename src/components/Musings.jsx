import blogexample from "/src/assets/blog-example.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Musings = () => {
  // eslint-disable-next-line no-unused-vars
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  return (
    <section className="py-28">
      <div className="container container mx-auto">
        <h2 className="mb-10 mx-16 text-6xl font-heading text-primary">
          Latest Musings
        </h2>
      </div>

      <div className="px-4 overflow-x-hidden">
        <div
          ref={sliderRef}
          className="keen-slider text-primary overflow-visible"
        >
          <div className="keen-slider__slide">
            <img src={blogexample} />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide">
            <img src={blogexample} className="w-xl" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide">
            <img src={blogexample} />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Musings };
