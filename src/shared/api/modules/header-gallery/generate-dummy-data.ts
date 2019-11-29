import Image1 from "@assets/img-1.jpg";
import Image2 from "@assets/img-2.png";
import Image3 from "@assets/img-3.png";
import Image4 from "@assets/img-4.png";
import Image5 from "@assets/img-5.png";
import Image6 from "@assets/img-6.png";
import { IHeaderGallery } from "./header-gallery";
export const generateHeaderGalleryDummyData = (): string[] => [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6
];
export const generateGalleryDummyData = (): IHeaderGallery[] => [
  { type: "image", url: Image1, id: 0 },
  { type: "image", url: Image2, id: 1 },
  { type: "image", url: Image3, id: 2 },
  { type: "image", url: Image4, id: 3 },
  { type: "image", url: Image5, id: 4 },
  { type: "image", url: Image6, id: 5 },
  { type: "video", url: "https://www.youtube.com/watch?v=2oyhlad64-s", id: 6 },
  { type: "video", url: "https://www.youtube.com/watch?v=7gphiFVVtUI", id: 7 }
];
