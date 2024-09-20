import React from "react";
import css from "./Button.module.css";

interface ButtonProps {
  onLoadMore: () => void;
}

export const Button: React.FC<ButtonProps> = ({onLoadMore}) => {
  return (
    <div className={css.btnContainer}>
      <button
        type="button"
        className={css.btnLoadMore}
        onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};
