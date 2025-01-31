import { useState } from "react";

export default function Accordeon({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="acordeon">
      <div className={`acordeon-title ${isOpen ? "open" : "closed"}`}>
        <h1 className="title">{title}</h1>
        <button onClick={toggle}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <div className="acordeon-text">
          <p className="text">{description}</p>
        </div>
      )}
    </div>
  );
}
