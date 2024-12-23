import React from "react";
import NavBar from "./NavBar";
import Showcase from "./Showcase";
import Newsletter from "./Newsletter";
import CardComponent from "./CardComponent";
const Home: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Showcase */}
      <Showcase />
      {/* Newsletter */}
      <Newsletter />

      {/* Boxes */}
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <CardComponent
                title="Nath Store Ecommerce"
                description="NathStore it's ecommerce website build with AngularJS,  NodeJs, ExpressJs, MongoDB, Material UI, and Stripe. Deploy in Netlify with GitAction(CI/CD)."
                iconClass="bi bi-laptop"
                link="https://nathstore-dev.netlify.app/"
                target="_blank"
                linkText="Preview"
              />
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <CardComponent
                title="Weather App"
                description=" Weather App it's a website that shows the weather of the city you search for, build with ReactJS, Redux, and CSS. Deploy in Netlify with GitAction(CI/CD)."
                iconClass="bi bi-laptop"
                link="https://emmanuel-weather.netlify.app"
                target="_blank"
                linkText="Preview"
              />
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <CardComponent
                title="Medical Platform"
                description="This app help Medical clinic manage pent files, build with Angular Typescript, Material UI, Supabase and CSS. Deploy in Netlify with GitAction(CI/CD)."
                iconClass="bi bi-laptop"
                link="https://polymedfront.netlify.app"
                target="_blank"
                linkText="Preview"
              />
            </div>
            {/* Card 4 */}
            {/* <div className="col-md-4">
              <CardComponent
                title="E-commerce App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, delectus."
                iconClass="bi bi-laptop"
                link="https://example.com"
                linkText="Read More"
              />
            </div> */}
            {/* <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
              {technologies.map((tech, index) => (
                <TechnologyCard
                  key={index}
                  title={tech.title}
                  description={tech.description}
                  image={tech.image}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
