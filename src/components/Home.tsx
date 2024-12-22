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
                title="E-commerce App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, delectus."
                iconClass="bi bi-laptop"
                link="https://example.com"
                linkText="Read More"
              />
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <CardComponent
                title="E-commerce App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, delectus."
                iconClass="bi bi-laptop"
                link="https://example.com"
                linkText="Read More"
              />
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <CardComponent
                title="E-commerce App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, delectus."
                iconClass="bi bi-laptop"
                link="https://example.com"
                linkText="Read More"
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
