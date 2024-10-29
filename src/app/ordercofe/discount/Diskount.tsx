import { useState, useEffect } from "react";

interface ModalProps {
  badprice: boolean;
  SetBedPrice: (badprice: boolean) => void;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const Diskount: React.FC<ModalProps> = ({
  onSubmit,
  badprice,
  SetBedPrice,
}) => {
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
        <h2 className="HeaderCofeText">Введіть промокод</h2>
        {badprice && <p style={{ color: "red" }}>Невірний промокод</p>}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            SetBedPrice(false); // Скидаємо помилку при зміні значення
          }}
          placeholder="П..."
        />
        <button onClick={() => onSubmit(inputValue)}>Підтвердити</button>
      </div>
    </div>
  );
};

export default Diskount;
