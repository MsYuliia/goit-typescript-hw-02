import React from "react";
import css from "./ImageGalleryItem.module.css";

interface Image {
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}

interface ImageGalleryItemProps {
  image: Image;
  toggleModal: (largeImageURL: string) => void;
}

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({image, toggleModal}) => {
  const {webformatURL, tags, largeImageURL} = image;

  const handleClick = () => {
    toggleModal(largeImageURL);
  };

  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryImg}
        src={webformatURL}
        alt={tags}
        onClick={handleClick}
      />
    </li>
  );
};
