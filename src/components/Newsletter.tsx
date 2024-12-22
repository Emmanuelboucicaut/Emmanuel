import "animate.css";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-primary text-light">
      <div className="container-fluid">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="lead">
              Are you interested in leveraging my expertise in Front-End,
              Back-End, Mobile Development, or DevOps technologies? Let's
              collaborate to bring your ideas to life!
            </p>
          </motion.div>
          <strong className="mb-2 text-light">
            Feel free to reach out to me via email or phone for inquiries,
            consultations, or project discussions:
            <a
              className="btn btn-outline-light m-1"
              href="mailto:emmanuelboucicaut@gmail.com"
            >
              emmanuelboucicaut@gmail.com
            </a>
            <a className="btn btn-outline-light" href="tel:+15146321784">
              +1 (514) 632-1784
            </a>
          </strong>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
