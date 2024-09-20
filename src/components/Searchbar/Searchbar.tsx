import React, {useState} from "react";
import css from "./Searchbar.module.css";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({onSearch}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <header>
      <form
        className={css.searchbarForm}
        onSubmit={handleSubmit}>
        <button
          type="submit"
          className={css.searchbarBtn}></button>
        <input
          className={css.searchbarInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
