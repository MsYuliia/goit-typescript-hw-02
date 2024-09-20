import axios from "axios";

const API_KEY = "36587845-1230cc489a729768340ecd21b";

const imagesApi = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

interface Image {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user: string;
  userImageURL: string;
}

interface ImagesApiResponse {
  total: number;
  totalHits: number;
  hits: Image[];
}

export const getImages = async (query: string, page: number): Promise<ImagesApiResponse> => {
  const response = await imagesApi.get<ImagesApiResponse>("", {
    params: {
      key: API_KEY,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
      q: query,
      page,
    },
  });

  return response.data;
};
