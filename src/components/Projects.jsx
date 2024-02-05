import vstats from "/src/assets/vstats.png";
import billow from "/src/assets/billow.png";

const Projects = () => (
  <section className="container container mx-auto py-28">
    <div>
      <h2 className="mb-10 mx-16 text-6xl font-heading text-primary">
        Recent Work
      </h2>
    </div>
    <div className="grid grid-cols-12 mx-16 text-primary">
      <div className="col-span-4">
        <div className="flex">
          <img src={vstats} className="rounded-2xl shadow" />
          <span className="ml-4 text-4xl font-heading">/01</span>
        </div>
        <h4 className="text-2xl font-heading mt-6">Vstats</h4>
        <p className="w-96 text-xl mt-2">
          A web app that compares two A league players statistics in a nice way.
        </p>
      </div>

      <div className="col-span-5 col-end-13 mt-10">
        <div className="flex justify-end">
          <span className="mr-4 text-4xl font-heading">/02</span>
          <div>
            <img src={billow} className="rounded-2xl shadow" />
            <h4 className="text-2xl font-heading mt-6">Billow Magazine</h4>
            <p className="text-xl w-80 mt-2">
              A website for a surf and travel magazine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Projects };
