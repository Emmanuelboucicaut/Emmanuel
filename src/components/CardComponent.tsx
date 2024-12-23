import "../styles/CardComponent.css";
import { motion } from "framer-motion";

interface CardComponentProps {
  title: string;
  description: string;
  iconClass: string; // Class for the icon (e.g., Bootstrap icon)
  link: string; // URL for the "Read More" button
  linkText: string; // Text for the link button
  target?: string; // Target attribute for the link (e.g., "_blank" for new tab)
}
const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  iconClass,
  link,
  linkText,
  target
}) => {
  return (
    <motion.div
      className="rounded-card"
      whileHover={{
        scale: 1.05,
        translateY: -10,
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="card bg-dark text-light shadow-lg p-3 mb-5 rounded-card">
        <div className="card-body text-center">
          <div className="h1 mb-3">
            <i className={iconClass}></i>
          </div>
          <h3 className="card-title mb-3 rounded-card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary" target={target}>
            {linkText}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
