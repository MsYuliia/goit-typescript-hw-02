import React from "react";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

interface ImageGalleryProps {
  images: Image[];
  toggleModal: (largeImageURL: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({images, toggleModal}) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};
