import React, {useEffect, useState} from "react";
import {getImages} from "./components/Api/Api";
import {ImageGallery} from "./components/ImageGallery/ImageGallery";
import {Searchbar} from "./components/Searchbar/Searchbar";
import {Loader} from "./components/Loader/Loader";
import {Button} from "./components/Button/Button";
import {Modal} from "./components/Modal/Modal";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [largeImage, setLargeImage] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (query.trim() !== "") {
      fetchImages(page, query);
    }
  }, [query, page]);

  const fetchImages = async (page: number, query: string) => {
    setIsLoading(true);

    try {
      const {hits, totalHits} = await getImages(query, page);

      if (hits.length === 0) {
        toast.error("There are no images found. Please, enter a valid value");
      }
      setImages((prevImages) => [...prevImages, ...hits]);
      setTotal(totalHits);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (search: string) => {
    if (search.trim() === "") {
      return toast.warning("You wrote nothing");
    } else if (search !== query) {
      setImages([]);
      setPage(1);
      setQuery(search);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleModal = (largeImageURL: string = "") => {
    setShowModal((prevState) => !prevState);
    setLargeImage(largeImageURL);
  };

  const totalPage = Math.ceil(total / 12);

  return (
    <div className="app">
      <Searchbar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          toggleModal={toggleModal}
        />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && totalPage > page && <Button onLoadMore={handleLoadMore}></Button>}
      {showModal && (
        <Modal
          onClickClose={toggleModal}
          image={largeImage}></Modal>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};

export default App;