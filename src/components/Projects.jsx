import vstats from "/src/assets/vstats.jpg";
import billow from "/src/assets/billow.jpg";

const Projects = () => (
  <section className="container container mx-auto py-28">
    <div>
      <h2 className="mb-10 mx-16 text-6xl font-heading text-primary">
        Recent Work
      </h2>
    </div>
    <div className="grid grid-cols-12 mx-16 text-primary">
      <div className="col-span-6">
        <div className="flex">
          <img src={vstats} />
          <span className="text-4xl font-heading">/01</span>
        </div>
        <h4>Vstats</h4>
        <p className="w-96">
          A web app that compares two A league players statistics in a nice way.
        </p>
      </div>

      <div className="col-span-5 col-start-9 mt-40">
        <div className="flex justify-between">
          <span className="text-4xl font-heading">/02</span>
          <div>
            <img src={billow} />
            <h4>Billow Magazine</h4>
            <p className="w-80">A website for a surf and travel magazine.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Projects };
