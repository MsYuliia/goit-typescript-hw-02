import React, {useEffect} from "react";
import css from "./Modal.module.css";

interface ModalProps {
  image: string;
  onClickClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({image, onClickClose}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClickClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClickClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClickClose();
    }
  };

  return (
    <div
      className={css.overlay}
      onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img
          className={css.modalImg}
          src={image}
          alt="Here will be pic soon"
        />
      </div>
    </div>
  );
};
