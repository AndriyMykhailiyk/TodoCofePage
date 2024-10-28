"use client";
import { useState, useEffect } from "react";
import "./Mocal.css";
interface ModalProps {
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onSubmit(inputValue);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue, onSubmit]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="HeaderCofeText">Введіть назву вашої кави</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Назва твоєї кави"
        />
        <button onClick={() => onSubmit(inputValue)}>Підтвердити</button>
      </div>
    </div>
  );
};

export default Modal;
