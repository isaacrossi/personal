import blogexample from "/src/assets/blog-example.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";

const LatestMusings = () => {
  // eslint-disable-next-line no-unused-vars
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  return (
    <section className="mt-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-16">
          <h2 className="mb-10 text-6xl font-heading text-primary">
            Latest Musings
          </h2>
          <menu>
            <Link to={"/musings"}>
              <button className="font-heading text-primary border-2 px-4 py-1.5 border-primary rounded-full">
                See all
              </button>
            </Link>
          </menu>
        </div>
      </div>

      <div className="px-4 overflow-x-hidden">
        <div
          ref={sliderRef}
          className="keen-slider text-primary overflow-visible"
        >
          <div className="keen-slider__slide">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
          <div className="keen-slider__slide ">
            <img src={blogexample} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">A little intro</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LatestMusings };
