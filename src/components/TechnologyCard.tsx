import React from "react";
import { motion } from "framer-motion";
import "../styles/TechnologyCard.css";

// Define props using an interface
interface TechnologyCardProps {
  title: string;
  description: string;
  image: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  description,
  image
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
      <div
        className="rounded-card-background"
        style={{
          backgroundImage: `url(${image})`
        }}
      ></div>
      <div className="rounded-card-content">
        <h3 className="rounded-card-title">{title}</h3>
        <p className="rounded-card-description">{description}</p>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
